// Function to handle navigation
function navigateTo(page) {
  window.location.href = page + ".html";
}

// Check if the user is logged in (you should implement your login logic)
function isUserLoggedIn() {
  // Replace this with your actual login check
  return false;
}

// Event listener for login form
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  if (isUserLoggedIn()) {
    // Redirect to the "About" page after login
    navigateTo("about");
  } else {
    alert("Login failed. Please check your credentials.");
  }
});

// Event listeners for navigation links
document.getElementById("about-link").addEventListener("click", function (e) {
  e.preventDefault();
  navigateTo("about");
});

document.getElementById("services-link").addEventListener("click", function (e) {
  e.preventDefault();
  navigateTo("services");
});
