// var tl = gsap.timeline()

// tl.from(".container .box1", {
//     opacity:0,
//     delay:1,
//     duration:0.60
// })

// tl.from(".container .box2", {
//     opacity:0,
//     duration:0.60
// })
// tl.from(".container .box3", {
//     opacity:0,
//     duration:0.60

// })
// tl.from(".container .box4", {
//     opacity:0,
//     duration:0.60
// })
// tl.from(".container .box5", {
//     opacity:0,
//     duration:0.60
// })
// tl.from(".container .box6", {
//     opacity:0,
//     duration:0.60
// })
// tl.from(".container .box7", {
//     opacity:0,
//     duration:0.60
// })
// tl.from(".container .box8", {
//     opacity:0,
//     duration:0.60
// })

// tl.from(".container .box9", {
//     opacity:0,
//     duration:0.60
// })

// tl.from(".container .box10", {
//     opacity:0,
//     duration:0.60
// })

// tl.from(".container .box11", {
//     opacity:0,
//     duration:0.60
// })

// tl.from(".container .box12", {
//     opacity:0,
//     duration:0.60
// })
// tl.from(".container .box13", {
//     opacity:0,
//     duration:0.60
// })

// tl.from(".container .box14", {
//     opacity:0,
//     duration:0.60
// })

// tl.to(".container", {
//     scale:0.5,
//     duration:1,
//     x:-284,
//     y:-30,
//     scrub:2
// })

// tl.from(".banner", {
//     opacity:0,
//     duration:1,
// })

// tl.from(".text1", {
//     opacity:0,
//     duration:2,
//     Y:-70,
//     scrub:5
// })

// gsap.from(".text2", {
//     opacity:0,
//     duration:0.75,
//     delay:13
// })

// gsap.from(".text3", {
//     opacity:0,
//     duration:0.75,
//     delay:13
// })

// gsap.from(".button-container", {
//     opacity:0,
//     duration:1,
//     delay:13
// })


let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {

    var tl = gsap.timeline()

    tl.from(".container .box1", {
        opacity:0,
        delay:1,
        duration:0.60
    })
    
    tl.from(".container .box2", {
        opacity:0,
        duration:0.60
    })
    tl.from(".container .box3", {
        opacity:0,
        duration:0.60
    
    })
    tl.from(".container .box4", {
        opacity:0,
        duration:0.60
    })
    tl.from(".container .box5", {
        opacity:0,
        duration:0.60
    })
    tl.from(".container .box6", {
        opacity:0,
        duration:0.60
    })
    tl.from(".container .box7", {
        opacity:0,
        duration:0.60
    })
    tl.from(".container .box8", {
        opacity:0,
        duration:0.60
    })
    
    tl.from(".container .box9", {
        opacity:0,
        duration:0.60
    })
    
    tl.from(".container .box10", {
        opacity:0,
        duration:0.60
    })
    
    tl.from(".container .box11", {
        opacity:0,
        duration:0.60
    })
    
    tl.from(".container .box12", {
        opacity:0,
        duration:0.60
    })
    tl.from(".container .box13", {
        opacity:0,
        duration:0.60
    })
    
    tl.from(".container .box14", {
        opacity:0,
        duration:0.60
    })
    
    tl.to(".container", {
        scale:0.3,
        duration:1,
        x:-350,
        y:-100,
        scrub:2
    })
    
    tl.from(".banner", {
        opacity:0,
        duration:1,
    })
    
    tl.from(".text1", {
        opacity:0,
        duration:2,
        Y:-70,
        scrub:5
    })
    
    gsap.from(".text2", {
        opacity:0,
        duration:0.75,
        delay:13
    })
    
    gsap.from(".text3", {
        opacity:0,
        duration:0.75,
        delay:13
    })

    gsap.from(".text4", {
        opacity:0,
        duration:0.75,
        delay:13
    })
    
    gsap.from(".button-container", {
        opacity:0,
        duration:1,
        delay:13
    })
  
  });
