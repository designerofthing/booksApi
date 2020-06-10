const models = require("../models");
const booksSerializer = require("../serializers/booksSerializer");

const booksController = {
  async index(req, res) {
    const eachSerializer = booksSerializer.index();
    const booksIndex = await models.Book.findAll(eachSerializer);
    res.json({ books: booksIndex });
    // query the db for all books
    // decide how the json object should look
    // send the json object to whoever is asking for it
  },
};

module.exports = booksController;
