import User from "../model/User.model.js";
import { authValidationRules } from "../validations/auth.validation.js";

export const createUser = async (req, res) => {
  try {
    const { fullname, password, confirmPassword, gender, profilePicture } =
      req.body;

    const response = async ()=>{
        console.log("Blz, estou indo cadastrar você")
        // Aqui tu criará a lógica para de fato criar um usuário no banco de dados, lembre-se de usar o service
    }
     
    const validationData = await authValidationRules(
      fullname,
      password,
      confirmPassword,
      gender,
      profilePicture
    );

    //console.log(validationData);
    validationData !== null ? res.status(402).json(validationData) : await response()

  } catch (err) {
    (callback) => {
      console.log("Error no auth controller: ", err);
      callback(new Error("Erro no auth controller"));
    };
  }
};