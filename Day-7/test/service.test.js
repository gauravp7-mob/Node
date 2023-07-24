import { additionToTwo } from "../services/service.js";
import { expect } from "chai";

describe("Calculation service test case", () => {
  describe("Scenarios for additionToTwo function", () => {
    it("Should get Successful", (done) => {
      const result = additionToTwo(2);
      expect(result).to.be.equals(4);
      done();
    });
    it("Should not get Successful", (done) => {
      const result = additionToTwo(2);
      expect(result).to.be.not.equals(5);
      done();
    });
  });
});
