function loader() {
  // Creating a GSAP Timeline
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 300,
    stagger: 0.2,
    duration: 1.3,
    ease: "power2.inOut",
  });

  gsap.from(".line h4, .line h3", {
    delay: 0.5,
    opacity: 0,
    duration: 1,
    // OnStart is a builtin function of GSAP which is called when the timeline is executing the current object animation.
    onStart: function () {
      // Creating a Function to make the counter do its work

      //Selection of the counter text to change
      var counter_text = document.querySelector("#line1-part1 h4");
      //Declaring the counter
      var grow = 0;

      // Using the setInterval function to call the functions again and again after particular time interval
      setInterval(function () {
        // Checking if the counter has reached the desired value. If not, increment the counter and update the text. Otherwise, stop the interval.
        if (grow < 100) {
          counter_text.innerHTML = grow;
          grow++;
        } else {
          counter_text.innerHTML = grow;
          grow = 100;
        }
      }, 20);
    },
  });

  tl.from("#loader p", {
    opacity: 0,
    duration: 0.2,
  });

  gsap.from(".line h2", {
    delay: 1,
    duration: 0.5,
    y: 300,
  });

  gsap.to(".line h2", {
    opacity: 1,
    delay: 1,
    duration: 0.5,
    animationName: "now_animation",
  });

  var loader = document.querySelector("#loader");
  var flag = 1;

  setInterval(function () {
    if (flag == 1) {
      gsap.to("#loader", {
        opacity: 0,
        duration: 0.5,
      });

      gsap.to("#main", {
        display: "block"
      })
    }
  }, 3500);

  gsap.to("#loader", {
    display: "none",
    delay: 4,
    duration: 0.1,
  });

  gsap.from("#page1", {
    y: 1500,
    duration: 1,
    ease: "power2.inOut",
    opacity: 0,
    delay: 3.5,
  });

  gsap.from("#page2", {
    y : 1500,
    duration : 1,
    ease: "power2.inOut",
    opacity: 0,
    delay: 4
  })

  gsap.from("#hero1, #hero2, #hero3, #hero4", {
    y: 200,
    duration: 1,
    opacity: 0,
    delay: 4.2,
    stagger: 0.2,
    ease: "power3"
  })
  gsap.to("#crsr", {
    opacity: 1,
    delay: 3.5
  })
}
function makeCrsrBigger(e, n) {
  e.addEventListener("mouseenter", function () {
    gsap.to("#crsr", {
      height: `${n}vw`,
      width: `${n}vw`,
      duration: 0.2,
      backgroundColor: "white",
      mixBlendMode: "difference",
    })
  })


  e.addEventListener("mouseleave", function () {
    gsap.to("#crsr", {
      height: "2vw",
      width: "2vw",
      duration: 0.2,
      backgroundColor: "transparent",
      mixBlendMode: "difference",
    })
  })
}
function cusrFollow(el) {
  document.addEventListener("mousemove", function (e) {
    gsap.to(el, {
      top: e.y,
      left: e.x,
      duration: 0.5,

    })
  })
}
function magnet(e) {
  Shery.makeMagnet(e, {});
}
function borderVanisher(e) {
  e.addEventListener("mouseenter", function () {
    gsap.to(e, {
      borderBottom: "10px solid rgba(255 255 255 0)",
      duration: 0.05,

    })
  })

  e.addEventListener("mouseleave", function () {
    gsap.to(e, {
      borderBottom: "10px solid rgb(255 255 255)",
      duration: 0.05
    })
  })
}

function flagFollower() {
  var flag = document.querySelector("#flag-img");
  hero3.addEventListener("mouseenter", function () {
    gsap.to(flag, {
      opacity: 1,
      duration: 0.05
    })
  })

  hero3.addEventListener("mousemove", function (e) {
    gsap.to(flag, {
      top: e.y,
      left: e.x,
      duration: 1,
      ease: "power4",
    })
  })

  hero3.addEventListener("mouseleave", function () {
    gsap.to(flag, {
      opacity: 0,
      duration: 0.05
    })
  })
}

function videoPlayer(){
  var videoContainer = document.querySelector("#videoContainer video");
  var imageContainer = document.querySelector("#videoContainer img");
  
  videoContainer.addEventListener("click", function(e){
    if (videoContainer.paused){
      console.log("Paused");
      videoContainer.play();
      gsap.to(imageContainer, {
        opacity: 0,
        duration: 0.3
      })
    }else{
      console.log("Playing");
      videoContainer.pause();
      gsap.to(imageContainer, {
        opacity: 1,
        duration: 0.3
      })
    }
  })
}

var work_element = document.querySelector("#works")
var about_element = document.querySelector("#about")
var contact_element = document.querySelector("#contacts")
var menu = document.querySelector("#dots");
var obys_logo = document.querySelector("#images svg");
var heroWeb = document.querySelector("#hero3-web");
var heroGraphic = document.querySelector("#hero3-graphic");
var hero1 = document.querySelector("#hero1");
var hero2 = document.querySelector("#hero2");
var hero3 = document.querySelector("#hero3");
var hero4 = document.querySelector("#hero4");
var aboutObys = document.querySelector("#page4 h1");
var aboutObysContent = document.querySelector ("#page4 h3");
var aboutObysContent2 = document.querySelector("#page4 #img-container");

var videoPlayButton = document.querySelector("#playButton");
var videoContainer = document.querySelector("#videoContainer");
videoContainer.addEventListener("mouseenter", function(e){
  console.log("enter");
  makeCrsrBigger(videoContainer, 10);
  gsap.to(videoPlayButton, {
    opacity: 0,
    duration: 0.3
  })
})
videoContainer.addEventListener("mouseleave", function(e){
  console.log("exit");
  gsap.to(videoPlayButton, {
    opacity: 1,
    duration: 0.3
  })
})



loader();
cusrFollow(document.querySelector("#crsr"));
makeCrsrBigger(work_element, 3);
makeCrsrBigger(about_element, 3);
makeCrsrBigger(contact_element, 3);
makeCrsrBigger(menu, 3);
makeCrsrBigger(obys_logo, 3);
makeCrsrBigger(hero1, 6);
makeCrsrBigger(hero2, 6);
makeCrsrBigger(hero4, 6);
makeCrsrBigger(aboutObys, 6);
makeCrsrBigger(aboutObysContent, 6);
makeCrsrBigger(aboutObysContent2, 6);

flagFollower();
videoPlayer();

magnet("#navigation-bar-part2-part2 h3");
magnet("#navigation-bar #dots");
borderVanisher(heroWeb);
borderVanisher(heroGraphic);