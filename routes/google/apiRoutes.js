const axios = require("axios");
const router = require("express").Router();


router.get("/", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes/", { params: req.query })
    .then(results => results.data.items)
    .then(results => res.json(results))
    .catch(err => res.status(422).json(err));    
});

module.exports = router;
