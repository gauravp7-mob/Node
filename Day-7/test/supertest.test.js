import expect from "chai";
import supertest from "supertest";

describe("Supertest test cases", () => {
  it("should call hello api", () => {
    supertest(index)
      .get("/hello")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log("Response", res.body);
        expect(res.body).to.be.deep.equal({ message: "Hello, World!" });
      });
  });
});
