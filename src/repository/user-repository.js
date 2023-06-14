const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
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
}

module.exports = UserRepository;
