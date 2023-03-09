const {Schema, default: mongoose} = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please provide valid email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8
    },
    name: {
        type: String,
        required: [true, "Please provide a name"]
    }
})

UserSchema.pre("save", async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = async function() {
    const token = await jwt.sign({userID: this._id, email: this.email}, process.env.JWT_SECRET,{expiresIn: "10d"})
    return token;
}

UserSchema.methods.verifyPass = async function(enteredPassword) {
    const isMatch = await bcrypt.compare(enteredPassword, this.password)
    return isMatch;
}

module.exports = mongoose.model("User",UserSchema);