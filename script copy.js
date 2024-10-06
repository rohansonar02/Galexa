function createStars() {
    const starContainer = document.getElementById('stars');
    
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const size = Math.random() * 3 + 1;
      star.style.width = size + 'px'; // Fix: Concatenation instead of template literals
      star.style.height = size + 'px'; // Fix: Concatenation instead of template literals
      
      star.style.left = Math.random() * 100 + 'vw'; // Fix: Concatenation instead of template literals
      star.style.top = Math.random() * 100 + 'vh'; // Fix: Concatenation instead of template literals
      star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Fix: Concatenation instead of template literals
      
      starContainer.appendChild(star);
    }
  }
  
  document.addEventListener('DOMContentLoaded', createStars);
  document.querySelector('button').addEventListener('click', function() {
    const container = document.querySelector('.container');
    
    // Add zoom animation class to the container
    container.classList.add('zoom');
    
    // Redirect to another page after the zoom animation
    setTimeout(function() {
      window.location.href = 'nextpage.html'; // Replace with the actual URL of the next page
    }, 1000); // 1 second (matches the animation duration)
  });
  
  