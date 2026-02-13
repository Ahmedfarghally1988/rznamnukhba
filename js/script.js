function wrapEnglishWords(element) {
  if (element.nodeType === Node.TEXT_NODE) {
    const text = element.textContent;
    if (/[A-Za-z0-9]/.test(text)) {
      const newHTML = text.replace(
        /\b[A-Za-z0-9]+\b/g,
        '<span class="english-word">$&</span>'
      );
      const span = document.createElement('span');
      span.innerHTML = newHTML;
      element.replaceWith(span);
    }
  } else {
    element.childNodes.forEach(child => wrapEnglishWords(child));
  }
}





document.addEventListener("DOMContentLoaded", () => {
  wrapEnglishWords(document.body);
});


  window.onload = function() {
    document.getElementById("loader").style.display = "none";

  };


  new WOW().init();


   $(document).ready(function(){
    $(".activities_section .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 2000,
      autoplaySpeed: 2000,
      autoplayHoverPause: true,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:4 }
      }
    });

      // للموبايل: توقف عند اللمس
    owl.on('touchstart', function(){
      owl.trigger('stop.owl.autoplay');
    });
    owl.on('touchend', function(){
      owl.trigger('play.owl.autoplay',[0]);
    });


  });


     $(document).ready(function(){
    $(".our-partiner .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive:{
        0:{ items:3 },
        600:{ items:3 },
        1000:{ items:6 }
      }
    });
  });


  const counters = document.querySelectorAll('.counter');
let started = false;

function startCount() {
  if (!started) {
    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let speed = target / 200; // سرعة العد

      let update = setInterval(() => {
        count += speed;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(update);
        } else {
          counter.textContent = Math.floor(count);
        }
      }, 10);
    });
    started = true;
  }
}

// تشغيل العد عند ظهور العنصر
window.addEventListener("scroll", function () {
  let section = document.querySelector(".counter");
  let position = section.getBoundingClientRect().top;

  if (position < window.innerHeight - 100) {
    startCount();
  }
});


let zoomPopup = document.querySelector(".zoom-popup");
let zoomedImg = document.querySelector(".zoomed-img");
let imgs = document.querySelectorAll(".zoom-image");

imgs.forEach(img => {
  img.addEventListener("click", () => {
    zoomedImg.src = img.src;
    zoomPopup.style.display = "flex";
    setTimeout(() => zoomPopup.classList.add("show"), 10);
  });
});

zoomPopup.addEventListener("click", () => {
  zoomPopup.classList.remove("show");
  setTimeout(() => zoomPopup.style.display = "none", 300);
});

let pageUrl = encodeURIComponent(window.location.href);
let text = encodeURIComponent("أكتشف هنا");

function toggleShare(){
  document.getElementById("sharePopup").classList.toggle("active");
}

function shareFacebook() {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank');
}

function shareWhatsapp() {
  window.open(`https://api.whatsapp.com/send?text=${text}%20${pageUrl}`, '_blank');
}

function shareTwitter() {
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${pageUrl}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("✅ تم نسخ الرابط");
}


/*********** New Script ************/

function togglePassword(inputId, iconEl) {
  const password = document.getElementById(inputId);

  if (password.type === "password") {
    password.type = "text";
    iconEl.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    password.type = "password";
    iconEl.classList.replace("bi-eye-slash", "bi-eye");
  }
}


function handleCredentialResponse(response) {
  // JWT Token
  const token = response.credential;
  console.log("Google Token:", token);

  // فك التوكن (Front-end فقط)
  const user = JSON.parse(atob(token.split('.')[1]));
  console.log(user);

  /*
    user = {
      name,
      email,
      picture,
      sub (Google ID)
    }
  */

  alert("مرحبًا " + user.name);
}


function openBioModal() {
  document.getElementById('bio1').value =
    document.querySelector('.bio-text-1').innerText.trim();
}

function saveBio() {
  document.querySelector('.bio-text-1').innerText =
    document.getElementById('bio1').value;
}

function generatePDF() {
  const body = document.body;
  const element = document.getElementById('cvContent');

  // فعّل وضع PDF
  body.classList.add('pdf-mode');

  html2pdf().set({
    margin: 0,
    filename: 'Ahmed_Farghally_CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 1.5,
      useCORS: true,
      scrollX: 0,
      scrollY: 0
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  }).from(element).save().then(() => {
    // رجّع الصفحة لطبيعتها
    body.classList.remove('pdf-mode');
  });
}

// script.js


    document.getElementById("sendApplication").addEventListener("click", function () {

  const selectedCV = document.getElementById("cvSelect").value;

  if (!selectedCV) {
    alert("من فضلك اختر السيرة الذاتية");
    return;
  }

  // إخفاء الفورم
  document.getElementById("applyForm").classList.add("d-none");

  // إظهار رسالة النجاح
  document.getElementById("successMessage").classList.remove("d-none");

});