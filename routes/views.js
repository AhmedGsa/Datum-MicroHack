const express = require("express");
const {login, register, home, success, logout, marketplace, requestedData, dataRequest, dataPost} = require("../controllers/views")
const authMiddleware = require("../middlewares/authentication")
const checkLoggedIn = require("../middlewares/check-logged-in")
const notLoggedInTest = require("../middlewares/not-logged-in")
const router = express.Router();
const path = require("path")

router.get("/", checkLoggedIn, home);
router.get("/login",checkLoggedIn, login)
router.get("/register",checkLoggedIn, register)
router.get("/marketplace", notLoggedInTest, marketplace)
router.get("/requested-data", notLoggedInTest, requestedData)
router.get("/logout", logout)
router.get("/create-data-request", notLoggedInTest, dataRequest)
router.get("/publish-data", notLoggedInTest, dataPost)
router.get("/images/:id", (req, res) => {
    res.sendFile(path.join(__dirname, `../uploads/${req.params.id}`), err => {
        if(err) {
            console.log(err);
        }
    })
})

module.exports = router;