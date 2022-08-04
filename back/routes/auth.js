const router = require("express").Router();
const {signOut} = require("../controllers/auth")
const {signUp} = require("../controllers/auth")


router.post("/signup", signUp)
router.get("/signout", signOut);


module.exports = router;