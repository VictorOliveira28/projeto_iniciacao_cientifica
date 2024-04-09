function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");    
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);    
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('cidade').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('rua').value="...";
        document.getElementById('uf').value="...";       

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};

/* CONFIRMAÇÃO DE DELEÇÃO DE USUÁRIO */

function confirmarDeletar() {
    // Exibe a caixa de diálogo de confirmação
    var confirmacao = confirm("Tem certeza que deseja deletar?");
        
    return confirmacao;
}

//Deletar classe de erro CSS
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    if (emailInput) {
        emailInput.addEventListener("focus", function() {
            emailInput.classList.remove("error");
        });
    }
});

//Deletar classe de error_email CSS quando clicado
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    if (emailInput) {
        emailInput.addEventListener("focus", function() {
            emailInput.classList.remove("error_email");
        });
    }
});

// Gerar aviso quando email ja existe
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    if (emailInput) {
        if (emailInput.classList.contains("error")) {
            // Se o input de email tem a classe "error", exibe o aviso
            alert("O email inserido é inválido. Por favor, insira um email válido.");
        }
    }
});

//Editar usuario email cadastrado
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    if (emailInput) {
        if(emailInput.classList.contains("error")) {
            alert("Falha ao editar usuário, email já cadastrado!")
    }
}
})

//Deletar classe de error_email CSS quando clicado
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    if (emailInput) {
        emailInput.addEventListener("focus", function() {
            emailInput.classList.remove("error_email");
        });
    }
});

// Gerar aviso quando email ja existe
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    if (emailInput) {
        if (emailInput.classList.contains("error_email")) {
            // Se o input de email tem a classe "error", exibe o aviso
            alert("O email já está em uso, favor escolher outro endereço.");
        }
    }
});

