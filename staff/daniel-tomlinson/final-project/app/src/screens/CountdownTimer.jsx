import "./CountdownTimer.css";

// modificar aquí la cantidad de segundos y en el stilo .start

var contador = 10;

setTimeout(() => {
  document.querySelector(".meter .bar span").style.display = "block";

  document.querySelector(".meter .bar span").classList.add("start");

  document.querySelector(".meter .num").innerHTML = contador;

  var interval = setInterval(() => {
    contador--;

    document.querySelector(".meter .num").innerHTML = contador;

    if (contador <= 0) {
      clearInterval(interval);

      finalCuentaAtras();
    }
  }, 1000);
}, 500);

function finalCuentaAtras() {
  alert("ha finalizado la cuenta atras");
}

function CountdownTimer() {
  return (
    <div className="timer-container">
      <div className="meter">
        <div className="bar">
          <span className=""></span>
        </div>

        <div className="num"></div>
      </div>
    </div>
  );
}

export default CountdownTimer;
