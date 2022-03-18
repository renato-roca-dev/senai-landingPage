gsap.registerPlugin(ScrollTrigger);
gsap.from(".animate-inicial-txt", {
    duration: 0.7,
    opacity: 0,
    y: -150,
    stagger: 0.4
});

gsap.from(".animate-inicial-image", {
    duration: 0.9,
    opacity: 0,
    x: 250,
})
gsap.from(".animate-artigos-principais", {
    duration: 0.9,
    opacity: 0,
    x: -150,
    delay: 1.2
})
gsap.from(".animate-artigos-aside", {
    duration: 0.9,
    opacity: 0,
    x: 150,
    delay: 1.2
})
gsap.from(".animate-final", {
    scrollTrigger: ".animate-final",
    duration: 0.8,
    opacity: 0,
    y: -200,
    stagger: 0.5,
    delay: 0.5
})