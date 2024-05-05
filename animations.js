gsap.registerPlugin(ScrollTrigger);

let heroTimeline = gsap.timeline({
    defaults:{
        opacity: 0,
    }
}).fromTo(".frontend", {y:-200}, {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "linear",
    
}).fromTo(".roadmap", { width:"0%"}, {
    // y: 0,
    // x: 0,
    opacity: 1,
    duration: 1,
    ease: "linear",
    width: "100%"
    
})

gsap.to(".frontend", {
    
})

const titles = gsap.utils.toArray(".title")

titles.forEach(title => {
    gsap.fromTo(title, {opacity: 0, x: -100}, {
        opacity: 1,
        duration: 1,
        ease: "linear",
        scrollTrigger: title,
        start: 300,
        x: 0,
        
    })
})

const steps = gsap.utils.toArray(".step")

steps.forEach(step => {
    gsap.fromTo(step, {opacity: 0, y:200}, {
        opacity: 1,
        duration: 1,
        ease: "linear",
        scrollTrigger: step,
        // start: 100,
        y: 0,
        
    })
})