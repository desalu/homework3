$(document).ready(function () {

  //variables list
  var generateBtn = document.querySelector("#generate");
  var copyBtn = document.querySelector("#copyButton");
  var pwText = document.querySelector("#passwordText");
  var genModal = document.querySelector("#generateModal");
  var values = "";
  var password = "";
  var symCheck = document.getElementById('symbolCheck');
  var numberCheck = document.getElementById('nbrCheck');
  var upperCheck = document.getElementById('upperCase');
  var lowerCheck = document.getElementById('lowerCase');

  //A function that generate passwords for users
  function generatePassword() {

    if (symCheck.checked) {
      values += "@%+\/!#$^?:,'(){}[]~-_.";
    };

    if (numberCheck.checked) {
      values += "0123456789";
    };

    if (upperCheck.checked) {
      values += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };

    if (lowerCheck.checked) {
      values += "abcdefghijklmnopqrstuvwxyz";
    };

    for (var i = 0; i < document.getElementById("nbrOfChar").value; i++) {
      password += values.charAt(Math.floor(Math.random() * values.length));
      console.log(password);

    };

    return password;

  }

  //A function that verify inputs, execute calculating function, and outputs if inputs are valid
  function writePassword() {

    if (isNaN(document.getElementById("nbrOfChar").value)) {
      alert("The input you insert for password length is invalid. Please make to to enter valid numbers.");
    } else if (document.getElementById("nbrOfChar").value < 8 || document.getElementById("nbrOfChar").value > 128) {
      alert("Your number outside parameter range. Please enter a number that is within the range.");
    } else if (symCheck.checked == false && numberCheck.checked == false && upperCheck.checked == false && lowerCheck.checked == false) {
      alert("None of checkbox are checked. Please check at lease one of them or close the box");

    } else {
      var password = generatePassword();
      console.log(password);
      console.log(document.getElementById('symbolCheck').checked);
      $("#passwordText").val(password);
      copyBtn.disabled = false;
      $(genModal).modal('hide');
    }
  }

  //A listener to start the program
  copyBtn.addEventListener("click", function () {
    pwText.select();
    pwText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied.");
  });

  generateBtn.addEventListener("click", writePassword)

});