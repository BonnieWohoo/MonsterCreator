/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

function toGame() {
  window.location.href = "game2.html";
}

function toFinish() {
  window.location.href = "finish.html";
}

/* Functions for opening the features tabs*/
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="feature-content" and hide them
  tabcontent = document.getElementsByClassName("feature-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="feature" and remove the class "active"
  tablinks = document.getElementsByClassName("feature");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// automatically loads the body features tab
window.onload = openTab(event, "body");