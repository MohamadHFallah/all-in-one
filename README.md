# Turborepo starter

This Turborepo includes the following packages/apps:

### Apps and Packages

- `backend`: a [Nest.js](https://nestjs.com/) app
`eslint-config-prettier`
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd allInOne
turbo build
```

Without global `turbo`, use your package manager:

```sh
cd allInOne
npx turbo build
pnpm dlx turbo build
pnpm exec turbo build
```

```sh
turbo build --filter=docs
```

Without global `turbo`:

```sh
npx turbo build --filter=docs
pnpm exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd allInOne
turbo dev
```

Without global `turbo`, use your package manager:

```sh
cd allInOne
npx turbo dev
pnpm exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo dev --filter=backend
```

Without global `turbo`:

```sh
npx turbo dev --filter=backend
pnpm exec turbo dev --filter=backend
pnpm exec turbo dev --filter=backend
```