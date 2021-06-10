$(function () {

    $("#edit-profile input,#edit-profile edit").jqBootstrapValidation({

        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var idEspec = document.getElementById('idEspec').value;
            var telefone = document.getElementById('telefone').value;
            var celular = document.getElementById('celular').value;
            var cep = document.getElementById('cep').value;
            var rua = document.getElementById('rua').textContent;
            var numero = document.getElementById('numero').value;
            var bairro = document.getElementById('bairro').textContent;
            var complemento = document.getElementById('complemento').value;
            var cidade = document.getElementById('cidade').textContent;
            var uf = document.getElementById('uf').textContent;
            var valorVisita = document.getElementById('valorVisita').value;

            $.ajax({
                url: "https://www.cyberoficina.com.br/editProfileEspec",
                //url: "http://localhost:8080/CyberOficina/editProfileEspec",
                type: "POST",
                data: {
                    idEspec: idEspec,
                    telefone: telefone,
                    celular: celular,
                    cep: cep,
                    rua: rua,
                    numero: numero,
                    bairro: bairro,
                    cidade: cidade,
                    complemento: complemento,
                    uf: uf,
                    valorVisita: valorVisita
                },
                cache: false,
                beforeSend: function () {
                    return confirm("Confirma os dados?");
                },
                success: function () {
                    // Success message
                    $('#cep').attr('value', cep);
                    $('#numero').attr('value', numero);
                    $('#complemento').attr('value', complemento);
                    $('#telefone').attr('value', telefone);
                    $('#celular').attr('value', celular);
                    $('#valorVisita').attr('value', valorVisita);

                    $('#successEdit').html("<div style='width: 90%' class='mt-2 mb-2 alert alert-success'>");
                    $('#successEdit > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#successEdit > .alert-success')
                            .append("<strong>Dados atualizados com sucesso!</strong>");
                    $('#successEdit > .alert-success')
                            .append('</div>');
                    $('#successEdit').delay(5000).fadeOut('slow');

                    document.getElementById('submit-block').style.display = "none";


                    //clear all fields
                    $('#edit-profile').trigger("reset");
                },
                error: function () {
                    // Fail message
                    $('#successEdit').html("<div class='alert alert-danger'>");
                    $('#successEdit > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#successEdit > .alert-danger').append("<strong>Desculpe, aparentemente nossos servidores não estão respondendo. Por favor tente novamente mais tarde!");
                    $('#successEdit > .alert-danger').append('</div>');
                    //clear all fields
                    $('#successEdit').trigger("reset");
                },
            })
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#email').focus(function () {
    $('#successEdit').html('');
});
