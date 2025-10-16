function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}

function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}



function SubmitClk() {
    const bttn = document.getElementById('submit');

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        bttn.value = 'Submitting...';

        const serviceID = 'default_service';
        const templateID = 'template_l49lxox';

        emailjs.sendForm(serviceID, templateID, this).then(() => {
            bttn.value = 'Submit';
            alert('Sent!');
            document.getElementsByClassName("name").value = '';
            document.getElementsByClassName("email").value = '';
            document.getElementsByClassName("subject").value = '';
            document.getElementsByClassName("Message").value = '';
        }, (err) => {
            bttn.value = 'Submit';
            alert(JSON.stringify(err));
        });
    });
}

function closeNav() {
    debugger
    document.getElementById("sidemenu_Navigat").style.display = none;
    document.getElementById("navbar").style.display = flex;
}

function openNav() {
    debugger
    document.getElementById("sidemenu_Navigat").style.display = flex;
    document.getElementById("navbar").style.display = none;
}

