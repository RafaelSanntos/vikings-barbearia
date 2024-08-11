$(document).ready(function() {
    // Carregamento do cabeçalho e rodapé
    $("header").load("../components/header.html", function() {
        // Script para o menu hambúrguer
        $(document).on('click', '#menu-btn', function() {
            $('.navbar').toggleClass('active');
        });
    }); 
    $("footer").load("../components/footer.html");

    // Inicialização dos sliders
    let swiperReviw = new Swiper(".review-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop:true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            600:{
                slidesPerView:2,
            },
        },
    });

    let swiperHome = new Swiper(".home-slider", {
        spaceBetween: 20,
        effect: "fade",
        grabCursor: true,
        loop:true,
        autoplay: {
            delay: 4000,  
        }, 
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Manipulação de eventos para botões
    $(document).on('click', '.btn', function(event) {
        event.preventDefault();
        
        if (this.textContent === 'Ler Mais') {
            this.style.display = 'none';
            fetch('./pages/aboutMore.html')
                .then(response => response.text())
                .then(data => {
                    var boxContainer = document.querySelector('#about .box-container');
                    boxContainer.innerHTML = data;
                })
                .catch(error => console.error('Erro:', error));
        } else if (this.textContent === 'Voltar') {
            $("#about").load("./pages/about.html", function() {
                $('.btn').style.display = 'block';
            });
        }
    });
});
