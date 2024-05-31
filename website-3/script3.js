var tl = gsap.timeline();

tl.from(".nav h3, .nav h4, .nav a", {
    y: -80,
    duration: 0.8,
    delay: 0.3,
    stagger: "0.3",
    opacity: 0
})
tl.from(".left h1", {
    x: -400,
    duration: 0.5,
    opacity: 0,
    stagger: "0.4"

})
tl.from(".right img", {
    scale: 0.6,
    opacity: 0,
    duration: 0.5

})
gsap.from(".page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: false,
        scrub: 2,
        start: "top 90%",
        end: "top 45%",
    }
})