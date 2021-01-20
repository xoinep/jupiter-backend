const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swagggerFile = require('./swagger_output.json');
const checkTokenMiddleware = require('./utils/checkToken.middleware');
const checkLoggedInMiddleware = require('./utils/checkLoggedIn.middleware');

/* Routes */
const router = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swagggerFile));
app.use(checkTokenMiddleware);
app.use(router);

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  if (err.json) {
    res.send(JSON.parse(err.message));
  } else {
    res.header('Content-Type', 'text/plain');
    res.send(`${err.message}`);
  }
});

app.listen(port, () => {
  console.log("process.env.PORT " + process.env.PORT)
  console.log("process.env.PORT " + JSON.stringify(process.env))
  console.log("process.env.PORT " + JSON.stringify(process))
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect(
  'mongodb+srv://poseidon-dev-admin:Vermiw-jyhqut-0zugja@poseidon-dev.5v6k7.mongodb.net/poseidon-dev?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected Succesfully!!');
});
