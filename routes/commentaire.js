const express = require("express");
const router = express.Router();
const commentaireController = require("../controllers/commentaireController");

router.post("/", commentaireController.commentairePost);
router.get("/", commentaireController.commentaireGet);

module.exports = router;
