const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

// const Book = require("../../models/book");
const Author = require("../../models/author");
const { factory, expect } = require("../test_helper");
const { before } = require("mocha");

describe("Author", () => {
  const DescribedModel = Author(sequelize, dataTypes);
  const subject = new DescribedModel();

  checkModelName(DescribedModel)("Author");
  checkPropertyExists(subject)("name");


  // describe("constraints", () => {
  //   it("rejects null value for title", async () => {
  //     try {
  //       await factory.create("Book", {
  //         title: null,
  //       });
  //       expect.fail();
  //     } catch (error) {
  //       expect(error.errors).to.containSubset([
  //         { message: "Book.title cannot be null" },
  //       ]);
  //     }
  //   });
  // });

  // describe("validation", () => {
  //   it("rejects empty string for title", async () => {
  //     try {
  //       await factory.create("Book", {
  //         title: "",
  //       });
  //       expect.fail();
  //     } catch (error) {
  //       expect(error).to.include({
  //         message: "Validation error: You need to set a title!",
  //       });
  //     }
  //   });
  // });

  // describe("associations", () => {
  //   before(() => {
  //     DescribedModel.associate({ Author });
  //   });

  //   it("defines a belongsTo association with Author", () => {
  //     expect(DescribedModel.belongsTo).to.have.been.calledWith(Author);
  //   });
  // });
});