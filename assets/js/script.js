let dicesix = {
  sides: 6,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

let diceeight = {
  sides: 8,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

let diceten = {
  sides: 10,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

let dicetwenty = {
  sides: 20,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



//Print diceroll

function printNumber(number) {
  let placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

let button = document.getElementById('button');

button.onclick = function() {
  


let diceSide = document.getElementById('diceSide');
     let selected = diceSide.options[mySelect.selectedIndex].text;
     if(selected === 'sixSided'){
      let result = dicesix.roll();
     } else if (selected === 'eightSided') {
      let result = diceeight.roll();
    } else if (selected === 'tenSided') {
      let result = diceten.roll();
    } else if (selected === 'twentySided') {
      let result = dicetwenty.roll();
    } else {

    }
    printNumber(result);
  };




