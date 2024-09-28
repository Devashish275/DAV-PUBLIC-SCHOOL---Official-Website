// Function to animate counter
function animateCounter(id, start, end, duration) {
  const element = document.getElementById(id);
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));
  
  const timer = setInterval(function() {
      current += increment;
      element.textContent = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

// Animate numbers when the page loads
window.onload = function() {
  animateCounter("students-counter", 0, 10000, 2000);  // From 0 to 10,000 in 2 seconds
  animateCounter("trophies-counter", 0, 500, 2000);    // From 0 to 500 in 2 seconds
  animateCounter("teachers-counter", 0, 500, 2000);    // From 0 to 500 in 2 seconds
};
