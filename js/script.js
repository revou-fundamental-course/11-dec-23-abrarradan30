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
let currentImageIndex = 0;
const images = [
    "assets/stiki.png",
    "assets/stiki2.jpg",
];

function changeImage(n) {
    currentImageIndex += n;

    // Check if index is out of bounds
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    document.getElementById("sliderImage").src = images[currentImageIndex];
}