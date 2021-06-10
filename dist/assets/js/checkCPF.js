$(function () {

    $("#checkCPF input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var cpf = $("input#cpf").val();
            var idOrc = $("input#idOrc").val();
            
            $.ajax({
                url: "https://www.cyberoficina.com.br/checkCPF",
                //url: "http://localhost/CyberOficina/checkCPF",
                type: "POST",
                data: {
                    cpf: cpf,
                    idOrc: idOrc
                },
                cache: false,
                success: function (d) {

                    if (d === 'you shall pass') {
                        // Success message
                        $("#agendamento").css({display: "block"});
                        $('#myModal').modal('hide');

                    } else {
                        $("#agendamento").css({display: "none"});
                        $('#myModal').modal('show');
                        $("#cpf").css({color: "red"});

                    }

                    //clear all fields
                    $('#checkCPF').trigger("reset");
                },
                error: function () {

                    $("#agendamento").css({display: "none"});
                    $('#myModal').modal('show');
                    $("#cpf").css({color: "red"});

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
$('#cpf').focus(function () {
    $('#success').html('');
});
