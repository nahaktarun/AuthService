const { StatusCodes } = require("http-status-codes");

class AppErrors extends Error {
  constructor(
    name = "AppError",
    message = "Something went wrong",
    description = "Something went wrong",
    statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super();
    this.message = message;
    this.description = description;
    this.name = name;
    this.statusCodes = statusCodes;
  }
}

module.exports = AppErrors;
