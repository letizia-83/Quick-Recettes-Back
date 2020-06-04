const express = require("express");
const router = express.Router();
const formulaireController = require("../controllers/formulaireController");

/* GET New Recette page. */
router.post("/", formulaireController.contactModel);
// router.post('/', formulaireController)

module.exports = router;
