const FormulaireModel = require("../models/contactModel");

const formulaireController = {
  contactModel: (req, res, next) => {
    const contactForm = req.body;
    const newContactForm = new FormulaireModel({
      nom: contactForm.nom,
      prenom: contactForm.prenom,
      mail: contactForm.mail,
      message: contactForm.message,
    });
    newContactForm.save((err) => {
      ////sauvgarder le model importé depuis les inputs
      if (err) {
        /// le retoure en cas d'erreur
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        res.send("Merci pour votre message"); /// le retoure en cas de réussite
      }
    });
  },
};

module.exports = formulaireController;
