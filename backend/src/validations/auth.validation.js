export const authValidationRules = async(fullname, password, confirmPassword, gender, profilePicture) =>{
    
const passwordError = typeof password !== "string" ? "A senha deve ser uma string" : password.length < 6 ? "Senha deve ter no mínimo 6 caracteres" : null;

const fieldError = !fullname || !password || !gender || !profilePicture ? "Olha.. você precisa preencher os campos" : null

const passworMatchError = password !== confirmPassword ? "A senhas não são iguais, tente novamente" : null;

const validationErrors = [passwordError, fieldError, passworMatchError]
.filter((error)=> error !==null)
.map((error) => error)

return validationErrors.length > 0 ? { validationErrors } : null
}