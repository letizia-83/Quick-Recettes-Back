const express = require("express");
const router = express.Router();
const carouselController = require('../controllers/carouselController');

router.get('/', carouselController.carousel)

module.exports = router;