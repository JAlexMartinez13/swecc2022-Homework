let word1 = "aaHeEaLLaaaO"
let word2 = "BxxOxxCxxAx xCxxOxxxDxxE"


function onlyCapitalLetters (str) { 
    let newStr = "";
  
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/)) {
            newStr += str[i];
        }
     }
     return newStr;
  }
  
  
  console.log(onlyCapitalLetters(word1))   
  console.log(onlyCapitalLetters(word2))  