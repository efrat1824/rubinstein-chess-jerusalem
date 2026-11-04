# Rubinstein Chess Club — Jerusalem

A live website for **Rubinstein Chess Club in Jerusalem**, designed to help players and families discover the club's activities, explore chess classes and events, and find ways to get involved.

**[Visit the live website](https://rubinstein-chess-jerusalem.org.il/)**

## Overview

This is a real-world, deployed front-end project developed and maintained for a community chess club. The site brings together key club information in one accessible place and is updated as the club's needs evolve.

## Main sections

- **Home** — introduction to the club and its activities.
- **About** — information about the club.
- **Classes** — information about chess learning opportunities.
- **Events** — club activities and events.
- **Gallery** — photos from the club and its community.
- **Join Us** — information for prospective members.
- **Contact** — ways to reach the club.

## Tech stack

| Area | Technologies |
| --- | --- |
| Front end | React, TypeScript |
| Development/build | Vite |
| Styling | Tailwind CSS |
| UI components | shadcn/ui, Radix UI |
| Routing | React Router |
| Deployment | Vercel |
| Version control | Git and GitHub |

## Getting started

**Requirements:** Node.js and npm.

```bash
# Clone the repository (replace with the repository URL)
git clone <REPOSITORY_URL>
cd rubinstein-chess-jerusalem

# Install dependencies
npm install

# Start the development server
npm run dev
```

Vite prints the local development URL after startup.

### Useful commands

```bash
npm run build       # Build for production
npm run preview     # Preview the production build locally
npm run lint        # Run ESLint
npm run test        # Run the existing Vitest test suite
```

> **Testing note:** The repository currently includes an example test. Meaningful automated tests for club-specific functionality are planned and are not yet claimed as completed.

## Project structure

```text
src/
  pages/          # Home, About, Classes, Events, Gallery, Join Us, Contact
  components/     # Shared layout and UI components
  assets/         # Images and other project assets
  hooks/          # Reusable React hooks
  lib/            # Shared utilities
  test/           # Test setup and sample tests
public/           # Public static files
vercel.json       # Deployment configuration
```

## Development and maintenance

The website was deployed to production using Vercel and has continued to evolve through iterative development in Visual Studio Code, with changes tracked in GitHub.

## Next improvements

- Add meaningful automated tests for navigation and key pages.
- Review accessibility, mobile usability, and performance.
- Continue improving content organization and maintainability.

## Maintainer

**Efrat Cohen** — [GitHub profile](https://github.com/efrat1824)

> Project website, photography, and club-related content may have separate ownership or usage rights. Confirm permission before republishing assets or making the full source repository public.
