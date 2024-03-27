(function () {
  "use strict";
  if ("IntersectionObserver" in window) {} else {
    // `document.querySelectorAll` does not work in Opera Mini
    var lazyImages = document.getElementsByClassName("lazy");
    // https://stackoverflow.com/questions/3871547/js-iterating-over-result-of-getelementsbyclassname-using-array-foreach
    [].forEach.call(lazyImages, function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy");
      lazyImage.height = 'auto';
    });
  }
})();

const toggleButton = document.getElementById('js-navbar-toggle');
const menu = document.getElementById('js-menu');
const overlay = document.querySelector('.overlay');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.classList.toggle('active'); // Toggle overlay
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active'); // Close menu when clicking outside of it
  overlay.classList.remove('active'); // Hide overlay
});

// Get the current page URL
const currentPage = window.location.href;

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links');

// Loop through each navigation link and check if it matches the current page URL
navLinks.forEach(link => {
  // If the navigation link's href attribute matches the current page URL, add the active class
  if (link.href === currentPage) {
    link.classList.add('active');
  }
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const sticky = navbar.offsetTop;

  // Add the 'sticky' class to the navbar when you reach its scroll position
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Disable context menu
// document.addEventListener('contextmenu', event => event.preventDefault());

// Disable specific keys
// document.onkeydown = function (e) {
//     // Disable F12 key
//     if (e.key === "F12" || (e.key === "F12" && e.ctrlKey === true) || (e.key === "F12" && e.shiftKey === true) || (e.key === "F12" && e.altKey === true) || (e.key === "F12" && e.metaKey === true)) {
//         return false;
//     }

//     // Disable Ctrl+Shift+I (inspect element)
//     if (e.ctrlKey && e.shiftKey && e.key === "I") {
//         return false;
//     }

//     // Disable Ctrl+Shift+J (inspect element)
//     if (e.ctrlKey && e.shiftKey && e.key === "J") {
//         return false;
//     }

//     // Disable Ctrl+U (view page source)
//     if (e.ctrlKey && e.key === "U") {
//         return false;
//     }
// }

window.addEventListener('scroll', function() {
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 100) { // Adjust the scroll height to show the button
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

document.getElementById('scrollTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
