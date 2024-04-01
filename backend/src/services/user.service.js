import User from "../model/User.model.js";

const userService = {
  createUser: async (userDetails) => {
    try {
      const user = new User(userDetails);

      const savedUser = await user.save();

      return savedUser;
    } catch (error) {
      console.log("Erro ao criar o usuário: ", error);
      throw new Error("Erro ao criar o usuário");
    }
  },
};

export default userService;
