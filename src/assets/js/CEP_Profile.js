function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').textContent = ("");
    document.getElementById('bairro').textContent = ("");
    document.getElementById('cidade').textContent = ("");
    document.getElementById('uf').textContent = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').textContent = (conteudo.logradouro);
        document.getElementById('bairro').textContent = (conteudo.bairro);
        document.getElementById('cidade').textContent = (conteudo.localidade);
        document.getElementById('uf').textContent = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        //alert("CEP não encontrado.");
        document.getElementById('cep').value = "";
        document.getElementById('cep').focus();
        document.getElementById('rua').textContent = "CEP não encontrado";

    }
}

function pesquisacep(valor) {
    
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');
    cep = valor.replace('-', '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').textContent = "...";
            document.getElementById('bairro').textContent = "...";
            document.getElementById('cidade').textContent = "...";
            document.getElementById('uf').textContent = "...";
            //Cria um elemento javascript.
            var script = document.createElement('script');
            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            //alert("Formato de CEP inválido.");
            document.getElementById('rua').textContent = "Formato de CEP inválido";
            document.getElementById('cep').value = "";
            document.getElementById('cep').focus();

        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}
;