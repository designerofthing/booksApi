const app = require("../../app");
const supertest = require("supertest");
// const expect = require("chai").expect;
const { expect, factory } = require("../test_helper");
const jsonResponse = require("../jsonResponse");

let server, request, response, token;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

beforeEach(async () => {
  const author = await factory.create("Author", {
    id: 100,
    name: "James Frey",
  });
  await factory.createMany("Book", 2, [
    { id: 1, title: "Fight Club", authorId: author.id },
    { id: 2, title: "Million Little Pieces", authorId: author.id },
  ]);
});

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/v1/books", () => {
  beforeEach(async () => {
    response = await request.get("/api/v1/books");
  });

  describe("for a non authenticated user", () => {
    it("responds with status 401", () => {
      expect(response.status).to.equal(401);
    });
  });

  describe.only("for authenticated user", () => {
    beforeEach(async () => {
      await request
        .post("/api/v1/auth/login")
        .send({ email: "user@mail.com", password: "password" })
        .then((response) => {
          token = response.body.token;
        });
      response = await request.get("/api/v1/books").set("Authorisation", token);
    });
    it("responds with status 200", () => {
      expect(response.status).to.equal(200);
    });

    it("responds with a collection of books", () => {
      const expectedBody = {
        books: [
          { id: 1, title: "Fight Club", author: { name: "James Frey" } },
          {
            id: 2,
            title: "Million Little Pieces",
            author: { name: "James Frey" },
          },
        ],
      };
      expect(jsonResponse(response)).to.equal(JSON.stringify(expectedBody));
    });
  });
});
