let titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEValido = true;
    let alturaEValida = true;


    if (peso <= 0 || peso >= 1000) {
        pesoEValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    } 

    if (altura <= 0 || altura >= 3) {
        alturaEValida = false;
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEValida && pesoEValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}