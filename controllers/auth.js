const User = require("../models/User")
const { BadRequest, UnauthorizedError, CustomAPIError } = require("../errors/index")
const { StatusCodes } = require("http-status-codes")

const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    const user = await User.findOne({email})
    if(!user) {
        throw new BadRequest("Couldn't find user with provided email")
    }
    const correctPassword = await user.verifyPass(password)
    if(!correctPassword) {
        throw new BadRequest("Wrong Password!")
    }
    const token = await user.createJWT()
    res.cookie("token", token, {httpOnly: true, maxAge: 1000*60*60*24*10})
    res.status(StatusCodes.OK).json({userID: user._ID})
}

const register = async (req, res, next) => {
    const { email, password, name } = req.body
    if(!email || !password || !name) {
        throw new BadRequest("Please provide email and password")
    }
    const user = await User.create({ email, password, name })
    const token = await user.createJWT()
    res.cookie("token", token, {httpOnly: true, maxAge: 1000*60*60*24*10})
    return res.status(StatusCodes.CREATED).json({userID: user._id});
}

module.exports = { login, register }