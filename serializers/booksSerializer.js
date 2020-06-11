const { Models } = require("../tests/test_helper");

const booksSerializer = {
  index() {
    return {
      attributes: ["id", "title"],
      include: [
        {model: models.Author, 
        as: 'author',
      attributes: { exclude: [ 'id', 'createdAt', 'updatedAt' ]}
      }
      ]
    };
  },
};

module.exports = booksSerializer;
