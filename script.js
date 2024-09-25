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
  gsap.to("#crsr", {
    opacity: 1,
    delay: 3.5
  })
}
function makeCrsrBigger(e){
  e.addEventListener("mouseenter",function(){
    gsap.to("#crsr", {
      height: "3vw",
      width: "3vw",
      duration: 0.2,
      backgroundColor: "white",
      mixBlendMode: "difference",
    })
  })
  
  
  e.addEventListener("mouseleave",function(){
    gsap.to("#crsr", {
      height: "2vw",
      width: "2vw",
      duration: 0.2,
      backgroundColor: "transparent",
      mixBlendMode: "difference",
  })})
}
function cusrFollow(){
  document.addEventListener("mousemove", function(e){
    gsap.to("#crsr", {
      top : e.y,
      left: e.x,
      duration: 0.5,
      
    })
  })
}
function magnet(e){
  Shery.makeMagnet(e , {});
}



var work_element = document.querySelector("#works")
var about_element = document.querySelector("#about")
var contact_element = document.querySelector("#contacts")
var menu = document.querySelector("#dots");
var obys_logo = document.querySelector("#images svg");


loader();
cusrFollow();
makeCrsrBigger(work_element);
makeCrsrBigger(about_element);
makeCrsrBigger(contact_element);
makeCrsrBigger(menu);
makeCrsrBigger(obys_logo);
magnet("#navigation-bar-part2-part2 h3")
magnet("#navigation-bar #dots")