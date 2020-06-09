var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  let booksCollection = [{title: 'Fight Club'}, {title: 'Million Little Pieces'}];
  res.json({books: booksCollection});
});

module.exports = router;
