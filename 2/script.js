const txtNome = document.getElementById("txt-nome");
const msgErro = document.getElementById("msg-erro");
const btnValidar = document.getElementById("btn-validar");
const containerNomes = document.getElementById("container-nomes");

let nomes = [];

txtNome.addEventListener("input", function() {
    verificarNome();
});

function verificarNome() {
    const nome = txtNome.value.trim();

    msgErro.textContent = "";

    if (nome.length < 3) {
        msgErro.textContent = "Use no mínimo 3 caracteres!";
        msgErro.style.color = "red";
        txtNome.style.borderColor = "red";

    } else if (nomes.indexOf(nome) !== -1) {
        msgErro.textContent = "Nome já validado!";
        msgErro.style.color = "red";
        txtNome.style.borderColor = "red";
        
    } else if (nome != "") {
        msgErro.textContent = "Nome válido para uso!";
        msgErro.style.color = "green";
        txtNome.style.borderColor = "green";

        return true;
    }

    return false;
}

function validarNome() {
    if (!verificarNome()) {
        return;
    }

    nomes.push(txtNome.value.trim());

    containerNomes.innerHTML = "";
    for (let i = 0; i < nomes.length; i++) {
        const nome = nomes[i];
        const p = document.createElement("p");
        p.textContent = nome;
        containerNomes.appendChild(p);
    }

}