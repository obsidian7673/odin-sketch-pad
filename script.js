const makeGrid = (gridContainer, gridSize) => {
  if (gridSize > 99) return alert(`max grid size is 99, you have entered a grid size of ${gridSize}, please chose a smaller size`);
  for (let row = 0; row < gridSize; row++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    for (let col = 0; col < gridSize; col++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridRow.appendChild(gridItem);
    }
    gridContainer.appendChild(gridRow)
  }
}

const paintItem = (query) => {
  if (query.target.className == 'grid-item') {
    query.target.className += ' painted';
  }
}

const makeUserGrid = () => {
  let gridSize = prompt('enter size for grid (max: 99, default: 16)', 16);
  makeGrid(document.querySelector('.grid-container'), gridSize);
}

window.onload = () => {
  const gridContainer = document.querySelector('.grid-container');
  const makeGridButton = document.querySelector('.make-grid');

  gridContainer.addEventListener('mouseover', paintItem);
  makeGridButton.addEventListener('click', makeUserGrid);
}