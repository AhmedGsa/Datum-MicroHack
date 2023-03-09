const jwt = require("jsonwebtoken")

const notLoggedInTest = async (req, res, next) => {
    const authHeader = `Bearer ${req.cookies.token}`
    const token = req.cookies.token
    if(!token) {
        return res.redirect("/login")
    }
    try {
        const payload = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userID: payload.userID}
        next()
    } catch (error) {
        res.redirect("/login")
    }
}

module.exports = notLoggedInTest