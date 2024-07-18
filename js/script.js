// Banner AutoSlide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Form Validation
function validateForm() {
    let name = document.querySelector('#name').value;
    let birthDate = document.querySelector('#orderDate').value;
    let gender;
    let genderElements = document.getElementsByName('jkel');
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }
    let message = document.querySelector('#message').value;

    console.log(name);
    console.log(birthDate);
    console.log(gender);
    console.log(message);
    
// Output
    if (name != "" && birthDate != "" && gender != undefined && message != "") {
        document.querySelector('#outputName').innerHTML = 'Nama: ' + name;
        document.querySelector('#outputTanggalOrder').innerHTML = 'Tanggal Order: ' + birthDate;
        document.querySelector('#outputKelamin').innerHTML = 'Jenis Kelamin: ' + gender;
        document.querySelector('#outputPesan').innerHTML = 'Pesan: ' + message;
    } else {
        alert("Inputan ada yang kosong");
    }
}