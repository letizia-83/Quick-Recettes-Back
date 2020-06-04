const Recette = require("../models/recetteModel")
const carouselController = {

    carousel: (req, res, next) => {
        Recette.find({}, (err, data) => {
            if (err) {
                res.status(500).end();
            } else {
                res.json({ carouselController: data });
            }
        })
    }
}

/* test branch git invisible */
module.exports = carouselController;
