import { UserModel } from "../../database/schemas/userSchema.js"

export async function addFavorite(req, res) {
  const sessionUser = req.session.user
  if (!sessionUser) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const user = await UserModel.findById(sessionUser.id)
  const { title, imdbID, poster } = req.body

  user.favorites.push({
    title,
    imdbID,
    poster,
  })
  user.save()
}
