var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

function Criptografar(){
  var texto = inputText.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

document.getElementById('output-text').innerHTML = '<textarea readonly id="input-text">'+ resultCripto + 
'</textarea>'+ '<button class="buttoncop" id="copiar" onclick= "copiarTexto()"> copiar </button>';

}

function Descriptografar(){
  var texto = inputText.value;

  var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  document.getElementById('output-text').innerHTML = '<textarea readonly id="input-text">'+ resultDescripto + 
  '</textarea>'+ '<button class="buttoncop" id="copiar" onclick= "copiarTexto()">copiar</button>';
  
}

function copiarTexto() {
  let textoCopiado = document.getElementById("input-text");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}
