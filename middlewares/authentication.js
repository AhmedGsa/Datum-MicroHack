const jwt = require("jsonwebtoken")
const {UnauthorizedError} = require("../errors/index")

const auth = async (req, res, next) => {
    const authHeader = `Bearer ${req.cookies.token}`
    if(!authHeader || !authHeader.startsWith("Bearer")) {
        throw new UnauthorizedError("Authentication failed")
    }
    const token = authHeader.split(" ")[1]
    try {
        const payload = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userID: payload.userID}
        next()
    } catch (error) {
        throw new UnauthorizedError("Authentication failed")
    }
}

module.exports = auth