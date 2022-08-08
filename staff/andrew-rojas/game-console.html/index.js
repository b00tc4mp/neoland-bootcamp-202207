
const spaceAvailable = 30
const step = 2

let score = 0

const brain = {
    emoji: '🧠',
    x: 0,
    y: 0
}

const books = {
  emoji: '📚',
  x: 2 * Math.round(Math.random() * spaceAvailable / 2),
  y: 9
}

document.onkeydown = event => {
  switch (event.key) {
    case 'ArrowRight':
      if(brain.x < spaceAvailable)
         brain.x += step
      break
    case 'ArrowLeft':
      if(brain.x > 0)
         brain.x -= step
      break
  }
}

const intervalId = setInterval (render, 300)

function render() {
  console.clear()

  console.log(`ACTUAL SCORE ${score}`)

  for(let i = 9; i >= 0; i--) {
    if(i === 0)
      if(books.y === 0 && ((brain.x === books.x) || Math.abs(brain.x - books.x) < 2)) {
        console.log('🤯🤯🤯')
        score++
     
    } else if (books.y === 0 && books.x > brain.x) {  
        console.log(' '.repeat(brain.x) + brain.emoji + ' '.repeat(books.x - brain.x -2) + books.emoji)

    } else if (books.y === 0 && books.x < brain.x) {  
        console.log(' '.repeat(books.x) + books.emoji + ' '.repeat(brain.x - books.x -2) + brain.emoji)

    } else 
        console.log('-'.repeat(brain.x) + brain.emoji)

      else if (i === books.y)
        console.log('-'.repeat(books.x) + books.emoji)

      else
        console.log(i)
  }

  if(score === 2) {  
    clearInterval(intervalId)

    console.log('GAME WON')
  }

   updateBooks()
  }  

  function updateBooks() {  
    if(books.y === 0) {   
      books.y = 9
      books.x = Math.round(Math.random() * 10)
  } else  
     books.y -= 1
}
