const ValidationError = require("../utils/Validation-error");
const { User, Role } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw new ValidationError(error);
      }

      console.log("Something went wrong on repository layer");
      throw { error };
    }
  }

  async destory(userId) {
    try {
      await User.destory({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log("Somethig went wrong on repository layer");
      throw { error };
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("Somthing went wrong on repository layer");
      throw { error };
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on repository layer");
      return { error };
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.find({
        where: {
          name: "ADMIN",
        },
      });
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("Something went wrong on repository layer");
      return { error };
    }
  }
}

module.exports = UserRepository;
