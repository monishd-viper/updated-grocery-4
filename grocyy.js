let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

function validatePassword(password) {
  // Define the default password
  const defaultPassword = "welcome123";

  return password === defaultPassword;
}
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Get the entered email and password

  const password = passwordInput.value;

  // Perform email validation here (you can use regular expressions or a library like validator.js)

  // Check if the password is valid
  if (validatePassword(password)) {
      // Password is valid, clear any previous error message
      passwordError.textContent = 'Login Successful';
      // You can proceed with form submission here
      // For example: loginForm.submit();
  } else {
      // Password is invalid, display an error message
      passwordError.textContent = 'Invalid password. Please enter the correct password.';
  }
});
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Add your logic to handle the "Forgot Password" form submission
    var email = document.getElementById('email').value;

    // Example: You can send a request to the server to handle the password reset
    // This is a placeholder and should be replaced with your actual logic
    console.log('Reset password request for email:', email);
});


const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 1; // Start with the first content visible

function showContent(index) {
    if (index === 1) {
        content1.style.display = 'block';
        content2.style.display = 'none';
    } else {
        content1.style.display = 'none';
        content2.style.display = 'block';
    }
}

function moveToNextContent() {
    currentIndex = 3 - currentIndex; // Toggle between 1 and 2
    showContent(currentIndex);
}

function moveToPrevContent() {
    currentIndex = 3 - currentIndex; // Toggle between 1 and 2
    showContent(currentIndex);
}

nextBtn.addEventListener('click', moveToNextContent);
prevBtn.addEventListener('click', moveToPrevContent);

// Initial display
showContent(currentIndex);
document.getElementById('payBtn').addEventListener('click', function() {
    // Implement payment processing logic here
    alert('Payment successful!');
});
function redirectToPayment() {
    window.location.href = "checkout.html";
}