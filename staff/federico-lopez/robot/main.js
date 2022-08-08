const robot1 = document.querySelector('.robot--1')
const robot2 = document.querySelector('.robot--2')
const scoreRobot1Element = document.querySelector('.score-robot-1')
const scoreRobot2Element = document.querySelector('.score-robot-2')
let scoreRobot1 = 0
let scoreRobot2 = 0

const keysPressed = {}

function areOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    );
}

const lookForKeysPreseed = () => {
    if (keysPressed['ArrowRight'])
        robot1.style.left = Number(robot1.style.left.slice(0, -2)) + 50 + 'px'
    else if (keysPressed['ArrowLeft'])
        robot1.style.left = Number(robot1.style.left.slice(0, -2)) - 50 + 'px'

    if (keysPressed['d'])
        robot2.style.left = Number(robot2.style.left.slice(0, -2)) + 50 + 'px'
    else if (keysPressed['a'])
        robot2.style.left = Number(robot2.style.left.slice(0, -2)) - 50 + 'px'

    const hasOverlap = areOverlap(robot1, robot2)

    if (hasOverlap && (keysPressed['ArrowRight'] || keysPressed['ArrowLeft'])) {
        scoreRobot1++

        scoreRobot1Element.innerHTML = `Score Robot 1: ${scoreRobot1}`
    }
    
    if (hasOverlap && (keysPressed['a'] || keysPressed['d'])) {
        scoreRobot2++

        scoreRobot2Element.innerHTML = `Score Robot 2: ${scoreRobot2}`
    }
}

setInterval(lookForKeysPreseed, 100)

window.addEventListener('keydown', event => {
    keysPressed[`${event.key}`] = true
})

window.addEventListener('keyup', event => {
    keysPressed[`${event.key}`] = false
})
