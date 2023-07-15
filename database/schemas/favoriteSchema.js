import { Schema } from "mongoose"

export const FavoriteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
})
