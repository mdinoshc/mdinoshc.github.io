
function SubmitClk() {
  
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
        // DO SOMETHING WITH THE FORM DATA
        // Example using EmailJS to send the form data
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
            .then((response) => {
            alert("Email sent successfully!");
            }, (error) => {
            alert("Failed to send email. Please try again.");
            });
    }
}

function openMenu() {
  document.querySelector('.drawer').classList.add('active');
  document.querySelector('.overlay').classList.add('active');
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

