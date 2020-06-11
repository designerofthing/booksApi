// const { Models } = require("../tests/test_helper");
const models = require("../models");

const booksSerializer = {
  index() {
    return {
      include: [
        {
          model: models.Author,
          as: "author",
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
        },
      ],
      attributes: ["id", "title"],
    };
  },
};

module.exports = booksSerializer;
