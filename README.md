# All In One Turborepo starter

A Turborepo codebase for building fullstack application with shared packages:

## Highlights
 - Type-safe full stack
 - Shard types
 - NestJS with Prisma ORM 

____________________________________________
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


Without global `turbo`:

```sh
npx turbo build --filter=docs
pnpm exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

You can develop a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):


```sh
turbo dev --filter=backend
```
