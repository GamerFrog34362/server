import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import { UserModel } from "../../database/schemas/userSchema.js"
import bcrypt from "bcrypt"

// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       const user = await UserModel.findOne({ username })
//       if (!user) return done(null, false, { message: "Incorrect username." })

//       const match = await bcrypt.compare(password, user.password)
//       if (!match) return done(null, false, { message: "Incorrect password." })

//       return done(null, user)
//     } catch (error) {
//       if (error) return done(error)
//     }
//   })
// )

// passport.serializeUser(async (user, done) => {
//   console.log("Serializing user", user)

//   done(null, user.id)
// })

// passport.deserializeUser(async (id, done) => {
//   console.log("Deserializing user", id)
//   try {
//     const user = await UserModel.findById(id)
//     if (!user) return done(null, user)
//   } catch (err) {
//     console.log(err)
//     done(err, null)
//   }
// })
