import { UserModel } from "../../database/schemas/userSchema.js"

export async function handleFavorites(req, res) {
  const sessionUser = req.session.user
  if (!sessionUser) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const user = await UserModel.findById(sessionUser.id)
  res.status(200).json(user.favorites)
}
