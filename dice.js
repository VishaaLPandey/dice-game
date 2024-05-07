function rollDice() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  
  document.getElementById('dice1').innerText = dice1;
  document.getElementById('dice2').innerText = dice2;

  var total = dice1 + dice2;
  var resultElement = document.getElementById('result');

  if (total >= 7)
  {
    resultElement.innerText = "Good Job, You win!!";
  }
  else
  {
    resultElement.innerText = "You Lost, Roll again!!";
  }
}
