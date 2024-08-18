// Define the animation parameters
const duration = 1000; // Animation duration in milliseconds
const startValue = 0; // Initial value
const endValue = 100; // Final value

// Define the easing function
function elasticEaseInOut(t) {
  const c = 1.70158;
  const p = 0.3;
  const s = p / 4;
  
  if (t === 0) return 0;
  if (t === 1) return 1;
  
  let postFix = 0;
  if (!s || s < 1) {
    s = 1;
    postFix = c / 4;
  } else {
    postFix = c * Math.asin(1 / s) / (2 * Math.PI);
  }
  
  if (t < 1) {
    return -0.5 * (Math.pow(2, 10 * (t -= 1)) * Math.sin((t - postFix) * (2 * Math.PI) / p));
  }
  
  return Math.pow(2, -10 * (t -= 1)) * Math.sin((t - postFix) * (2 * Math.PI) / p) * 0.5 + 1;
}

// Perform the animation
const startTime = Date.now();
function animate() {
  const currentTime = Date.now();
  const elapsed = currentTime - startTime;
  
  if (elapsed >= duration) {
    // Animation completed
    const currentValue = endValue;
    console.log('Final value:', currentValue);
  } else {
    // Animation still in progress
    const progress = elapsed / duration;
    const easedProgress = elasticEaseInOut(progress);
    const currentValue = startValue + (endValue - startValue) * easedProgress;
    console.log('Current value:', currentValue);
    
    // Continue animation
    requestAnimationFrame(animate);
  }
}

animate();
