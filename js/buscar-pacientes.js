let botaoAdd = document.querySelector("#buscar-pacientes");

botaoAdd.addEventListener("click", function() {
    console.log("Buscando pacientes...");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        let erroAjax = document.querySelector("#erro-ajax");
        if(this.status == 200) {
            erroAjax.classList.add("invisivel");
            let resposta = this.responseText;
            let pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            });
        }else {
            console.log(this.status);
            console.log(this.responseText);

            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();
});
