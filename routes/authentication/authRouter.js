import express from "express"
import { handleLogin } from "./login.js"
import { handleRegister } from "./register.js"
import passport from "passport"
import { handleSession } from "./session.js"
import { handleLogout } from "./logout.js"

export const authRouter = express.Router()

authRouter.post("/login", handleLogin)

authRouter.post("/register", handleRegister)

authRouter.post("/session", handleSession)

authRouter.post("/logout", handleLogout)
