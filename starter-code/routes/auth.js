const express = require("express");
const router = express.Router();
const passport = require('passport')

router.get("/auth/facebook", passport.authenticate("facebook"));
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/my-trips",
  failureRedirect: "/"
}));

module.exports = router