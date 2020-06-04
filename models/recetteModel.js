/**
 * Recette.js - Recette
 */

const mongoose = require("mongoose"); //// importé le Mongoose

/* Schema ingrédients */
const SchemaIngredients = new mongoose.Schema({
  /// déclarer la fonction constructor (model)
  nom: String, // la proprieté
  // quantite: String,
});

/* Schema commentaire */
const SchemaCommentaire = new mongoose.Schema({
  /// dclarer une partie du modele pour éviter la répitition
  auteur: String,
  commentaire: String,
});

/**Schema etapes */
const SchemaRecipes = new mongoose.Schema({
  nom: String,
});

/* Schema recette */
//
/* Schema recette */
const SchemaRecette = new mongoose.Schema({
  /// regrouper le model dans une seule fonction constructor
  titre: String,
  ingredients: [SchemaIngredients],
  recipes: [SchemaRecipes],
  commentaires: [SchemaCommentaire],
});

// const Recette = mongoose.model("Recette", {
//     titre : String,
//     ingredient1 : String,
//     ingredient2 : String,
//     ingredient3 : String,
//     ingredient4 : String,
//     ingredient5 : String,
//     recipe1 : String,
//     recipe2 : String,
//     recipe3 : String,
//     recipe4 : String,
//     recipe5 : String,

// })

/* Modèle recette */
const Recette = mongoose.model("Recette", SchemaRecette); // regrouper le tous dans seul model

module.exports = Recette; /// // exportation du model
