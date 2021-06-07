$(function () {

    $("#forgot-form input,#forgot-form email").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var email = $("input#email").val();
            
            $.ajax({
                url: "https://www.cyberoficina.com.br/forgotPassword",
                //url: "http://localhost:8080/CyberOficina/forgotPassword",
                type: "POST",
                data: {
                    email: email
                },
                cache: false,
                success: function () {
                    // Success message
                    $('#successReset').html("<div style='position: absolute; width: 90%' class='mt-2 alert alert-success'>");
                    $('#successReset > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#successReset > .alert-success')
                            .append("<strong>Obrigado! Em breve você um email para redefinir sua senha. </strong>");
                    $('#successReset > .alert-success')
                            .append('</div>');
                    $('#successReset').delay(5000).fadeOut('slow');


                    //clear all fields
                    $('#forgot-form').trigger("reset");
                },
                error: function () {
                    // Fail message
                    $('#successReset').html("<div class='alert alert-danger'>");
                    $('#successReset > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#successReset > .alert-danger').append("<strong>Desculpe " + email + ", aparentemente nossos servidores não estão respondendo. Por favor tente novamente mais tarde!");
                    $('#successReset > .alert-danger').append('</div>');
                    //clear all fields
                    $('#successReset').trigger("reset");
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
    $('#successReset').html('');
});
