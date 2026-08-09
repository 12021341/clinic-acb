# Project Overview
Monorepo setup for the Clinic Factory application featuring an Angular frontend at the root and a decoupled backend workspace.

## Repository Layout
- `/`: Angular Frontend root application.
- `/backend`: Backend API service folder.
- `/src`: Frontend Angular source code.
- `/public`: Static frontend assets.

## Execution Commands
- Frontend Dev: `npm start`
- Frontend Build: `npm run build`

## Coding Standards & Rules
- **UI Stack**: Build the user interface exclusively using **Tailwind CSS** for layout/utility styling and **Angular Material** for pre-built components and design patterns.
- **Angular Conventions**: Use modern Angular features (v19+). Prefer Signals (`signal`, `computed`) for reactive state management. Use the structural control flow block syntax (`@if`, `@for`).
- **Styles**: Integrate styling cleanly using Tailwind utility classes directly in the template. Avoid writing bloated custom CSS inside component stylesheet files.
- **Backend Rules**: Maintain independent operations within the `/backend` folder. Ensure proper CORS setups to allow requests from the local Angular development server.
