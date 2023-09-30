// Retrieve the exported image from localStorage
const canvasImage = localStorage.getItem('canvasImage');

// Set the image source to display it in the HTML
const displayImage = document.getElementById('display-image');
displayImage.src = canvasImage;