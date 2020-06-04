const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("./cors/cors");
const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://<rafik>:<Azert123456>@quick-recette-db-nhiph.mongodb.net/test?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// }, function (error){
//     if (error){
//         console.log(error)
//     }else {
//         console.log("Connected to the database")
//     }
// });

const indexRouter = require("./routes/index");
const searchRouter = require("./routes/search");
const newRecetteRouter = require("./routes/newRecette");
const formulaireRouter = require("./routes/formulaire");
const carouselRouter = require("./routes/carousel");
const inscriptionRouter = require("./routes/inscription");
const commentaireRouter = require("./routes/commentaire");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors.handle);

app.use("/", indexRouter); // index
app.use("/search", searchRouter); //search
app.use("/newRecette", newRecetteRouter); // newRecette
app.use("/formulaire", formulaireRouter); // formulaire de contact
app.use("/carousel", carouselRouter); // carousel
app.use("/inscription", inscriptionRouter); // inscription
app.use("/commentaire", commentaireRouter); // commentaire

module.exports = app;
