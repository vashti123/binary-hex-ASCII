var decimal = document.getElementById('dec').value
var binary = document.getElementById('bin').value
var hex = document.getElementById('hex').value
var ascii = document.getElementById('ascii').value

function convert() {

  function convertDec() {
    console.log(decimal);
  }

  function convertBin() {
    console.log(binary.toString(2));
  }

  function convertHex() {
    console.log(hex.toString(16));
  }

  function convertAscii() {
  console.log(hex.toString(16));
  }
}
