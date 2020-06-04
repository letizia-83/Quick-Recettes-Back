const Recette = require("../models/recetteModel"); // télécgerger le modele Recette du router
// const CommentaireModel = require("../models/commentaireModel");

const newRecetteController = {
  ////*on déclare l'objet

  newRecette: (req, res, next) => {
    //// on déclare la methode avec res, req, next qui enregistre les données selon le model declarer dans model
    const recetteForm = req.body; ///// declarer requete de body les textes dans les inputs
    const newRecetteRequest = new Recette({
      /// declarer le nouvelle Recette selon model (Recette)
      titre: recetteForm.titre, /// titre propriété importé du modele
      ingredients: recetteForm.ingredients, /// Ingrédient propriété importé du modele
      recipes: recetteForm.recipes,
    });

    newRecetteRequest.save((err) => {
      ////sauvgarder le model importé depuis les inputs
      if (err) {
        /// le retour en cas d'erreur
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        res.send("Merci pour votre message"); /// le retour en cas de réussite
      }
    });
  },
  afficherRecette: (req, res, next) => {
    Recette.find({}, (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json(data);
      }
    });
  },

  //   commentairePost: (req, res, next) => {
  //     const commentaireForm = req.body;
  //     const newCommentaireRequest = new CommentaireModel({
  //       auteur: commentaireForm.auteur,
  //       commentaires: commentaireForm.commentaires,
  //     });
  //     newCommentaireRequest.save((err) => {
  //       if (err) {
  //         console.log(err);
  //         res.status(500).send("erreur commentaire");
  //       } else {
  //         res.send("Merci pour votre commentaire");
  //       }
  //     });
  //   },

  //   commentaireGet: (req, res, next) => {
  //     CommentaireModel.find({}, (err, data) => {
  //       if (err) {
  //         res.status(500).end();
  //       } else {
  //         res.json({ data });
  //       }
  //     });
  //   },
};

module.exports = newRecetteController;

////model EXp
