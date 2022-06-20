let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    block = document.querySelector('.block'),
    score = 0,
    time = 0,
    interval = 0;

    
btn.addEventListener('click', (event) => {
    //console.log(event); //event это объкт для события у него есть ключи и методы
    event.preventDefault(); 
    //предотваращает не желательный переход # по ссылки
    if(input.value != '') { 
    //игра запустится если не пустое поле !=
        time = input.value
        input.value = ''
    //чтоб после введение число поле очищалось
        score = 0;
        clearInterval(interval)
    //чтоб очищалось при новом введении цифр
        start() 
    //до этого создать функцию function start
        let result = document.querySelector('.result');
        result.style.display = 'none'
    }
})
block.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {  
    //setTimeOut setInterval выполнится только через секунду 
    interval = setInterval(() => decreaseTime (), 1000)
    createBall()
    btn.classList.add('dis')
}

function decreaseTime() {
    if (time === 0) {
        endGame()
    }else {
        let currentTime = --time
        if (currentTime < 10) {
            currentTime = '0' + currentTime
        }
        timeOut.innerHTML = '00:' + currentTime
    }
}

function endGame() {
    block.innerHTML = `<h1 class="result">Вы набрали: <span>${score}</span> очков</h1>`;
    btn.classList.remove('dis')
}

function createBall() {
    let ball = document.createElement('div');
    //создать элемент
    let size = rand(20,80);
    let coor = block.getBoundingClientRect();
    let x = rand(0, coor.height - size);
    let y = rand(0, coor.width - size);
    
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.style.background = getRndColor();
    ball.classList.add('ball');
    ball.style.top = x + 'px';
    ball.style.left = y + 'px';
    
    block.append(ball);
}

function getRndColor() {
    return 'hsl(' + (360 * Math.random()) + ',50%,50%)'; // H,S,L
}

function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}

