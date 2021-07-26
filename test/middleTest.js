const expect = require("chai").expect;
const middle = require("../middle");

describe("#middle", () => {
  it("should return an empty array when given a single element array", () => {
    expect(middle([1])).to.deep.equal([]);
  });
  it("should return an empty array when given a 2 element array", () => {
    expect(middle([1, 2])).to.deep.equal([]);
  });
  it("should return an array containing the middle element of an odd length array", () => {
    expect(middle([1, 2, 3])).to.deep.equal([2]);
  });
  it("should return an array containing the middle two elements of an even length array", () => {
    expect(middle([1, 2, 3, 4])).to.deep.equal([2, 3]);
  });
});
