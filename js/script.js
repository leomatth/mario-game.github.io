const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');
const clouds = document.querySelector('.clouds')
const clouds1 = document.querySelector('.clouds1')

const jump = () => {
    mario.classList.add('jump');
   
    setTimeout(() =>{
   
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = window.getComputedStyle(document.querySelector('.clouds')).right;
    const clouds1Position = window.getComputedStyle(document.querySelector('.clouds1')).right;

    if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 50) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        clouds.style.animation = 'none';
        clouds.style.right = cloudsPosition
        clouds1.style.animation = 'none';
        clouds1.style.right = clouds1Position
        gameover.src = './img/game-over1.png';
        gameover.style.display = 'block';

        clearInterval(loop);
    }


}, 10);

document.addEventListener('keydown', jump);