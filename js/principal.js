let titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

let pesoEValido = true;
let alturaEValida = true;


if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "Peso inválido";
    pesoEValido = false;
} 

if (altura <= 0 || altura >= 3) {
    tdImc.textContent = "Altura inválido";
    alturaEValida = false;
}

if (alturaEValida && pesoEValido) {
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}