$(function(){
    $("header").load("./components/header.html"); 
    $("footer").load("./components/footer.html");
    $("#services").load("./pages/services.html");
    $("#units").load("./pages/units.html");
    $("#professionals").load("./pages/professionals.html");
    $("#subscription").load("./pages/subscription.html");
    $("#banner").load("./pages/banner.html");
    
    // Adiciona o ouvinte de evento ao botão "Ler Mais"
    $(document).on('click', '.btn', function(event) {
        event.preventDefault();
        
        // Verifica o texto do botão
        if (this.textContent === 'Ler Mais') {
            // Esconde o botão "Ler Mais"
            this.style.display = 'none';

            // Usando Ajax para carregar aboutMore.html
            fetch('./pages/aboutMore.html')
                .then(response => response.text())
                .then(data => {
                    var boxContainer = document.querySelector('#about .box-container');
                    boxContainer.innerHTML = data;
                })
                .catch(error => console.error('Erro:', error));
        } else if (this.textContent === 'Voltar') {
            // Carrega o conteúdo da seção #about
            $("#about").load("./pages/about.html", function() {
                // Mostra o botão "Ler Mais"
                $('.btn').style.display = 'block';
            });
        }
    });

    // Script para o menu hambúrguer
    $(document).on('click', '#menu-btn', function() {
        $('.navbar').toggleClass('active');
    });

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
});
