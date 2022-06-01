// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift == 0 || shift < -25 || shift > 25) return false;
    let encoded = "";
    input = input.toLowerCase();
    if(encode == false){ 
      for(let i=0;i<input.length;i++){
        const charCode = input[i];
        if(charCode.charCodeAt() < 97 || charCode.charCodeAt() >
        122) {
          encoded += charCode;
      }
      else{
        let newCharCode = charCode.charCodeAt(charCode + (+shift));
        newCharCode = newCharCode - shift;
        if(newCharCode < 97 || newCharCode >122){
          newCharCode = newCharCode - 122 + 96;
        }
        encoded += String.fromCharCode(newCharCode);
      }
    }
  }
  if(encode == true){ 
    for(let i=0;i<input.length;i++){
      const charCode = input[i];
      if(charCode.charCodeAt() < 97 || charCode.charCodeAt() >
        122) {
        encoded += charCode;
    }
    else{
      let newCharCode = charCode.charCodeAt(charCode - (+shift));
      newCharCode = newCharCode + shift;
      if(newCharCode < 97 || newCharCode >122){
        newCharCode = newCharCode - 122 + 96;
      }
    
      encoded += String.fromCharCode(newCharCode);
    }
  }
}
    console.log(encoded);
    return encoded;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
