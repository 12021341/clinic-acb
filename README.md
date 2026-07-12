# CareFlow Clinic

An Angular clinic workspace for doctors, secretaries, administrators, and patients. The current frontend prototype includes role-aware navigation, appointment and patient overviews, medical-history entry points, safety alerts, and a printable prescription layout.

## Recommended architecture

- **Frontend:** Angular with standalone components and route-level authorization guards.
- **API:** NestJS REST API, organized by identity, patients, appointments, encounters, and prescriptions.
- **Database:** PostgreSQL with Prisma ORM and migration-controlled schemas.
- **Authentication:** OpenID Connect provider (Auth0, Keycloak, or Microsoft Entra ID) with MFA; keep authorization checks in both Angular and NestJS.
- **Operations:** Object storage for documents, Redis for short-lived queues/cache, and immutable audit events for every clinical-record access or change.

## Run locally

Install Node.js 20.19+ or 22.12+, then:

```bash
npm install
npm start
```

Open `http://localhost:4200`. Use the “View as” selector to preview each role. Data is currently demonstrative and must not be used for clinical care.

## Production safeguards

Before live use, connect the UI to the API, add server-enforced RBAC, MFA, encryption, audit logging, database backups, consent and retention policies, prescription signing, medication/allergy interaction validation, and a compliance review for the clinic’s jurisdiction.
