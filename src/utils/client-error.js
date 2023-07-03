const AppError = require("./error-handler");
const { StatusCodes } = require("http-status-codes");

class ClientError extends AppError {
  constructor(error) {
    let explanation = [];
    let errorName = error.name;

    // Object.keys(error.error);
    error.errors.forEach((err) => {
      explanation.push(err.message);
    });

    super(
      errorName,
      "Not able to validate the data sent in the request",
      explanation,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = ClientError;
