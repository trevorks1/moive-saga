const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// a get request to get Genres from db to homepage
router.get('/', (req, res) => {
  console.log(req.body);
  pool
    .query(`SELECT * FROM "genres";`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in getting genres', error);
      res.sendStatus(500);
    });
});

// another GET to get details and id from db with joins to get movies details and genres
router.get('/details/:id', (req, res) => {
  console.log(req.body);
  pool
    .query(
      `SELECT "genres".* FROM "movies" 
    JOIN "movie_genre" ON "movies".id = "movie_genre".movies_id
    JOIN "genres" ON "movie_genre".genres_id = "genres".id WHERE "movies".id = $1`,
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
