let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    let alvoEvento = event.target;
    let paidoAlvo = alvoEvento.parentNode; //tr

    paidoAlvo.classList.add("fadeOut");

    setTimeout(function() {
        paidoAlvo.remove();
    }, 500);
});