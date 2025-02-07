document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("newsletterModal");
    const closeBtn = document.querySelector(".close");

    // Exibe o modal após 30 segundos com animação de fade-in e zoom-in
    setTimeout(() => {
        modal.style.display = "flex"; // Exibe o modal
        setTimeout(() => {
            modal.classList.add("show"); // Ativa a animação de entrada
        }, 50);
    }, 8000);

    // Fecha o modal ao clicar no botão "X"
    closeBtn.addEventListener("click", function () {
        fecharModal();
    });

    // Fecha o modal ao clicar fora dele
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            fecharModal();
        }
    });

    // Função para fechar o modal com animação
    function fecharModal() {
        modal.classList.remove("show"); // Inicia a animação de saída
        setTimeout(() => {
            modal.style.display = "none"; // Esconde após a animação
        }, 500);
    }
});
