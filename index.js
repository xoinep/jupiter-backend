const express = require("express");
const parser = require("body-parser");
const app = express();
const register = require("./routes/register");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const swaggerUi = require("swagger-ui-express");
const swagggerFile = require("./swagger_output.json");

/* Routes */
const router = require("./routes.js");

app.use(router);
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swagggerFile));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect(
  "mongodb+srv://poseidon-dev-admin:Vermiw-jyhqut-0zugja@poseidon-dev.5v6k7.mongodb.net/poseidon-dev?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected Succesfully!!");
});
