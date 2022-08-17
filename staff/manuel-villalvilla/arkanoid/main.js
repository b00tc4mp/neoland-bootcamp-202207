var blockContainer = document.querySelector('.block-container');

//bloques grises
for (var i = 1; i <= 15; i++) {
    var blockGray = document.createElement('div');
    blockGray.classList.add('block', 'bg-grey');
    blockGray.id = 'blockGray' + [i];
    blockContainer.append(blockGray);
}
//bloques rojos
for (var i = 1; i <= 15; i++) {
    var blockRed = document.createElement('div');
    blockRed.classList.add('block', 'bg-red');
    blockRed.id = 'blockRed' + [i];
    blockContainer.append(blockRed);
}
//bloques amarillos
for (var i = 1; i <= 15; i++) {
    var blockYellow = document.createElement('div');
    blockYellow.classList.add('block', 'bg-yellow');
    blockYellow.id = 'blockYellow' + [i];
    blockContainer.append(blockYellow);
}
//bloques purpuras
for (var i = 1; i <= 15; i++) {
    var blockPurple = document.createElement('div');
    blockPurple.classList.add('block', 'bg-purple');
    blockPurple.id = 'blockPurple' + [i];
    blockContainer.append(blockPurple);
}
//bloques rosas
for (var i = 1; i <= 15; i++) {
    var blockPink = document.createElement('div');
    blockPink.classList.add('block', 'bg-pink');
    blockPink.id = 'blockPink' + [i];
    blockContainer.append(blockPink);
}
//bloques verdes
for (var i = 1; i <= 15; i++) {
    var blockGreen = document.createElement('div');
    blockGreen.classList.add('block', 'bg-green');
    blockGreen.id = 'blockGreen' + [i];
    blockContainer.append(blockGreen);
}

var flexContainer = document.querySelector('.flex-container');
// var flexContainerStyle = getComputedStyle(flexContainer);

var ball = document.querySelector('.ball');

var slide = document.querySelector('.slide');
var slideComputedStyle = getComputedStyle(slide);

ball.x = 45;
ball.y = 0;

slide.x = 40;
slide.x.min = 0;
slide.x.max = 100;
slide.y = 0;

ball.style.left = ball.x + '%';
ball.style.top = ball.y + '%';

slide.style.left = slide.x + '%';
slide.style.top = slide.y + '%';

document.onkeydown = function (event) {
    if (event.key === 'ArrowLeft') {
        slide.x -= 2;
        slide.style.left = slide.x + '%';
    } else if (event.key === 'ArrowRight') {
        console.log(slideComputedStyle.width);
        if (slide.x + slideComputedStyle.width + 1 === slide.x.max){
            slide.x += 0;
            slide.style.left = slide.x + '%';
        } else {
            slide.x += 2;
            slide.style.left = slide.x + '%';
        }
        console.log(slide.x);
    }
}

console.log(slideComputedStyle.width);
