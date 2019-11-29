var express = require("express"),
  app = express(),
  cors = require("cors"),
  server = require("http").createServer(app);

app.set("port", process.env.PORT || 3000);

app.use(cors());

require("./route/route")(express, app);

server.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
