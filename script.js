gsap.from ("#DonJulio", {y:-20, duration: 3, delay: 1, opacity: 0} )
gsap.from ("#steakHouseRestaurant", {y:20, duration: 3, delay: 3, opacity: 0} )

gsap.from("#animationThree", {x:150, delay:1, duration:3, ease: "bounce"})

gsap.to("#animationFour", {
    text: "Menu",
    duration: 2,
    repeat: -1,
    repeatDelay: .7,
    ease: "power1.in",
    yoyo: true,
    delay: 4
})
gsap.to ("#animationFive", {scale: 1.2, delay: 1, duration: 3, repeat: -1, delayRepeat: 0.7})

gsap.from("#steakMenu", {opacity: 0, y: -100, duration: 3, delay:1})
