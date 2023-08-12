$(document).ready(function() {

    // Adicionando máscara ao campo de telefone
    $("#telefone").mask("(00) 00000-0000");

    // Validando o formulário
    $("#form-contato").validate({
        errorClass: "text-danger small", // torna o texto vermelho e pequeno
        errorElement: "div", // envolve o erro em um elemento div
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('is-invalid'); // adiciona a classe is-invalid para a entrada com erro
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('is-invalid'); // remove a classe is-invalid da entrada corrigida
        },
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: "O nome deve ter pelo menos 2 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            mensagem: {
                required: "Por favor, insira uma mensagem.",
                minlength: "A mensagem deve ter pelo menos 5 caracteres."
            }
        },
        submitHandler: function(form) {
            let sucessoDiv = $("<div class='alert alert-success mt-3'>").text("Mensagem enviada com sucesso!");
            $(form).append(sucessoDiv);
            form.reset();
        }
    });
});
