const mongoose = require("mongoose");

const InscriptionModel = mongoose.model("InscriptionModel", {
    nom: String,
    prenom: String,
    email: String,
    password: String
})

module.exports = InscriptionModel;