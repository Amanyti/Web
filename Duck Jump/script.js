const duck = document.querySelector('.duck');
const pipe = document.querySelector('.pipe');
const nada = document.querySelector('.nada');

const jump = () => {
    duck.classList.add('jump');

    setTimeout(() => {
        duck.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const duckPosition = +window.getComputedStyle(duck).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && duckPosition < 50 ){

        pipe.style.animation = 'none';
        pipe.style.left =  '${pipePosition}px';

        duck.style.animation = 'none';
        duck.style.bottom =  '${duckPosition}px';

        duck.src = './imgs/frango.png';
        duck.style.width = '180px';
        duck.style.marginLeft = '50px';

        nada.src = './imgs/fim.png';
        nada.style.width = '500px';
        nada.style.margin = '100px 100px 100px 500px';


        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);