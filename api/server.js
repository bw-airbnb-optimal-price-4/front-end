const { join } = require("path");
const server = require("json-server");
const auth = require("json-server-auth");

const app = server.create();
const router = server.router(join(__dirname, "./data/db.json"));
const port = process.env.PORT || 5000;

app.use(auth);
app.use(router);

app.listen(port);
console.log(`API listening on port ${port}`);
