// #region imports

import { config } from "dotenv"
config()
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import session from "express-session"

import { moviesRouter } from "./routes/movies/moviesRouter.js"
import { authRouter } from "./routes/authentication/authRouter.js"
import { userRouter } from "./routes/user/userRouter.js"
import MongoStore from "connect-mongo"
import "./routes/authentication/passportLocal.js"
import cookieParser from "cookie-parser"

// #endregion

// #region app middleware
const app = express()

app.use(express.static("dist"))

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.URI,
      autoRemove: "native",
      autoRemoveInterval: 1,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 5,
      secure: false,
    },
  })
)

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

// #endregion

// #region routes
app.use("/api/movies", moviesRouter)
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
// #endregion

// #region server and database
mongoose.connect(process.env.URI)

const PORT = process.env.API_PORT

app.listen(PORT, () => {
  console.log("Server is online at port " + PORT)
})

// #endregion
