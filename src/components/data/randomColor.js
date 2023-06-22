export default function generateRandomColorClass() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function generateRandomColorClass() {
//     const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'greenyellow']; 
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
//   }