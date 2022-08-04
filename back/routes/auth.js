const router = require("express").Router();
const {signOut} = require("../controllers/auth")

router.get("/signout", signOut);


module.exports = router;