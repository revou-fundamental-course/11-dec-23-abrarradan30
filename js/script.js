// Prompt ucapan selamat datang pada website
// document.addEventListener('DOMContentLoaded', function() {
//     var userName = prompt('Masukkan Nama Anda:');
//     displayWelcomeMessage(userName);
// });

// function displayWelcomeMessage(name) {
//     var welcomeMessageElement = document.getElementById('welcome-message');
//     if (name) {
//         welcomeMessageElement.textContent = 'Hi ' + name + ', Selamat Datang di Website STIKI Malang!';
//     } else {
//         welcomeMessageElement.textContent = 'Selamat Datang di Website STIKI Malang!';
//     }
// }

// Form validation 
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, formatDate(birthDate), gender, messages);

    return false;
}

function setSenderUI(name, formattedBirthDate, gender, messages) {
    // current time
    const currentTime = new Date();
    const formattedDateTime = currentTime.toLocaleString();

    document.getElementById("sender-current-time").innerHTML = formattedDateTime;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = formattedBirthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function formatDate(inputDate) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(inputDate).toLocaleDateString('id-ID', options);
}

// Slider 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlide");
    if (n > x.length) (slideIndex = 1)
    if (n < 1) (slideIndex = x.length);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex].style.display = "block";
}