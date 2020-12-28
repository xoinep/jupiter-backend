const express = require("express");
const parser = require("body-parser");
const app = express();
const register = require("./routes/register");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const expressSwagger = require("express-swagger-generator")(app);
let options = {
  swaggerDefinition: {
    info: {
      description: "This is a sample server",
      title: "Swagger",
      version: "1.0.0",
    },
    host: "localhost:3000",
    basePath: "/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ["./routes/register.js"], //Path to the API handle folder
};
expressSwagger(options);

mongoose.connect(
  "mongodb+srv://poseidon-dev-admin:Vermiw-jyhqut-0zugja@poseidon-dev.5v6k7.mongodb.net/poseidon-dev?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected Succesfully!!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use("/auth", register);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
