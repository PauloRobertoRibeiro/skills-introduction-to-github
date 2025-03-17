// Função para gerenciar o slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slides");

    // Ocultar todas as imagens
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Avançar para a próxima imagem
    slideIndex++;

    // Se chegou no final, voltar para a primeira imagem
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Exibir a imagem ativa
    slides[slideIndex - 1].style.display = "block";
    
    // Chamar a função novamente após 5 segundos
    setTimeout(showSlides, 5000); 
}

// Iniciar o slideshow
showSlides();
