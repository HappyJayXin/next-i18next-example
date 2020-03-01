This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install package.

```bash
yarn
# or
npm install
```

Second, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:2486](http://localhost:2486) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Use next-i18next
1. Add `i18n.js` at root.
2. Setting **nextI18NextMiddleware** at [server.js](./server.js).
3. Add json file at `public/static/locales/`.
4. Add `_app.js` under pages folder and setting i18n, you can see [_app.js](./pages/_app.js);
5. Start use next-i18next.

