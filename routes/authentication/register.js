import { UserModel } from "../../database/schemas/userSchema.js"
import argon2 from "argon2"

export async function handleRegister(req, res) {
  const { email, username, password } = req.body

  if (!(email && username && password)) {
    res.status(400).json({
      outcome: "Error",
      timeStamp: new Date(),
      error: "Not all fields specified",
    })
  }

  const isMatchingUsername = (await UserModel.where("username").equals(username)).length >= 1
  const isMatchingEmail = (await UserModel.where("email").equals(email)).length >= 1

  if (isMatchingUsername) {
    res.status(400).json({
      outcome: "Error",
      timeStamp: new Date(),
      reason: "Username is taken!",
    })
    return
  }

  if (isMatchingEmail) {
    res.status(400).json({
      outcome: "Error",
      timeStamp: new Date(),
      reason: "Email is already in use by another user!",
    })
    return
  }

  const user = new UserModel({
    email,
    username,
    password: await argon2.hash(password),
  })

  user.save()

  res.status(201).json({
    outcome: "Success",
    timeStamp: new Date(),
  })
}
