![Logo of sebbebakes!](https://i.imgur.com/tO6MyhE.png)

<p align="center">
  The repostitory for <a href="https://mountainandoaks.com">mountainandoaks.com</a> – A where I share my recipes for food, cocktails and bread.
</p>

<p align="center">
  <sub>🛠️ <a href="https://nextjs.org">Next.js</a>  – 💅 <a href="https://tailwindcss.com">Tailwind</a>  – 📦 <a href="https://vercel.com">Vercel</a></sub>
</p>

---

<p align="center">
  ⭐️ <a href="#-ci-checks">CI checks</a> • <a href="#-getting-started">Getting started</a> • <a href="#-testing">Testing</a> • <a href="#-storybook">Storybook</a> • <a href="#-deployment">Deployment</a> ⭐️
</p>

---

## 📋 CI checks

| Tool             | Status                                                                                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code coverage    | [![codecov](https://codecov.io/gh/sebastianekstrom/sebbebakes/branch/main/graph/badge.svg?token=83G7VKF6FS)](https://codecov.io/gh/sebastianekstrom/sebbebakes)                                      |
| Lint             | [![💅 Lint](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lint.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/lint.yml)                         |
| Tests            | [![🧪 Tests](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/test.yml/badge.svg)](https://github.com/sebastianekstrom/sebbebakes/actions/workflows/test.yml)                        |
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

## 🎨 Storybook

Start the [Storybook](https://storybook.js.org/) server with:

```
yarn run storybook
```

Storybook will be available on [http://localhost:6006](http://localhost:6006).

## 🚢 Deployment

Deploys are done automatically as soon as a new commit hits the `main` branch.
