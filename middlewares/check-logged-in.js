const jwt = require("jsonwebtoken")

const checkLoggedIn = async (req, res, next) => {
    const path = req.route.path
    const cookie = req.cookies.token || ""
    if(cookie !== "") {
        try {
            const token = await jwt.verify(cookie, process.env.JWT_SECRET)
            if(path === "/") {
                return res.render("home-loggedin.ejs")
            }
            return res.render("home.ejs")
        } catch (error) {
            console.log(error);
        }
    }
    next()
}

module.exports = checkLoggedIn