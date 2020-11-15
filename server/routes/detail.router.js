const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/details/:id', (req, res) => {
  console.log(req.body);
  pool
    .query(
      `SELECT * FROM "movies" 
    JOIN "movie_genres" ON "movies".id = "movie_genres".movie_id
    JOIN "genres" ON "movie_genres".genre_id = "genres".id WHERE "movies".id = $1`,
      [req.params.id]
    )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in getting genres', error);
      res.sendStatus(500);
    });
});

module.exports = router;
