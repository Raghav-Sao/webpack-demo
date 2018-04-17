import '../css/click-game-style.css';

var containerSize = 100,
  boxSize,
  childNumber,
  score = 0;
dGBI('clickable-container').addEventListener('click', function(event) {
  if (childNumber == event.target.id) {
    dGBI(childNumber).style.background = 'green';
    score++;
    dGBI('score').innerHTML = score;
  }
});

function resetColor(childNumber) {
  setTimeout(function() {
    dGBI(childNumber).style.background = '';
  }, 200);
}

function dGBI(id) {
  return document.getElementById(id);
}

dGBI('start').addEventListener('click', function() {
  var generatedEle = generateDiv(
    parseInt(dGBI('container-size').value),
    parseInt(dGBI('box-size').value)
  );
  dGBI('container').appendChild(generatedEle);
  var start = setInterval(generateBackgroundOnDiv, 1000);
});

function generateDiv(containerSize, boxSize) {
  this.containerSize = containerSize;
  this.boxSize = boxSize;
  var container = document.createElement('DIV');
  container.style.width = containerSize + 'px';
  container.style.height = containerSize + 'px';
  for (var row = 0; row < containerSize / boxSize; row++) {
    for (var i = 0; i < containerSize / boxSize; i++) {
      tempDiv = document.createElement('DIV');
      tempDiv.style.width = boxSize - 2 + 'px';
      tempDiv.style.height = boxSize - 2 + 'px';
      tempDiv.style.display = 'inline-block';
      tempDiv.style.border = '1px solid #ccc';
      tempDiv.id = row * containerSize / boxSize + i;
      container.appendChild(tempDiv);
    }
  }
  return container;
}
function generateBackgroundOnDiv() {
  childNumber = Math.floor(Math.random() * (containerSize / boxSize * containerSize / boxSize));
  console.log(childNumber, containerSize, boxSize);
  dGBI(childNumber).style.background = 'red';
  setTimeout(function() {
    dGBI(childNumber).style.background = '';
  }, 900);
}
