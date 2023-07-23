import { stub } from "sinon";
import { expect } from "chai";
import { bookService } from "../../service/books.js";
import { findBooksByAuthorController } from "../booksController.js";

describe("controller test cases", () => {
  const mockResponse = () => {
    const res = {};
    res.send = stub().returns(res);
    return res;
  };

  const mockRequest = (params, body) => {
    const req = {};
    req.params = { ...params };
    req.body = { ...body };
    return req;
  };
  it("find by author name", async (done) => {
    stub(bookService, "findBooksByAuthor").resolves({
      _id: "64afbc400138e0b75f560d00",
      author: "Albert Camus",
      country: "Algeria, French Empire",
      imageLink: "images/l-etranger.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      pages: 185,
      title: "The Stranger",
      year: 1942,
    });
    const res = mockResponse();
    const req = mockRequest({ authorName: "Albert Camus" });
    console.log(req.params.authorName);

    const result = await findBooksByAuthorController(req, res);
    expect(result).to.be.deep.equal({
      _id: "64afbc400138e0b75f560d00",
      author: "Albert Camus",
      country: "Algeria, French Empire",
      imageLink: "images/l-etranger.jpg",
      language: "French",
      link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      pages: 185,
      title: "The Stranger",
      year: 1942,
    });
  });
});
