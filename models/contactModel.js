const mongoose = require("mongoose");

const FormulaireModel = mongoose.model("FormulaireModel", {
  nom: String,
  prenom: String,
  mail: String,
  message: String,
});

module.exports = FormulaireModel; ///mettre la proprieté message dans le tableau
