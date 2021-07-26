const expect = require("chai").expect;
const tail = require("../tail");

describe("#tail", () => {
  it("should return the last string in an array of strings", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    expect(tail(words)).to.deep.equal(words.slice(1));
  });
  it("should not modify the original array", () =>{
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsCopy = words.map(e => e);
    tail(words);
    expect(words).to.deep.equal(wordsCopy);
    expect(words.length).to.equal(3);
  });
  it("should return an empty array when given a single element array", () => {
    const singleElem = ["single"];
    expect(tail(singleElem)).to.deep.equal([]);
  });
  it("should return an empty array when given an empty array", () => {
    expect(tail([])).to.deep.equal([]);
  });
});
