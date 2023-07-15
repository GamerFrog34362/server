import { UserModel } from "../../database/schemas/userSchema.js"

export async function removeFavorite(req, res) {
  const sessionUser = req.session.user
  if (!sessionUser) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const user = await UserModel.findById(sessionUser.id)
  const { imdbID } = req.body

  user.favorites.pull({ imdbID: imdbID })
  user.save()
  res.status(200).json({ message: "Success" })
}
