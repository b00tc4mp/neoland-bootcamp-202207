var i = 1;

function syncLoop() {
  console.log(i);
  if (i < 11) {
    i++;
    setTimeout(syncLoop, 1000);
  }
}

syncLoop();
