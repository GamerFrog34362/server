import express from "express"
import { handleMovies } from "./movies.js"

export const moviesRouter = express.Router()

moviesRouter.get("/", handleMovies)
