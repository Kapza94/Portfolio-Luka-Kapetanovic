const nav = document.querySelector(".nav-bar-links");
const links = document.querySelectorAll(".link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


closeIcon.style.display = 'none';

function toggleMenu() {
    if (nav.classList.contains("showMenu")) {
        nav.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        nav.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

const menuItems = document.querySelectorAll(".menuItem");

links.forEach(
    function (link) {
        link.addEventListener("click", toggleMenu);
    }
)
// ----------------------------------------------------------------------------


// onclick form color change

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

let fName = document.querySelector('.contact-form-input-fname');
let lName = document.querySelector('.contact-form-input-lname');
let email = document.querySelector('.contact-form-input-email');
let phone = document.querySelector('.contact-form-input-phone');
let message = document.querySelector('.contact-form-input-message')

let form = document.getElementById('form')
let errorElement = document.getElementById('error')



lName.addEventListener('input', borderColor)
fName.addEventListener('input', borderColor)
email.addEventListener('input', borderColor)
message.addEventListener('input', borderColor)

phone.addEventListener('input', (e) => {
    let userInput = e.target.value;
    let numericInput = userInput.replace(/[^0-9]/g, '');
    e.target.value = numericInput;
    var maxLength = 10; // Specify your desired maximum length here
    var restrictedInput = numericInput.slice(0, maxLength);
    e.target.value = restrictedInput;

    if (e.target.value === '' || numericInput.length < 10) {
        e.target.style.border = '#D44A47 0.15rem solid';
    } else if (e.target.value) {
        e.target.style.border = 'lightGreen 0.15rem solid';
    }
})



function borderColor(e) {
    console.log(e.target)
    if (e.target.value === '') {
        e.target.style.border = '#D44A47 0.15rem solid';
    } else if (e.target.value) {
        e.target.style.border = 'lightGreen 0.15rem solid';
    }
}

form.addEventListener('submit', (e) => {
    let errorMessages = []
    if (fName.value === '' || fName.value == null) {
        errorMessages.push('First Name is required')
    }

    if (lName.value === '' || lName.value == null) {
        errorMessages.push('Last Name is required')
    }

    if (email.value === '' || email.value == null) {
        errorMessages.push('Email is required')
    }

    if (phone.value === '' || phone.value == null) {
        errorMessages.push('Phone number is required')
    }

    if (message.value === '' || message.value == null) {
        errorMessages.push('Please make sure you add your message. ')
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorElement.innerText = errorMessages.join(', ' + ' ')
    }

})










