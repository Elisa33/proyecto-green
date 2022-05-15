gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
    /* ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        markers: true
    }) */
    ScrollTrigger.matchMedia({
        "min-width:1024px": function () {

            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                markers: true
            })
        }
    });
});
