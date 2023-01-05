const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pulo = () => {
mario.classList.add('pulo');

    setTimeout(() => {

    mario.classList.remove('pulo');

    }, 500);

}

const loop = setInterval(() => {

    const canoPosicao = cano.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px','');

    if(canoPosicao <= 120 && canoPosicao > 0 && marioPosicao < 80){ 

        cano.style.animation = 'none';
        cano.style.left = `${canoPosicao}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosicao}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', pulo);