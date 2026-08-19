# Fiverr Web with Next.js

- [Fiverr Web with Next.js](#fiverr-web-with-nextjs)
  - [Tech stack](#tech-stack)
  - [Features](#features)
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
- Linting: ESLint

## Features

## Project Structure

```text
./
│   .gitignore
│   eslint.config.mjs
│   next.config.ts
│   package.json
│   pnpm-lock.yaml
│   pnpm-workspace.yaml
│   postcss.config.mjs
│   README.md
│   tsconfig.json
│
├───.github                       # PR template
├───public                        # Static assets
└───src
    └───app                       # Routes (App Router)
```

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

| Script       | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Running dev server       |
| `pnpm build` | Build production         |
| `pnpm start` | Running production build |
| `pnpm lint`  | Linting with ESLint      |

## About Me

- Khang Nguyen [GitHub](https://github.com/ngkhang)
