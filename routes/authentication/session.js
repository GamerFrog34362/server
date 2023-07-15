export function handleSession(req, res, next) {
  //Called when page refreshes - just to show the session data doens't get stored

  if (req.session.user) {
    return res.status(200).json({
      message: "Succesfully authenticated",
    })
  }
  return res.status(401).json({
    message: "Unauthorized",
  })
}
