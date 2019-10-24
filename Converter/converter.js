function binToHex() {
  var number = document.getElementById('bin').value;
  var hexa = parseInt(number, 2).toString(16).toUpperCase();
  document.getElementById('hexa').value = hexa
}
function hexToBin() {
  var number = document.getElementById('hexa').value;
  var bin = parseInt(number, 16).toString(2).toUpperCase();
  document.getElementById('bin').value = bin
}
function hexToASCII() {
  var ascii = document.getElementById('hexa').value.toString();
  for (var i = 0; i < hexa.length; i += 2)
        str += String.fromCharCode(parseInt(hexa.substr(i, 2), 16));
  document.getElementById('ascii').value = ascii
}
function asciiToHex() {
  var number = [];
  var str = document.getElementById('ascii').value;
  for (var i = 0, l = str.length; i < l; i ++) {
    var hexa = Number(str.charCodeAt(i)).toString(16);
    number.push(hexa);
  document.getElementById('hexa').value = number
  }
}
