// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //if alphabet not present return false
    if(!alphabet) return false;
    //if alphabet not 26 in length or not unique characters return false
    if(alphabet.length!==26 || new Set(alphabet).size !== alphabet.length) return false;
    let result = "";
    //establish the actual alphabet to set the subsitution
    const originalAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const codedAlphabet = {};
    const decodedAlphabet = {};
if (encode == true){
  //loop through the alphabet and set the substitution cipher
  for(let i=0;i<originalAlphabet.length;i++){
    codedAlphabet[originalAlphabet[i]]=alphabet[i];
  }
  for(let i=0;i<input.length;i++){
    const char = input[i];
    //set the character if it's not a space
    if(char.charCodeAt()!==32){ 
      result+=codedAlphabet[char];
      }
      else{
        //add the space if it is a space
        result = result + char;
      }
  }
}  
if (encode == false){
  //loop through the alphabet and set the substitution cipher
  for(let i=0;i<originalAlphabet.length;i++){
    decodedAlphabet[alphabet[i]]=originalAlphabet[i];
  }
  for(let i=0;i<input.length;i++){
    const char = input[i];
    //set the character if it's not a space
    if(char.charCodeAt()!==32){ 
    result+=decodedAlphabet[char];
    }
    else{
      //add the space if it is a space
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
