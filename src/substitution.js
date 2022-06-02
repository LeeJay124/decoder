// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) return false;
    if(alphabet.length!==26 || new Set(alphabet).size !== alphabet.length) return false;
    let result = "";
    const originalAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const codedAlphabet = {};
    const decodedAlphabet = {};
if (encode == true){
  for(let i=0;i<originalAlphabet.length;i++){
    codedAlphabet[originalAlphabet[i]]=alphabet[i];
  }
  for(let i=0;i<input.length;i++){
    const char = input[i];
    if(char.charCodeAt()!==32){ 
      result+=codedAlphabet[char];
      }
      else{
        result = result + char;
      }
  }
}  
if (encode == false){
  for(let i=0;i<originalAlphabet.length;i++){
    decodedAlphabet[alphabet[i]]=originalAlphabet[i];
  }
  for(let i=0;i<input.length;i++){
    const char = input[i];
    if(char.charCodeAt()!==32){ 
    result+=decodedAlphabet[char];
    }
    else{
      result = result + char;
    }
  }
}  
console.log(result);
return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
