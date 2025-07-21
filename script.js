// Burger toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('main-nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Animated background
function animateGrid(container) {
  const colors = ['#FFD700', '#FF6B6B', '#1E90FF', '#6A5ACD', '#00C49A'];
  const cellSize = 72;

  const parentSection = container.parentElement;
  const cols = Math.floor(parentSection.clientWidth / cellSize);
  const rows = Math.floor(parentSection.clientHeight / cellSize);

  container.innerHTML = '';
  container.style.setProperty('--cols', cols);
  container.style.setProperty('--rows', rows);
  container.style.width = '100%';
  container.style.height = '100%';

  for (let i = 0; i < cols * rows; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    container.appendChild(circle);
  }

  setInterval(() => {
    const circles = container.querySelectorAll('.circle');
    if (circles.length > 0) {
      const randomCircle = circles[Math.floor(Math.random() * circles.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      randomCircle.classList.add('highlight');
      randomCircle.style.setProperty('--color', color);

      setTimeout(() => {
        randomCircle.classList.remove('highlight');
      }, 1200);
    }
  }, 300);
}

// Initialize grids
document.addEventListener('DOMContentLoaded', () => {
  const allGrids = document.querySelectorAll('.background-grid');
  allGrids.forEach(grid => {
    animateGrid(grid);
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  const allGrids = document.querySelectorAll('.background-grid');
  allGrids.forEach(grid => {
    animateGrid(grid);
  });
});
