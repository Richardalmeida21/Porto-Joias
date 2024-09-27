var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    const categoriasLink = document.getElementById('categorias-link');
    const dropdownContent = document.getElementById('dropdown-content');

    categoriasLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle('show');
    });

    // Fechar o dropdown se o usuário clicar fora dele
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#categorias-link')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

  document.addEventListener('DOMContentLoaded', function() {
    // Carregar o arquivo aliancas.json e gerar os slides dinamicamente para o novo carrossel
    fetch('aliancas.json')
        .then(response => response.json())
        .then(data => {
            const swiperWrapperNew = document.getElementById('swiper-wrapper-new');
            data.forEach(item => {
                const slide = `
                    <div class="swiper-slide">
                        <img src="images/Alianças/${item.imagem}" alt="${item.imagem}">
                    </div>
                `;
                swiperWrapperNew.innerHTML += slide;
            });

            // Inicializar Swiper para o novo carrossel
            const swiperNew = new Swiper('.mySwiperNew', {
              slidesPerView: 4,
              spaceBetween: 30,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              },
              // Desativar rolagem lateral
              allowTouchMove: false,
              breakpoints: {
                1440: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                  },
                  1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                  },
                  768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                  },
                  450: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                  },
              },
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    // Carregar o arquivo aliancas.json e gerar os slides dinamicamente para o carrossel de alianças
    fetch('aliancas.json')
        .then(response => response.json())
        .then(data => {
            const swiperWrapperAliancas = document.getElementById('swiper-wrapper-new');
            data.forEach(item => {
                const slide = `
                    <div class="swiper-slide">
                        <img src="images/Alianças/${item.imagem}" alt="${item.descricao}">
                    </div>
                `;
                swiperWrapperAliancas.innerHTML += slide;
            });

            // Inicializar Swiper para o carrossel de alianças
            const swiperAliancas = new Swiper('.mySwiperNew', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    450: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

    // Carregar o arquivo brincos.json e gerar os slides dinamicamente para o carrossel de brincos
    fetch('brincos.json')
        .then(response => response.json())
        .then(data => {
            const swiperWrapperBrincos = document.getElementById('swiper-wrapper-brincos');
            data.forEach(item => {
                const slide = `
                    <div class="swiper-slide">
                        <img src="images/Brincos/${item.imagem}"">
                    </div>
                `;
                swiperWrapperBrincos.innerHTML += slide;
            });

            // Inicializar Swiper para o carrossel de brincos
            const swiperBrincos = new Swiper('.mySwiperBrincos', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    450: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

         // Menu hambúrguer para dispositivos móveis
 const menuBtn = document.getElementById('menu-btn');
 const navLinks = document.getElementById('nav-links');

 menuBtn.addEventListener('click', () => {
     navLinks.classList.toggle('show');
 });
});

