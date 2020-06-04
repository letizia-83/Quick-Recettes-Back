const express = require("express");
const router = express.Router();
const newRecetteController = require("../controllers/newRecetteController");

/* GET New Recette page. */
router.post("/", newRecetteController.newRecette);
router.get("/", newRecetteController.afficherRecette);

// router.post("/", newRecetteController.commentairePost);
// router.get("/", newRecetteController.commentaireGet);

module.exports = router;
