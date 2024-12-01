// Smooth Scroll Effect for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Login Form Validation
const loginForm = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login successful!");
    }
});

// Skin Tier Click Alert (For demonstration purposes)
const tierBoxes = document.querySelectorAll('.tier-box');

tierBoxes.forEach(tierBox => {
    tierBox.addEventListener('click', function () {
        const tierName = this.textContent;
        alert(`You selected the ${tierName} tier!`);
    });
});

// Social Media Link Hover Effect
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#ff4c00';
        link.style.color = '#111';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = '#ff4c00';
    });
});

// Function to scroll the bundles when arrows are clicked
function scrollBundles(direction) {
    const slider = document.querySelector('.bundle-slider');
    const itemWidth = document.querySelector('.bundle-item').offsetWidth + 20; // width + gap
    const currentTransform = parseInt(window.getComputedStyle(slider).transform.split(',')[4]) || 0;
    
    if (direction === 'right') {
        slider.style.transform = `translateX(${currentTransform - itemWidth}px)`;
    } else if (direction === 'left') {
        slider.style.transform = `translateX(${currentTransform + itemWidth}px)`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const tierBoxes = document.querySelectorAll('.tier-box');

    tierBoxes.forEach(box => {
        box.addEventListener('mouseenter', function () {
            const tier = box.dataset.tier;
            const preview = document.getElementById(`${tier}-skin-preview`);
            if (preview) {
                preview.style.display = 'block';
            }
        });

        box.addEventListener('mouseleave', function () {
            const tier = box.dataset.tier;
            const preview = document.getElementById(`${tier}-skin-preview`);
            if (preview) {
                preview.style.display = 'none';
            }
        });
    });
});

function logout() {
    // Redirect to index.html (home page)
    window.location.href = 'Assignment1V2.html';  // Make sure the path is correct
}

// Adding event listener to the logout button
document.getElementById('logout-btn').addEventListener('click', logout);