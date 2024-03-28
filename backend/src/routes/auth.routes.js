import {createUser} from "../controllers/auth.controller.js"
import {Router} from "express"

const authRouter = Router()

authRouter.post("/signup", createUser)

export default authRouter