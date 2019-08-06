const express = require("express");
const router = express.Router();
const connection = require("../conf");


router.get("/", (req, res) => {
    connection.query('SELECT * FROM commande', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des commandes');
      } else {
        res.json(results);
      };
    });
  });



router.put('/order/:id', (req, res) => {

    // récupération des données envoyées
    const idOrder = req.params.id;
    const formData = req.body;
  
    // connection à la base de données, et insertion de l'employé
    connection.query('UPDATE commande SET ? WHERE id = ?', [formData, idOrder], err => {
  
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'une commande");
      } else {
  
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.sendStatus(200);
      }
    });
  });

router.post('/order', (req, res) => {

    const formData = req.body;
  
    // connection à la base de données, et sélection des movies
    connection.query('INSERT INTO commande SET ?', formData, (err, results) => {
  
      if (err) {
  
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des commandes');
  
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        
        res.sendStatus(200);
      }
    });
  });
// écoute de l'url "/order"
router.delete('/oder/:id', (req, res) => {

    // récupération des données envoyées
    const idOrder = req.params.id;
  
    // connexion à la base de données, et suppression d'un film
    connection.query('DELETE FROM commande WHERE id = ?', [idOrder], err => {
  
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'un commande");
      } else {
  
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.sendStatus(200);
      }
    });
  });
module.exports = router;