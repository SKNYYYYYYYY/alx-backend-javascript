import { expect } from 'chai';
import getFullResponseFromAPI from './1-promise.js';

describe("getFullResponseFromAPI", () => {
  it("resolves correctly", async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response).to.deep.equal({
      status: 200,
      body: "Success"
    });
  });
});
