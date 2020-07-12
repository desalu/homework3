$(document).ready(function(){

  var generateBtn = document.querySelector("#generate");
  var copyBtn = document.querySelector("#copyButton");
  var pwText = document.querySelector("#passwordText");
  var pwLength = document.getElementById("nbrOfChar").value;
  var values = "";
  var password = "";
  
  function generatePassword() {
    
    if(document.getElementById('symbolCheck').checked) {
      values += "@%+\/!#$^?:,'(){}[]~-_.";
    }
  
    if(document.getElementById('nbrCheck').checked) {
      values += "0123456789";
    }
  
    if(document.getElementById('upperCase').checked) {
      values += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  
    if(document.getElementById('lowerCase').checked) {
      values += "abcdefghijklmnopqrstuvwxyz";
    }
  
    for (var i = 0; i < pwLength; i++) {
      password += values.charAt(Math.floor(Math.random()*values.length));
    }
 
    return password;
    
  }
  
  function writePassword() {
    
    if (isNaN(document.getElementById("nbrOfChar").value)) {
      alert("The input you insert for password length is invalid. Please make to to enter valid numbers.");
      
    }
    else {
    var password = generatePassword();
    console.log(password);
    $("#test").text(password);
    $("#passwordText").val(password);
    }
    
  }

  copyBtn.addEventListener("click", function () {  
    pwText.select();
    pwText.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Password copied.");
  });

  generateBtn.addEventListener("click", writePassword);
  
});