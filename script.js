var con = document.querySelector(".container");
var img = document.querySelector(".p-img");

img.addEventListener("mouseenter", function() {
    gsap.to(".container",{
        x:"-55%",
        delay:0.1,
        duration:1 
    })
})

img.addEventListener("mouseleave", function() {
    gsap.to(".container",{
        x:"-200%",
        delay:0.1,
        duration:1 
    })
})

