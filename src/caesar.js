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
      shift = -shift;
    //   for(let i=0;i<input.length;i++){
    //     const charCode = input[i];
    //     if(charCode.charCodeAt() < 97 || charCode.charCodeAt() >
    //     122) {
    //       encoded += charCode;
    //   }
    //   else{
    //     let newCharCode = charCode.charCodeAt(charCode + (+shift));
    //     newCharCode = newCharCode - shift;
    //     if(newCharCode < 97 || newCharCode >122){
    //       newCharCode = newCharCode - 122 + 96;
    //     }
    //     if(newCharCode == 120 || newCharCode == 121 || newCharCode == 122){
    //       newCharCode = newCharCode - 122 + 122;
    //     }
    //     encoded += String.fromCharCode(newCharCode);
    //   }
    // }
  }
  //if(encode == true){ 
  //   for(let i=0;i<input.length;i++){
  //     const charCode = input[i];
  //     if(charCode.charCodeAt() < 97 || charCode.charCodeAt() >
  //       122) {
  //       encoded += charCode;
  //   }
  //   else{
  //     let newCharCode = charCode.charCodeAt(charCode - (+shift));
  //     newCharCode = newCharCode + (shift%26);
  //     if(newCharCode < 97 || newCharCode >122){
  //       newCharCode = newCharCode - 122 + 96;
  //     }
  //     if(newCharCode == 120 || newCharCode == 121 || newCharCode == 122){
  //       newCharCode = newCharCode - 122 + 122;
  //     }
  //     encoded += String.fromCharCode(newCharCode);
  //   }
  // }
//}
for (let i = 0; i < input.length; i++) {
  const charCode = input.charCodeAt(i);

  if (
      (charCode < 65 || charCode > 122) ||
      (charCode > 90 && charCode < 97)
  ) {
      encoded += input[i];
  } else {
      let newCharCode = charCode + Math.ceil(shift % 26);

      if (charCode >= 97 && newCharCode >= 122) {
          newCharCode = newCharCode - 122 + 96;
      }
      if (charCode <= 90 && newCharCode >= 90) {
          newCharCode = newCharCode - 90 + 64;
      }
      if(newCharCode<97){
        newCharCode = newCharCode + 26;
      }
      encoded += String.fromCharCode(newCharCode);
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
