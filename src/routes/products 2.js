const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Controller
const productsController = require('../controllers/productController');
