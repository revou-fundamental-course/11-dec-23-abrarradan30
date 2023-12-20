// 1. Prompt ucapan selamat datang pada website
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

// 2. Form validation 
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

// 3. Slider 
let currentImageIndex = 0;
const images = [
    "assets/stiki.png",
    "assets/stiki2.jpg",
    "assets/stiki_akreditasi.jpg",
];

function changeImage(n) {
    currentImageIndex += n;

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    document.getElementById("sliderImage").src = images[currentImageIndex];
}

// 4. Mengarahkan pada profil 
document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen <li> dan <header> berdasarkan ID
    const profilLi = document.getElementById('profil-li');
    const profilHeader = document.getElementById('profil-header');

    // Tambahkan event listener untuk mengarahkan ke <header> ketika <li> diklik
    profilLi.addEventListener('click', function () {
        window.location.href = '#' + profilHeader.id;
    });
});

// 5. Mengarahkan pada jurusan
document.addEventListener('DOMContentLoaded', function () {
    const jurusanLi = document.getElementById('jurusan-li');
    const listJurusan = document.getElementById('list-jurusan');

    jurusanLi.addEventListener('click', function () {
        window.location.href = '#' + listJurusan.id;
    });
});

// 6. Mengarahkan pada message us
document.addEventListener('DOMContentLoaded', function () {
    const messageLi = document.getElementById('message-li');
    const messageForm = document.getElementById('formulir');

    messageLi.addEventListener('click', function () {
        window.location.href = '#' + messageForm.id;
    });
});