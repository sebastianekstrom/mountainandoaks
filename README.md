![Logo of sebbebakes!](https://i.imgur.com/zwVABcA.png)

<p align="center">
  The repostitory for <a href="https://sebbebakes.com">sebbebakes.com</a> – A place for food, pizza and bread.
</p>

<p align="center">
  <sub>🛠️ <a href="https://nextjs.org">Next.js</a>  – 💅 <a href="https://tailwindcss.com">Tailwind</a>  – 📦 <a href="https://vercel.com">Vercel</a></sub>
</p>

---

<p align="center">
  ⭐️ <a href="#-getting-started">Getting started</a> • <a href="#-adding-a-new-recipe">Adding a new recipe</a> • <a href="#-testing">Testing</a> • <a href="#-storybook">Storybook</a> • <a href="#-deployment">Deployment</a> ⭐️
</p>

---

| Tool             | Status                                                                                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code coverage    | [![codecov](https://codecov.io/gh/sebastianekstrom/sebbebakes/branch/main/graph/badge.svg?token=83G7VKF6FS)](https://codecov.io/gh/sebastianekstrom/sebbebakes)                                      |
| Lint             | [![💅 Lint](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lint.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lint.yml)                         |
| Tests            | [![🧪 Tests](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/test.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/test.yml)                        |
| Lighthouse       | [![💡 Lighthouse](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lighthouse.yml)       |
| TypeScript check | [![🕵🏻 Type check](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/type-check.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/type-check.yml)       |
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

To create a new recipe, please follow the steps below.

### 1. Generate boilerplate code for the new recipe

The following script will generate everything needed to create a new recipe:

```
yarn run new-recipe
```

Follow the promps and the output will be:

```tsx
// Recipe page
src/pages/{{category}}/{{slug}}.tsx

// Tests
__tests__/pages/{{category}}/{{slug}}.test.tsx

// Required image placeholders
public/images/{{category}}/{{slug}}/thumbnails/hero.png
public/images/{{category}}/{{slug}}/thumbnails/meta.png
public/images/{{category}}/{{slug}}/thumbnails/square.png
public/images/{{category}}/{{slug}}/thumbnails/tall.png
public/images/{{category}}/{{slug}}/thumbnails/wide.png
```

As well an entry inside of `src/constants/recipes.ts`. After the script is done the new page will open automatically in the browser.

### 2. Add the images

A recipe requires multiple image dimensions, these have been added as placeholders in the previous step. The dimensions are as follows:

- `hero.png` – 1226px x 966px
- `tall.png` – 918px x 1120px
- `wide.png` – 816px x 392px
- `square.png` – 900px x 900px
- `meta.png` – 1200px x 627px

Update the placeholder images inside of `public/images/{{category}}/{{slug}}/thumbnails/` with the proper ones.

### 3. Create the PR

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

## 🎨 Storybook

Start the [Storybook](https://storybook.js.org/) server with:

```
yarn run storybook
```

Storybook will be available on [http://localhost:6006](http://localhost:6006).

## 🚢 Deployment

Deploys are done automatically as soon as a new commit hits the `main` branch.
