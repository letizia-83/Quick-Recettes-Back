const Recette = require("../models/recetteModel");

const commentaireController = {
  commentairePost: (req, res, next) => {
    const commentaireForm = req.body;
    const newCommentaireRequest = new Recette({
      commentaires: commentaireForm.commentaires,
    });
    newCommentaireRequest.save((err) => {
      if (err) {
        console.log(err);
        res.status(500).send("erreur commentaire");
      } else {
        res.send("Merci pour votre commentaire");
      }
    });
  },

  commentaireGet: (req, res, next) => {
    Recette.find({ commentaires: "bonjour" }, (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json({ data });
      }
    });
  },
};

module.exports = commentaireController;
