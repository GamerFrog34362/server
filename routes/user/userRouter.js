import express from "express"
import { handleFavorites } from "./listFavorites.js"
import { addFavorite } from "./addFavorite.js"
import { removeFavorite } from "./removeFavorite.js"

export const userRouter = express.Router()

userRouter.post(
  "/listfavorites",

  handleFavorites
)

userRouter.post("/addfavorite", addFavorite)

userRouter.post("/removefavorite", removeFavorite)
