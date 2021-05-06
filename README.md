# joshmcmillan.com

This is my personal website. It doesn't have much of interest on it.

It's built using [Eleventy](https://www.11ty.dev/), and leverages its functionality wherever possible.

## Development

1. Clone this repository
1. Run `npm install`
1. Run `npm start`

This should expose a dev server at `localhost:8080` – `npm start` is an alias of `npx @11ty/eleventy --serve`, and so all of the standard Eleventy development tools should be available.

## Deployment

Pushing to the `main` branch of this repository will trigger a build on [Netlify](https://netlify.com) – this is running `npm run build` (which is an alias of `npx @11ty/eleventy`) – and publishing the outputted `dist` folder.
