"use strict";

const models = require('../../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert(
    //   'Authors',
    //   [
    //     {name: 'Thomas'},
    //     {name: 'Adi'}
    //   ]
    // )

    // const authors = await queryInterface.sequelize.queryInterface(
    //   'SELECT * FROM "Authors";'
    // )
    // const authorsRows = authors[0]
    const thomas = await models.Author.create({ name: 'Thomas'})
    const adi = await models.Author.create({ name: 'Adi'})
    
    await queryInterface.bulkInsert("Books", [
      {
        title: "Learn NodeJS with Thomas",
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: thomas.id
        // authorId: authorsRows[0].id
      },
      {
        title: "Learn NodeJS with Adi",
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: adi.id
        // authorId: authorsRows[1].id
      }
    ], {} );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  },
};
