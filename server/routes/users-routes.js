const express = require("express");
const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

const fileUpload = require("../middleware/file-upload");
const { check } = require("express-validator");

router.get("/", usersControllers.getUsers);
router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.signup
);
router.post("/login", usersControllers.login);

module.exports = router;
