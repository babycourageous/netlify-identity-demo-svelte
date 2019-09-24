# Netlify Identity Demo in Svelte

## Introduction

**Features:**

- [Svelte v3](https://svelte.dev/)
- [svelte-routing](https://github.com/EmilTholin/svelte-routing) (A declarative Svelte routing library with SSR support)
- [Netlify Identiy Widget](https://github.com/netlify/netlify-identity-widget/)
- [Netlify](https://www.netlify.com) (hosting)

This project was bootstrapped with the starter Svelte template by running `npx degit sveltejs/template <PROJECT_NAME>` and uses Netlify Identity for authentication.

Instead of localStorage this example uses the core Netlify Identity API to determine if a user is already signed in and then stores that in a Svelte store.

**Note:** If you are developing with the Netlify Identity Widget locally you will be prompted for a deployed Netlify Identity site (more info in the [Localhost section](https://github.com/netlify/netlify-identity-widget#localhost) of the Netlify Identity Widget README). Sometimes this causes issues with email verification or confirmation and you may need to reset the site.

To clear the locally stored Netlify Identity site you previously entered, execute `localStorage.removeItem('netlifySiteURL');` in your window.

## Project setup

Install dependencies:

```
yarn
```

Localhost development:

```
yarn dev
```

Running a production build:

```
yarn build
```