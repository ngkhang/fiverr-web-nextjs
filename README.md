# Fiverr Web with Next.js

- [Fiverr Web with Next.js](#fiverr-web-with-nextjs)
  - [Tech stack](#tech-stack)
  - [Features](#features)
  - [Architecture](#architecture)
  - [Project Structure](#project-structure)
  - [How to run?](#how-to-run)
    - [Requirements](#requirements)
    - [Getting Started](#getting-started)
    - [Scripts](#scripts)
  - [About Me](#about-me)

## Tech stack

- Framework: Next.js 16 App Router
- Language: TypeScript
- Styling: Tailwind CSS v4
- Package manager: pnpm
- UI Components: Shadcn/ui
- Validation: Zod
- HTTP client: Axios
- State management: TanStack Query (Server state) and Zustand (client state)
- Theme: `next-themes`
- Linting/Formatting: ESLint, Prettier, EditorConfig
- Git hooks: Husky, lint-staged, Commitlint

## Features

## Architecture

> To be documented once the core folder structure and data flow are established.

## Project Structure

```text
./
│   .editorconfig
│   .env.example
│   .gitignore
│   .prettierignore
│   commitlint.config.mjs
│   components.json
│   eslint.config.mjs
│   next.config.ts
│   package.json
│   pnpm-lock.yaml
│   pnpm-workspace.yaml
│   postcss.config.mjs
│   prettier.config.mjs
│   README.md
│   tsconfig.json
│
├───.github                   # PR template, CI pipeline
├───.husky                    # Git hooks
├───docs                      # Documentation
├───public                    # Static assets
└───src
    ├───app                   # Routes (App Router)
    ├───components            # Global/shared UI components
    │   └───ui                    # Generated shadcn/ui primitives
    ├───config                # App-wide configuration (env, site metadata)
    ├───constants             # Global/shared constants
    ├───features              # Business logic
    │   └──<domain>
    ├───hooks                 # Global reusable hooks
    ├───lib                   # Global generic, helper functions
    ├───store                 # Global state
    └───types                 # Global/shared TS type
```

- **Rule**:
  - All domains (job, job-category, hiring...) fetch/cache through TanStack Query Client.
  - Each **feature** folder is self-contained ("closed") and exposes only its public API via `index.ts` (barrel export) - nothing outside the folder should import from its internals directly.
  - Each feature folder (`features/<domain>`) may contain its own:

    ```text
    features/<domain>
    ├───components
    ├───constants
    ├───hooks
    ├───services
    ├───schemas
    ├───store
    ├───utils
    ├───types
    └───index.ts
    ```

  - If a folder is shared by 2+ features, promote it to the global `src/` equivalent.

## How to run?

### Requirements

- Node.js `>= 20`
- pnpm `>= 9`

### Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Script              | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `pnpm dev`          | Running dev server                                   |
| `pnpm build`        | Build production                                     |
| `pnpm start`        | Running production build                             |
| `pnpm lint`         | Linting with ESLint                                  |
| `pnpm lint:fix`     | Fix linting (if ESLint supported)                    |
| `pnpm format:check` | Validation style code with Prettier                  |
| `pnpm format`       | Format style code with Prettier                      |
| `pnpm typecheck`    | Validate type                                        |
| `pnpm check:all`    | Linting, check formatting, and type-safe             |
| `pnpm fix:all`      | Fix linting (if ESLint supported), format style code |

## About Me

- Khang Nguyen [GitHub](https://github.com/ngkhang)
