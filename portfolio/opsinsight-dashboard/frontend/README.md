# OpsInsight Dashboard Frontend

OpsInsight is an IT operations dashboard prototype for reviewing user, device, ticket, and risk data from one place. It is designed as a portfolio project that connects IT support workflows with frontend development, dashboard design, and automation-focused thinking.

## Overview

The frontend presents mock IT operations data in a polished dashboard experience. It helps surface common operational risks such as inactive users, non-compliant devices, overdue tickets, and high-priority support items.

The app is currently a frontend prototype built with local mock data. A future version can connect these views to a FastAPI backend, SQL database, and REST API endpoints.

## Features

- Landing page for the OpsInsight product concept
- Dashboard summary cards for users, devices, tickets, and high-risk items
- Users page with search and filters
- Devices page for compliance and check-in review
- Tickets page for support queue visibility
- Risk report page with high, medium, and low risk categories
- CSV export for the risk report
- Upload data page concept for future workflow expansion
- Responsive, utility-first UI using Tailwind CSS

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- ESLint

## Getting Started

Install dependencies:

```zsh
npm install
```

Start the local development server:

```zsh
npm run dev
```

Build the production version:

```zsh
npm run build
```

Preview the production build:

```zsh
npm run preview
```

Run linting:

```zsh
npm run lint
```

## Portfolio Demo

This app is included inside the main portfolio folder. The Vite config uses:

```ts
base: './'
```

That lets the built `dist/index.html` load its assets correctly from a nested folder path such as:

```text
portfolio/opsinsight-dashboard/frontend/dist/index.html
```

If the app is deployed separately, confirm the correct `base` setting for that hosting path.

## Project Status

Current status:

- Frontend dashboard prototype is implemented.
- Mock data is embedded in the React pages.
- Production build is available in `dist/`.
- Backend/API integration is planned, not yet connected.

Recommended next steps:

- Add a public GitHub repository link.
- Deploy the frontend to a clean public URL.
- Replace mock data with API responses.
- Add backend endpoints for users, devices, tickets, and risk reports.
- Add tests for risk rules and filtering behavior.
- Add real screenshots to the portfolio page.

## Portfolio Positioning

OpsInsight demonstrates the ability to turn IT operations experience into a practical software interface. It shows dashboard layout, state-driven filtering, risk-focused data presentation, and a user experience aimed at technical support and operations teams.
