const $form = document.querySelector("form")
var $peso = document.querySelector("#peso")
var $altura = document.querySelector("#altura")
var $resultado = document.querySelector("#resultado")
function imc(){
    const peso = $peso.value
    const altura = $altura.value
    const imc2 = peso/(altura*altura);
    const resultado = imc2.toFixed(2);
    $resultado.value = resultado;
}
$form.addEventListener("submit", function (event) {
    event.preventDefault();
    imc();
  });
  