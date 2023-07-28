const express = require("express");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Add routes, both API and view
const pathToFile = path.resolve(__dirname, "./client/public/");
app.use(express.static(pathToFile));
app.use(routes);

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
