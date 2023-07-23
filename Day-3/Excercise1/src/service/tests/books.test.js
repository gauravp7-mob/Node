import { expect } from "chai";
import supertest from "supertest";
import app from "../../../app.js";

describe("book api test cases", () => {
  describe("get book by author test case ", () => {
    it("should get all the books by given author", () => {
      supertest(app)
        .get("/books/author/Jane%20Austen")
        .expect(200)
        .end((err, res) => {
          console.log("sdfghjkl" + res.body);
          if (err) {
            throw err;
          } else {
            expect(res.body).to.be.deep.equal([
              {
                _id: "64afbc400138e0b75f560cfa",
                author: "Jane Austen",
                country: "United Kingdom",
                imageLink: "images/pride-and-prejudice.jpg",
                language: "English",
                link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
                pages: 226,
                title: "Pride and Prejudice",
                year: 1813,
              },
            ]);
          }
        });
    });
  });
  describe("delete books by author ", () => {
    it("should delete author by author ", () => {
      supertest(app)
        .delete("/books/author/Anton Chekhov")
        .expect(200)
        .end((err, res) => {
          console.log(res.text);
          if (err) {
            throw err;
          } else {
            expect(res.text).to.be.equal("1 records deleted");
          }
        });
    });
  });

  describe("delete book by id ", () => {
    it("should delete by id", () => {
      supertest(app)
        .delete("/books/id/64afbc400138e0b75f560cfe")
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err;
          } else {
            expect(res.text).to.be.equal("record deleted");
          }
        });
    });
  });

  describe("get all books", () => {
    it("should get all books", () => {
      supertest(app)
        .get("/books")
        .expect(200)
        .end((err, res) => {
          if (err) {
            throw err;
          } else {
            expect(res.body).to.be.equal(85);
          }
        });
    });
  });
});
