const container = document.getElementById('container');
let currentColor = 'black';

function createGrid(size) {
  const squareSize = container.offsetWidth / size;
  container.innerHTML = ''; // Clear existing grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

function changeColor(e) {
  if (currentColor === 'random') {
    e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  } else if (currentColor !== 'eraser') {
    e.target.style.backgroundColor = currentColor;
  }
}

function resetColor(e) {
  if (currentColor === 'eraser') {
    e.target.style.backgroundColor = '';
  }
}

function setBlack() {
  currentColor = 'black';
}

function setRandom() {
  currentColor = 'random';
}

function setEraser() {
  currentColor = 'eraser';
}

function clearSketch() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = '';
  });
}

function changeGrid() {
  let newSize = prompt('Enter the number of squares per side (max 100):');
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }
  
  createGrid(newSize); // Create new grid
}

// Event listeners for hover effect
container.addEventListener('mouseover', changeColor);
container.addEventListener('mouseout', resetColor);

// Initial grid creation
createGrid(16);
