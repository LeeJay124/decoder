// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", ()=>{
    it("Spaces should be maintained throughout.", ()=>{
        const actual = substitution("yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false);
        const expected = "my message";
        expect(actual).to.be.equal(expected);
    });
    it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", ()=>{
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.be.eql(expected);
    });
    it("All the characters in the alphabet parameter must be unique. Otherwise, it should return false.", ()=>{
    const actual= substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.be.eql(expected);
    });





});