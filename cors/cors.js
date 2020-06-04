/**
 * cors.js - CORS middleware file
 * Handles CORS requests
 * Ca permets d'accepter l'appelle à un 2 eme nom de domaine (base de données hébergé dans un autre nom de domaine)
 * 
 */

const cors = {
    handle: (req, res, next) => {
        res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Credentials", true);
        if (req.method === 'OPTIONS') {
            res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
            res.status(200).json({});
            return;
        }
        next();
    }
};

module.exports = cors;