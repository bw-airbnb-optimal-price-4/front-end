const { join } = require("path");
const server = require("json-server");
const auth = require("json-server-auth");

const app = server.create();
const router = server.router(join(__dirname, "./data/db.json"));
const middlewares = server.defaults();
const port = process.env.PORT || 5000;

const rules = auth.rewriter({
  users: 600,
  listings: 600,
  "/auth/register": "/register",
  "/auth/login": "/login",
});

app.db = router.db;

app.use(rules);
app.use(middlewares);
app.use(auth);
app.use(router);

app.listen(port);
console.log(`API listening on port ${port}`);
