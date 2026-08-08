# Clinic Backend (NestJS)

Starter API for the clinic management app. Deploy this as its own service,
independent of the Angular frontend.

## Stack
- NestJS + TypeScript
- PostgreSQL via Prisma ORM
- JWT auth (access + refresh tokens), Passport
- class-validator for request validation
- Swagger docs auto-generated at `/api/docs`
- Helmet + rate limiting (`@nestjs/throttler`) enabled by default

## Project layout
```
src/
  common/            # cross-cutting: guards, decorators, filters
  modules/
    prisma/          # PrismaService, global DB access
    auth/            # register, login, refresh, logout
    users/           # profile + administrator-managed user lifecycle
    patients/        # clinical patient records (staff-only)
    appointments/    # scheduling, with double-booking prevention
    prescriptions/   # doctor-issued medication orders
    dashboard/       # aggregate dashboard feed
prisma/
  schema.prisma      # application data model
```

## Getting started

1. Install dependencies:
   ```
   npm install
   ```
   (You'll also need the Nest CLI globally, or use `npx nest` — this scaffold
   assumes standard `nest build`/`nest start` scripts from `@nestjs/cli`.)

2. Copy environment variables:
   ```
   cp .env.example .env
   ```
   Fill in a real `DATABASE_URL` and generate strong random values for
   `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` (e.g. `openssl rand -hex 32`).

3. Set up the database (requires a running Postgres instance):
   ```
   npm run prisma:migrate
   npm run prisma:generate
   ```

   On a deployed server, use `python3 run_migration.py` or
   `npm run prisma:migrate:deploy` instead. See `DATABASE_DEPLOYMENT.txt`.

4. Run the dev server:
   ```
   npm run start:dev
   ```
   API will be available at `http://localhost:3000/api/v1`, docs at
   `http://localhost:3000/api/docs`.

## Connecting the Angular frontend

- Point your Angular `environment.ts` `apiUrl` at `http://localhost:3000/api/v1`
  in dev, and your deployed backend URL in production.
- Set `CORS_ORIGIN` in `.env` to match wherever Angular is served from.
- Store the access token in memory (e.g. an Angular service, not
  localStorage, to reduce XSS exposure) and attach it as
  `Authorization: Bearer <token>` via an HTTP interceptor.
- Use the refresh token flow to silently renew the access token before it
  expires (15 min by default) rather than forcing re-login.

## Frontend API contract

All routes are prefixed with `/api/v1`. Protected routes require a bearer access token.

| UI area | Method and route | Purpose |
| --- | --- | --- |
| Authentication | `POST /auth/register/patient`, `/auth/login`, `/auth/refresh`, `/auth/logout` | Patient registration and token lifecycle |
| Current account | `GET /users/me` | Header/profile identity |
| Dashboard | `GET /dashboard` | Today's statistics, schedule, and recent patients |
| Appointments | `GET/POST /appointments`, `GET/PATCH/DELETE /appointments/:id` | Calendar and booking workflow |
| Patients | `GET/POST /patients`, `GET/PATCH/DELETE /patients/:id` | Patient workspace |
| Patient portal | `GET /patients/me`, `/patients/me/appointments`, `/patients/me/prescriptions` | Signed-in patient's own records |
| Prescriptions | `GET/POST /prescriptions`, `POST /prescriptions/batch`, `GET/PATCH /prescriptions/:id` | Atomically create one or more medications, review, issue, and print prescriptions |
| User management | `GET/POST /users`, `PATCH/DELETE /users/:id` | Administrator user CRUD; delete safely deactivates |
| Vaccinations | `GET/POST /vaccines`, `GET /vaccines/:id` | Patient vaccination history |

Angular role labels map to API roles as follows: `Administrator` → `ADMIN`,
`Secretary` → `FRONT_DESK`, `Doctor` → `DOCTOR`, and `Patient` → `PATIENT`.

## What's intentionally left out (for you to add as you go)
- File uploads (lab results, scanned documents) — consider `@nestjs/platform-express`'s
  built-in Multer support + S3-compatible storage
- Email/SMS appointment reminders — a queue (BullMQ) is a natural fit

## Security notes for clinic/health data
- Never log request bodies containing patient data
- Restrict the Swagger docs route (or disable it) in production
- Review your local data privacy law (e.g. Data Privacy Act of 2012 in the
  Philippines) for retention, consent, and breach-notification requirements
- The `AuditLog` model is scaffolded but not yet wired up — consider adding
  an interceptor that writes an entry whenever patient records are read or
  modified
