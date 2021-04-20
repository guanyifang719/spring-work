import '../css/index.css'

const ball1 = document.querySelector('.ball1')
const ball2 = document.querySelector('.ball2')
const ball3 = document.querySelector('.ball3')
const btn = document.getElementsByTagName('button')

let ballMove = ball => ball.style.transform = 'translateX(100px)'
let p = ball => new Promise(resolve => {
    ballMove(ball)
    setTimeout(resolve, 1000)
})
// callback 用法的 demo

btn[0].onclick = function move() {
    ballMove(ball1)
    setTimeout(() => {
        ballMove(ball2)
        setTimeout(() => ballMove(ball3), 1000)
    }, 1000)
}

// Promise 用法的 demo

btn[1].onclick = function move() {
    p(ball1)
        .then(() => p(ball2))
        .then(() => ballMove(ball3))
}

// async/await 用法的 demo
btn[2].onclick = async function go() {
    await p(ball1)
    await p(ball2)
    await p(ball3)
}