const exemploTochaImg = document.querySelector('.exemplo_tocha__img');
const exemploTochaButtonAcender = document.querySelector('.btnAcender');
const exemploTochaButtonApagar = document.querySelector('.btnApagar');

exemploTochaButtonAcender.addEventListener('click', () => {
    exemploTochaImg.src = 'tocha_acesa.gif';
    exemploTochaButtonAcender.disabled = true;
    exemploTochaButtonApagar.disabled = false;
});

exemploTochaButtonApagar.addEventListener('click', () => {
    exemploTochaImg.src = 'tocha_apagada.png';
    exemploTochaButtonAcender.disabled = false;
    exemploTochaButtonApagar.disabled = true;
});

const cabecalho = document.querySelector('.cabecalho');
const containerHeader = cabecalho.querySelector('.cabecalho__container_header');
const containerIcons = cabecalho.querySelector('.cabecalho__icons');

const main = document.querySelector('.main');

cabecalho.addEventListener('mouseenter', () => {
    cabecalho.classList.remove("close");
    cabecalho.classList.add("open");
    containerHeader.style.display = 'block';
    containerIcons.style.opacity = 0;
    
    // main.style.padding = '20px 20px 20px 500px'

    setTimeout(() => {
        containerIcons.style.display = 'none';
    }, 300);
    setTimeout(() => {
        containerHeader.style.opacity = 1;
    },100);
});

cabecalho.addEventListener('mouseleave', () => {
    cabecalho.classList.remove('open');
    cabecalho.classList.add('close');
    containerIcons.style.display = 'flex';
    containerHeader.style.display = 'none';
    
    // main.style.padding = '20px 20px 20px 130px'
    
    setTimeout(() => {
        containerHeader.style.opacity = 0;
        containerIcons.style.opacity = 1;
    },100);
});

const itemsOption = document.querySelectorAll('.items__subitem');
itemsOption.forEach(option => {
    option.addEventListener('click', () => {
        window.location.hash = option.classList[1];
        // document.querySelector('.main').scrollIntoView({
        //     behavior: 'smooth'
        // });
    });
});