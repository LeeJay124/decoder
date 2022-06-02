// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", ()=>{
    it("When encoding, your output should still be a string.", ()=>{
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.be.a("string");
    });
    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false", ()=>{
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.be.eql(expected);
    });
    it("The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.", ()=>{
    const actual= polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.be.eql(expected);
    });





});