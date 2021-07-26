const expect = require("chai").expect;
const head = require("../head");

describe("#head", () => {
  it("should return the first number from an array of numbers", () =>{
    expect(head([5, 6, 7])).to.equal(5);
  });
  it("should return the first string in an array of strings", () => {
    expect(head(["Hello", "Lighthouse", "Labs"])).to.equal("Hello");
  });
  it("should return the only element in a single element array", () => {
    expect(head(["foo"])).to.equal("foo");
  });
  it("should return undefined for an empty array", () => {
    expect(head([])).to.equal(undefined);
  });
});
