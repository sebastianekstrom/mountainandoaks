![Logo of sebbebakes!](https://github.com/sebastianekstrom/sebbe-baking/assets/1921046/21081a85-9535-44ab-a950-0505d4023315)

This is the repostitory for [sebbebakes.com](https://sebbebakes.com/). Built with [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com) and deployed/hosted with [Vercel](https://vercel.com/).

| Tool             | Status                                                                                                                                                                                              |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Code coverage    |                 [![codecov](https://codecov.io/gh/sebastianekstrom/sebbebakes/branch/main/graph/badge.svg?token=83G7VKF6FS)](https://codecov.io/gh/sebastianekstrom/sebbebakes)                 |
| Lint             |             [![💅 Lint](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lint.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lint.yml)             |
| Tests            | [![🧪 Tests](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/test.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/test.yml)                        |
| Lighthouse       | [![💡 Lighthouse](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lighthouse.yml)       |
| TypeScript check | [![🕵🏻 Type check](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/type-check.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/type-check.yml)      |
| E2E              | [![👀 End-to-end tests](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/playwright.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/playwright.yml) |
| Dead code        | [![💀 Dead code check](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/dead-code.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/dead-code.yml)    |

## 💻 Getting started

Clone this repository and run the following commands:

```bash
$ yarn install
$ yarn run dev
```

The site will be available on [http://localhost:3000](http://localhost:3000).

## 🧑‍🍳 Adding a new recipe

Since the recipes are _very_ custom, and often requires custom code, creating a new one requires a few steps:

### 1. Create the image assets

A recipe requires the following image assets:

- `hero.jpg` – 1226px x 966px
- `tall.jpg` – 918px x 1120px
- `wide.jpg` – 816px x 392px
- `square.jpg` – 408px x 408px
- `meta.png` – 1200px x 627px (notice the `.png` format)

These should be placed in `public/images/<recipe-slug>/thumbnails/`.

You can find all the templates in [this Figma](https://www.figma.com/file/yg7A1e8cgdHObsdZhx7HHA/Redesign?type=design&node-id=327%3A303&t=8CZrdOD5WHJzg4kV-1).

### 3. Add the recipe to the global list

All recipes are fetched from [recipes.ts](https://github.com/sebastianekstrom/sebbe-baking/blob/main/constants/recipes.ts), add the new recipe at the top of the list.

### 4. Create the new recipe page

Add a new file inside of the `pages/` directory, in the appropriate folder. The file name will become the slug, e.g:

`pages/food-and-drinks/bbq-chicken.tsx` -> https://sebbebakes.com/food-and-drinks/bbq-chicken

Create the recipe with whatever components you need, use other recipes as inspiration.

### 4. Create the PR

After that create a PR, as soon as all the checks are green you can go a head and merge and it'll be available on https://sebbebakes.com within a few minutes!

## 🧪 Testing

The Github actions runs the following tests:

- **Unit tests**
  - These are ran with [Jest](https://jestjs.io/) with the help of [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
  - Run `yarn run test` to run the tests locally
- **E2E**
  - There's E2E tests with the help of [Playwright](https://playwright.dev/)
  - Run `yarn run test:e2e` to run the tests locally
- **Type checks**
  - TypeScript type checks are ran with the `tsc` command
  - Run `yarn run tsc` to run the tests locally
- **Lighthouse**
  - [Lighthouse](https://github.com/GoogleChrome/lighthouse) checks to test performance, a11y and SEO

## 🚢 Deployment

Deploys are done automatically as soon as a new commit hits the `main` branch. Deployments can be monitored on the [Vercel dashboard](https://vercel.com/sebastianekstrom/sebbe-baking).

## 🔗 Useful links

- [Google Analytics](https://analytics.google.com/analytics/web/#/p346891790/reports/intelligenthome)
- [Vercel dashboard](https://vercel.com/sebastianekstrom/sebbe-baking)
