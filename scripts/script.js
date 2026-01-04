
function SubmitClk() {
    // const bttn = document.getElementById('submit');

    // document.getElementById('contactForm').addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     bttn.value = 'Submitting...';

    //     const serviceID = 'default_service';
    //     const templateID = 'template_l49lxox';

    //     emailjs.sendForm(serviceID, templateID, this).then(() => {
    //         bttn.value = 'Submit';
    //         alert('Sent!');
    //         document.getElementsByClassName("name").value = '';
    //         document.getElementsByClassName("email").value = '';
    //         document.getElementsByClassName("subject").value = '';
    //         document.getElementsByClassName("Message").value = '';
    //     }, (err) => {
    //         bttn.value = 'Submit';
    //         alert(JSON.stringify(err));
    //     });
    // });

    let params = {
        name: document.getElementsByClassName("name").value,
        email: document.getElementsByClassName("email").value,
        subject: document.getElementsByClassName("subject").value,
        message: document.getElementsByClassName("Message").value,
    }

    if(params.name === "" || params.email === "" || params.subject === "" || params.message === "") {
        alert("Please fill in all the fields.");
        return;
    } else {
        // emailjs.send("service_d4ya65a", "template_l49lxox", params).then(alert("Your Email has been sent!"));
    }
}

function openMenu() {
  document.querySelector('.drawer').classList.add('active');
  document.querySelector('.overlay').classList.add('active');
}

function closeMenu() {
  document.querySelector('.drawer').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
}

document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    })
})

