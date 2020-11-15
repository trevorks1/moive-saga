const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Making a get route to take details and the id of from db to use on src
router.get('/details/:id', (req, res) => {
  console.log(req.body);
  pool
    .query(`SELECT * FROM "movies" WHERE "movies".id = $1`, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in getting genres', error);
      res.sendStatus(500);
    });
});

module.exports = router;
