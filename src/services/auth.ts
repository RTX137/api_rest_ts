
import { Auth } from "../interface/auth.interface"
import { User } from "../interface/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({email,password, name}: User) => {
  const checkIs = await UserModel.findOne({ email })
  if(checkIs) return "ALREADY_USER"
  const passwordHash = await encrypt(password)
    const registerNewUser = await UserModel.create({email,password: passwordHash, name})
    return registerNewUser

    

}

const loginUser = async ({email,password}: Auth ) => {
  const checkIs = await UserModel.findOne({ email })
  if(!checkIs) return "NOT_FOUND_USER"

  const passwordHash = checkIs.password // encriptado que viene de la base de datos
  const isCorrect = await verified(password,passwordHash)

  if(!isCorrect) return "PASSWORD_INCORRECT"

  const token = generateToken(checkIs.email)
const data = {
  token,
  user:checkIs
}

  return data
  

}

export { loginUser, registerNewUser}