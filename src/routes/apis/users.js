const express = require("express");
const userController = require("../../controllers/apis/usersController")
const router = express.Router();


// // apis/users
router.get("/", userController.list)
router.get("/:id", userController.detail)

module.exports = router;
