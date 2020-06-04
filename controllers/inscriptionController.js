const InscriptionModel = require("../models/inscriptionModel")
const inscriptionController = {

    inscription: (req, res, next) => {
        const inscriptionForm = req.body;
        const newInscription = new InscriptionModel({
            nom: inscriptionForm.nom,
            prenom: inscriptionForm.prenom,
            email: inscriptionForm.email,
            password: inscriptionForm.password
        })
        newInscription.save((err) => {        ////sauvgarder le model importé depuis les inputs
            if (err) {                              /// le retoure en cas d'erreur 
                console.log(err);
                res.status(500).send("Erreur")
            } else {
                res.send("Merci pour votre inscription") /// le retoure en cas de réussite
            }
        });
    }

}

module.exports = inscriptionController;
