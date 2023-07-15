/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function handleLogout(req, res, next) {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) return res.status(400).json("Unable to log out")

      res.cookie("connect.sid", null, {
        expires: new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
        httpOnly: true,
      })
      return res.status(200).json("Logged out")
    })
  }
}
