const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const nextI18next = require("./i18n");

const port = process.env.PORT || 2486;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));
  server.get("*", (req, res) => handle(req, res));
  await server.listen(port);
  console.log(`> Client is running on localhost:${port}`); // eslint-disable-line no-console
})();
