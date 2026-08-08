#!/usr/bin/env python3
"""Apply committed Prisma migrations safely in a deployed environment.

This script creates/updates tables by running `prisma migrate deploy`. It does
not create new migration files and does not reset or erase the database.
Seeding fictional development data is opt-in and blocked in production unless
the operator explicitly acknowledges it.
"""

from __future__ import annotations

import argparse
import os
from pathlib import Path
import shutil
import subprocess
import sys


PROJECT_ROOT = Path(__file__).resolve().parent


def run(command: list[str]) -> None:
    print(f"Running: {' '.join(command)}", flush=True)
    subprocess.run(command, cwd=PROJECT_ROOT, check=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Apply pending Prisma migrations to DATABASE_URL."
    )
    parser.add_argument(
        "--seed",
        action="store_true",
        help="Also load the fictional sample records from prisma/seed.ts.",
    )
    parser.add_argument(
        "--allow-production-seed",
        action="store_true",
        help="Explicitly allow --seed when NODE_ENV=production.",
    )
    return parser.parse_args()


def has_database_config() -> bool:
    if os.environ.get("DATABASE_URL"):
        return True
    env_file = PROJECT_ROOT / ".env"
    if not env_file.exists():
        return False
    return any(
        line.strip().startswith("DATABASE_URL=")
        for line in env_file.read_text(encoding="utf-8").splitlines()
    )


def main() -> int:
    args = parse_args()

    if not has_database_config():
        print(
            "DATABASE_URL is not set. Configure the deployment environment "
            "with your PostgreSQL connection string.",
            file=sys.stderr,
        )
        return 2

    npx = shutil.which("npx")
    if not npx:
        print("npx was not found. Install Node.js and project dependencies.", file=sys.stderr)
        return 2

    try:
        run([npx, "prisma", "migrate", "deploy"])

        if args.seed:
            is_production = os.environ.get("NODE_ENV", "").lower() == "production"
            if is_production and not args.allow_production_seed:
                print(
                    "Migrations were applied, but sample data was not seeded. "
                    "Use --allow-production-seed only if fictional records are "
                    "intentionally required in production.",
                    file=sys.stderr,
                )
                return 3
            run([npx, "prisma", "db", "seed"])
    except subprocess.CalledProcessError as error:
        print(f"Migration command failed with exit code {error.returncode}.", file=sys.stderr)
        return error.returncode

    print("Database migrations completed successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
