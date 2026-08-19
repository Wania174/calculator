// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


// Menu button click

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close menu when a navigation link is clicked

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ================= CONTACT BUTTON =================

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {

    const message = document.createElement("div");

    message.className = "success-message";

    message.textContent =
        "Thank you! I'll get back to you soon.";

    document.body.appendChild(message);


    // Remove message after 3 seconds

    setTimeout(function () {

        message.remove();

    }, 3000);

});