const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-swithcer").classList.toggle("open");
})

window.addEventListener("scroll", () => {
  if(document.querySelector(".style-swithcer").classList.contains("open"))
  {
    document.querySelector(".style-swithcer").classList.remove("open")
  }
})


const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title"))
    {
      style.removeAttribute("disabled");
    }
    else
    {
      style.setAttribute("disabled", "true");
    }
  })
}




const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark")

})

window.addEventListener("load", () => {
  if(document.body.classList.contains("dark"))
  {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
  else 
  {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})




var typed = new Typed(".typing", {
  Strings:["","web dev", "web design", "design"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})
