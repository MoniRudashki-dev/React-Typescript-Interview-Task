# Trip Card Explorer

A small React + TypeScript app that displays a list of “trip cards” loaded from a local JSON file. It supports searching by trip name, sorting by rating, and viewing full details in a modal.

---

## Tech Stack

- React + TypeScript (Vite)
- SASS (SCSS)
- Local mock JSON (`public/data/data.json`)

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm

### Install

```bash
pnpm install

Run (Development) - pnpm dev

Build (Production) - pnpm build

Preview (Production Build) - pnpm preview

- Data Source

Trips are loaded from: public/data/data.json

The app fetches the file using: ${import.meta.env.BASE_URL}/data/data.json

This keeps the path working even if the app is deployed under a subpath.

```

\*\*Features

- Fetch trips from a local JSON file
- Loading and error states (with retry)
- Responsive grid layout
- Trip card shows:
  Image
  Name
  Rating
  Short description
  “More Info” button
  Modal with full trip details (long description)
  Search by name (case-insensitive)
  “Sort by rating” toggle for visible results

\*\*Project Structure

- API
- components
- hooks
- styles
- types
- utils

Design Decisions

- Container + presentational split Trips owns data and state; UI components stay focused and reusable.

- Derived data via selector
  Filtering and sorting are done in getVisibleTrips to keep render logic readable.

- Reusable UI primitives
  Modal and StateMessage provide consistent UI/UX without extra libraries.

- SASS per component
  SCSS is colocated with components to keep styles maintainable and scoped.

\*\*Trade-offs

- No external data/state libraries
  React hooks are sufficient for this scope; fewer dependencies keeps it simple.

- Modal accessibility scope
  ESC close + overlay click close are included. Full focus-trap behavior is intentionally omitted for the assignment timeframe.

- Local JSON instead of a real API
  Matches the assignment requirement and keeps setup lightweight.
