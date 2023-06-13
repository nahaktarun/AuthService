const express = require("express");
const { PORT } = require("../src/config/serverConfig");
const app = express();

const prepareAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}...`);
  });
};

prepareAndStartServer();
