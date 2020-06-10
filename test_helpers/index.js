const chai = require("chai");
const expect = chai.expect;
const sinonChai = require('sinon-chai');

chai.use(sinonChai)

const models = require("../models");

beforeEach((done) => {
  models.sequelize.sync({ force: true }).then(() => {
    done();
  });
});

module.exports = { Models, expect };
