var tl = gsap.timeline()

tl.from(".nav .left img, .nav h3, .nav button, .nav h4", {
    duration: 1,
    delay: 0.4,
    opacity: 0,
    y: -100,
    stagger: 0.1
})
tl.from(".text-container h1", {
    opacity: 0,
    y: 100,
    stagger: 0.3
})
tl.from(".img-1,.img-2,.img-3,.img-4", {
    scale: 0,
    opacity: 0,
    stagger: 0.2
})
tl.from("h5", {
    opacity: 0,
    scale: 0,
})
tl.to("h5", {
    y: 20,
    repeat: -1,
    duration: 0.7,
    yoyo: true
})
