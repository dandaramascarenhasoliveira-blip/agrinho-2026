document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    // Validação e envio simulado do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Captura os valores digitados (pronto para enviar para uma API futuramente)
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome && email && mensagem) {
            // Esconde o formulário e exibe a mensagem de sucesso
            form.style.display = "none";
            mensagemSucesso.classList.remove("hidden");

            // Opcional: Mostra no console os dados enviados
            console.log("Formulário Enviado com sucesso!", { nome, email, mensagem });
        }
    });

    // Efeito simples de rolagem suave para links internos
    const links = document.querySelectorAll('nav a, .btn-main');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            
            // Verifica se o link é interno (começa com #)
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    }
});
