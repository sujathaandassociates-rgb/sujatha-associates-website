# Sujatha & Associates

Marketing website and consultation-request dashboard for Sujatha & Associates.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and supply the required values:
   - `DATABASE_URL`: PostgreSQL connection string.
   - `JWT_SECRET`: a long, random secret used to sign dashboard sessions.
   - `ADMIN_EMAIL` and `ADMIN_PASSWORD`: credentials for the initial dashboard administrator.
3. Apply the database schema with `npm run db:deploy`.
4. Create or update the administrator account with `npm run db:seed`.
5. Start the application with `npm run dev`.

The public consultation form is available at `/contact`. Administrators sign in at `/dashboard/login` and can review and update requests at `/dashboard`.

## Deployment

Set `DATABASE_URL` and `JWT_SECRET` in the deployment provider. Run `npm run db:deploy` against the production database before deployment, then provision the administrator by running `npm run db:seed` with `ADMIN_EMAIL` and `ADMIN_PASSWORD` set in a secure environment. Do not add administrator credentials to source control.

## Verification

- `npm run lint`
- `npm run db:validate`
- `npm run build`
