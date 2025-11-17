
  window.onload = function() {
    document.getElementById("loader").style.display = "none";
    
  };


  new WOW().init();
  

   $(document).ready(function(){
    $(".activities_section .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive:{
        0:{ items:2 },
        600:{ items:2 },
        1000:{ items:4 }
      }
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
