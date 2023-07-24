import sinon from "sinon";
import { expect } from "chai";

import { dbService } from "../db.js";

import { userService } from "../services/userService.js";
describe("User Service Test Cases", () => {
  describe("test cases of getAllUsers func", () => {
    beforeEach(() => {
      sinon.restore();
    });

    it("should get all the users successfully", async () => {
      const mockedData = {
        id: 1,
        name: "Gaurav",
      };
      sinon.stub(dbService, "getUsers").resolves(mockedData);
      const userResult = await userService.getAllUsers();
      expect(userResult).to.be.deep.equal(mockedData);
    });
    it("should get all users with id=1 with mock", async () => {
      const mockResult = sinon.mock(userService); //service
      mockResult.expects("getAllUsers").returns([
        {
          id: 1,
          firstName: "gaurav",
        },
      ]);
      const userResult = await userService.getAllUsers();
      console.log("userResult =", userResult);
      mockResult.verify();
      expect(userResult[0].id).to.be.deep.equal(1);
    });
  });
});
