document.addEventListener('DOMContentLoaded', () => {
    const titleDiv = document.querySelector('.name-flex-cont');
    const mainContDiv = document.querySelector('.main-cont');

    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      // Calculate small offsets based on the mouse position
      const offsetX =  -((mouseX / window.innerWidth) * 7 - 15); // Max 15px offset in x-axis
      const offsetY = -((mouseY / window.innerHeight) * 7 - 15); // Max 15px offset in y-axis
  
      // Apply the transform to move the div slightly
      titleDiv.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      mainContDiv.style.transform = `translate(${offsetX/2}px, ${offsetY/2}px)`;
      
    
    });
  });