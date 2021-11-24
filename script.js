const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "baground",
        start: "top top",
        scrub: 1
    }
});

const elem = gsap.utils.toArray('.parallax').forEach(elem => {
    const depth = elem.dataset.depth;
    const shifting = -(depth * (elem.offsetHeight*1.1));
    tl.to(elem,{
        y:shifting,
        ease: "none"
    },0)
    .to('#overlay',{
        opacity: 0,
        ease: "none"
    },0 )
})