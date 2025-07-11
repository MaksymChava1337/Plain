 const grid = document.getElementById('grid');
    const colors = ['#FFD700', '#FF6B6B', '#1E90FF', '#6A5ACD', '#00C49A'];

    const circleSize = 72; 

    function createGrid() {
      grid.innerHTML = ''; 

      const cols = Math.floor(window.innerWidth / circleSize);
      const rows = Math.floor(window.innerHeight / circleSize);

      grid.style.gridTemplateColumns = `repeat(${cols}, ${circleSize}px)`;
      grid.style.gridTemplateRows = `repeat(${rows}, ${circleSize}px)`;

      for (let i = 0; i < cols * rows; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        grid.appendChild(circle);
      }
    }

    createGrid();
    window.addEventListener('resize', createGrid);

    setInterval(() => {
      const circles = document.querySelectorAll('.circle');
      const circle = circles[Math.floor(Math.random() * circles.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      circle.classList.add('highlight');
      circle.style.setProperty('--color', color);

      setTimeout(() => {
        circle.classList.remove('highlight');
      }, 1200);
    }, 300);