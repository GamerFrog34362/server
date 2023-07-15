import mongoose, { Schema } from "mongoose"
import { FavoriteSchema } from "./favoriteSchema.js"

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  favorites: {
    type: [FavoriteSchema],
    required: false,
    default: [],
  },
})

export const UserModel = mongoose.model("users", UserSchema)
