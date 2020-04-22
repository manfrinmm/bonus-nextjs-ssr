require("dotenv/config");

const { createServer } = require("http");
const next = require("next");

const routes = require("./routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV !== "production");

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, () => {
    console.log("Server started on http://localhost:3000");
  });
});
