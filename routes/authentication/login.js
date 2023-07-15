import { config } from "dotenv"
import { UserModel } from "../../database/schemas/userSchema.js"
import argon2 from "argon2"
config()
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function handleLogin(req, res) {
  const { username, password } = req.body
  const user = await UserModel.findOne({ username })
  if (!user) {
    return res.status(401).json({ message: "Invalid Credentials" })
  }
  const match = await argon2.verify(user.password, password)

  if (!match) {
    return res.status(401).json({ message: "Invalid Credentials" })
  }

  req.session.user = {
    id: user.id,
    username: user.username,
  }
  req.session.save()
  res.json("done")
}
