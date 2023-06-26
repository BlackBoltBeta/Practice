

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let rollDice = () => getRandomIntInclusive(1, 6);

  document.getElementById("roll").addEventListener("click", function () {
    
    let player1Score = rollDice();

    let result = "";

    document.getElementById("results").innerHTML = <p>${result}</p>;
  }



