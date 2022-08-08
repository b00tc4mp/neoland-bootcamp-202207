const robot1 = document.querySelector('.robot--1')
const robot2 = document.querySelector('.robot--2')
const scoreRobot1Element = document.querySelector('.score-robot-1')
const scoreRobot2Element = document.querySelector('.score-robot-2')
let scoreRobot1 = 0
let scoreRobot2 = 0


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

window.addEventListener('keydown', event => {
    const key = event.key

    switch (key) {
        case 'ArrowRight':
            robot1.style.left = Number(robot1.style.left.slice(0, -2)) + 50 + 'px'
            break;
        case 'ArrowLeft':
            robot1.style.left = Number(robot1.style.left.slice(0, -2)) - 50 + 'px'
            break;
        case 'ArrowDown':
            break;
        case 'd':
            robot2.style.left = Number(robot2.style.left.slice(0, -2)) + 50 + 'px'
            break;
        case 'a':
            robot2.style.left = Number(robot2.style.left.slice(0, -2)) - 50 + 'px'
            break;
    }

    const hasOverlap = areOverlap(robot1, robot2)

    if (hasOverlap && (key === 'ArrowLeft' || key === 'ArrowRight')) {
        scoreRobot1++

        scoreRobot1Element.innerHTML = `Score Robot 1: ${scoreRobot1}`
    } else if (hasOverlap && (key === 'a' || key === 'd')) {
        scoreRobot2++

        scoreRobot2Element.innerHTML = `Score Robot 2: ${scoreRobot2}`
    }  
})