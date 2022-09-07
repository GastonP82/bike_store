const express = require("express");
const categoryController = require("../../controllers/apis/categoryController")
const router = express.Router();


// // apis/category
router.get("/", categoryController.list)


module.exports = router;
