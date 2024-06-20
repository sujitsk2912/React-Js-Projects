const express = require("express");
const {
  home,
  signin,
  signup,
  forgotpassword,
  Getsignin,
} = require("../controllers/auth-controller");

const router = express.Router();

router.route("/").get(home);

router.route("/signin").post(signin);
// router.route("/signin").get(Getsignin);

router.route("/signup").get(signup);
router.route("/signup").post(signup);

router.route("/forgotpassword").get(forgotpassword);

module.exports = router;
