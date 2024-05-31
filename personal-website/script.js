function locomotiveAnimations(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

function entryAnimation(){
    const tl = gsap.timeline()

    tl.from("#logo",{
        y:-100,
        delay:0.2,
        duration:0.6
    })
    tl.from(".n-right a",{
        y:-100,
        duration:0.6,
        stagger:0.2
    })
    tl.from(".text h1",{
        x:-150,
        opacity:0
    })
}

function cursorAnimation(){
    const page3 = document.querySelector(".page-3");
    page3.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
          left: dets.x,
          top:dets.y,
          scale:1,
          transform: `translate(-50%,-50%) `
          
        })
    })
    page3.addEventListener("mouseleave",function(dets){
        gsap.to(".cursor",{
          scale:0
        })
    })
}

function gsapAnimation (){
  gsap.to(".n-right a",{
    opacity:0,
    scrollTrigger:{
        trigger:"nav",
        scroller:".main",
        start:"top 0",
        end: "top -5%",
        scrub: 2
    }
})

gsap.to("body , .page-2",{
    background: "white",
    duration:0.4,
    scrollTrigger:{
        trigger:".page-3",
        scroller:".main",
        scrub:2,
        start:"top 40%",
        end: "top 90%",
    }
    
})
}




locomotiveAnimations();
cursorAnimation();
entryAnimation();
gsapAnimation();
