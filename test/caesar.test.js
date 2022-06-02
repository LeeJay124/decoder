// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", ()=>{
    it("If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.", ()=>{
        const actual = caesar("thinkful", 99);
        const expected = false;
        expect(actual).to.be.eql(expected);
    });
    it("Spaces should be maintained throughout, as should other nonalphabetic symbols.", ()=>{
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.be.eql(expected);
    });
    it("decodes a message", ()=>{
    const actual= caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.be.eql(expected);
    });





});