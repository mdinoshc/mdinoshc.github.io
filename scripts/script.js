import config from './config.js';

(function () {
        emailjs.init({
          publicKey: config.publicKey,
        });
      })();

function openMenu() {
    document.querySelector('.drawer').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

function closeMenu() {
    document.querySelector('.drawer').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}

// Make functions global for onclick attributes
window.openMenu = openMenu;
window.closeMenu = closeMenu;

document.addEventListener('DOMContentLoaded', function () {
    
    // Handle desktop form
    const desktopForm = document.getElementById('contactForm');
    const desktopBtn = document.getElementById('button');

    if (desktopForm) {
        desktopForm.addEventListener('submit', function (event) {
            handleFormSubmit(event, desktopBtn);
        });
    }

    // Handle mobile form
    const mobileForm = document.getElementById('contactFormMobile');
    const mobileBtn = document.getElementById('buttonMobile');

    if (mobileForm) {
        mobileForm.addEventListener('submit', function (event) {
            handleFormSubmit(event, mobileBtn);
        });
    }

    function handleFormSubmit(event, btn) {
        event.preventDefault();

        btn.value = 'Submitting...';

        emailjs.sendForm(config.serviceID, config.templateID, event.target)
            .then(() => {
                btn.value = 'Submit';
                alert('Your Email Sent!');
                document.getElementById('contactForm').reset();
                document.getElementById('contactFormMobile').reset();
            }, (err) => {
                btn.value = 'Submit';
                alert(JSON.stringify(err));
            });
    }

    // Handle menu icon click
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', openMenu);
    }

    document.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        })
    })
});



