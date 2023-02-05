//HEADER SECTION JS

const sprite = document.getElementById('sprite');
const cocacola = document.getElementById('cocacola');
const fanta = document.getElementById('fanta');
const banner = document.getElementById('banner');
const bannerAfter = window.getComputedStyle(banner,"::after");
const bannerBefore = window.getComputedStyle(banner,"::before");
const imgContainer = document.getElementById('img_container');
const imgContainerAfter = window.getComputedStyle(imgContainer, '::after');
const fantaText = document.getElementById('fanta_text_banner');
const cocacolaText = document.getElementById('cocacola_text_banner');
const cocacolaText2 = document.getElementById('cocacola_text_banner2')
const spriteText = document.getElementById('sprite_text_banner');
const xButton = document.getElementById('x_button');

const reset = () => {
    xButton.style.display = '';
    fantaText.style.display = '';
    sprite.style.display = 'block';
    cocacola.style.display = 'block';
    fanta.style.display = 'block';
    cocacola.style.height = '110%';
    cocacola.style.scale = '';
    sprite.style.scale = '';
    fanta.style.scale = '';
    sprite.style.height = '100%';
    fanta.style.height = '100%';
    sprite.style.rotate = '10deg';
    fanta.style.rotate = '-10deg';
    sprite.style.transform = 'translate(0px, 0)';
    fanta.style.transform = 'translate(0px, 0px)';
    banner.style.backgroundImage = '';
    banner.style.setProperty('--bannerBeforeOpacity', '50%');
    fantaText.style.setProperty('--fantaText', 'none')
    cocacolaText.style.setProperty('--cocacolaText', 'none');
    cocacolaText2.style.setProperty('--cocacolaText', 'none');
    spriteText.style.setProperty('--spriteText', 'none')
    banner.style.setProperty('--bannerAfterOpacity', '0%');
    imgContainer.style.setProperty('--imgContainerAfter', 'none');
    cocacolaMain.style.display = 'none';
    fantaMain.style.display = 'none';
    spriteMain.style.display = 'none';
    document.getElementById('shop_section').style.display = '';
}   


cocacola.onclick = () => {
    xButton.style.display = 'block'
    cocacola.style.height = '130%';
    cocacola.style.scale = '1.00';
    sprite.style.display = 'none';
    fanta.style.display = 'none';
    banner.style.backgroundImage = 'linear-gradient(135deg, #fe001a 100% 0%)';
    banner.style.setProperty('--bannerAfterOpacity', '100%');
    banner.style.setProperty('--bannerBeforeOpacity', '0%');
    imgContainer.style.setProperty('--imgContainerAfter', 'block');
    cocacolaText.style.setProperty('--cocacolaText', 'block');
    cocacolaText2.style.setProperty('--cocacolaText', 'block');
    cocacolaMain.style.display = 'flex';
    document.getElementById('shop_section').style.display = 'flex';
    document.getElementById('shop_section').style.backgroundImage = 'linear-gradient(135deg, #fe001a 100% 0%)';
}

sprite.onclick= () => {
    xButton.style.display = 'block'
    sprite.style.height = '130%';
    sprite.style.rotate = '0deg';
    sprite.style.scale = '1.00';
    sprite.style.transform = 'translate(50px, 0px)';
    cocacola.style.display = 'none';
    fanta.style.display = 'none';
    spriteText.style.setProperty('--spriteText', 'block')
    banner.style.setProperty('--bannerBeforeOpacity', '0%');
    banner.style.backgroundImage = 'linear-gradient(135deg, #008B47 100% 0%)';
    banner.style.setProperty('--bannerAfterOpacity', '100%');
    imgContainer.style.setProperty('--imgContainerAfter', 'block');
    spriteMain.style.display = 'flex';
    document.getElementById('shop_section').style.display = 'flex';
    document.getElementById('shop_section').style.backgroundImage = 'linear-gradient(135deg, #008B47 100% 0%)';
}

fanta.onclick= () => {
    xButton.style.display = 'block'
    fanta.style.height = '130%';
    fanta.style.rotate = '0deg';
    fanta.style.scale = '1.00';
    fanta.style.transform = 'translate(-50px, 0px)';
    cocacola.style.display = 'none';
    sprite.style.display = 'none';
    banner.style.backgroundImage = 'linear-gradient(135deg, #ff8300 100% 0%)';
    banner.style.setProperty('--bannerAfterOpacity', '100%');
    imgContainer.style.setProperty('--imgContainerAfter', 'block');
    fantaText.style.setProperty('--fantaText', 'block')
    banner.style.setProperty('--bannerBeforeOpacity', '0%');
    fantaMain.style.display = 'flex';
    document.getElementById('shop_section').style.backgroundImage = 'linear-gradient(135deg, #ff8300 100% 0%)';
    document.getElementById('shop_section').style.display = 'flex';
}

cocacola.ondblclick = () => reset(); 
sprite.ondblclick = () => reset();
fanta.ondblclick = () => reset();
xButton.onclick = () => reset();

//MAIN SECTION JS

const fantaMain = document.getElementById('fanta_main');
const cocacolaMain = document.getElementById('cocacola_main');
const spriteMain = document.getElementById('sprite_main');


