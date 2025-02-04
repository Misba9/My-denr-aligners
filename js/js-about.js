
        
        if(deviceWidth.isLaptop) {
    // if(document.querySelector(".pannel__wrap")) {
    //     let sections = gsap.utils.toArray(".panel");
    //     gsap.to(sections, {
    //         xPercent: -100 * (sections.length - 1),
    //         ease: "none",
    //         scrollTrigger: {
    //         trigger: ".pannel__wrap",
    //         pin: true,
    //         scrub: 1,
    //         snap: 1 / (sections.length - 1),
    //         end: () => "+=" + document.querySelector(".pannel__wrap").offsetWidth
    //         }
    //     });
    // }


    MissionHorizontalScroll();
    function MissionHorizontalScroll() {
        let value__secs = gsap.utils.toArray(".our__values");
        let ValuesHorizontalScrollTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".our__values_panel_wrap",
                pin: true,
                start: "0% 0%",
                end: "+=" +
                    (document.querySelector(".our__values_panel_wrap").scrollWidth - window.innerWidth * 2),
                scrub: 1,
                snap: {
                    snapTo: 0.91 / (value__secs.length - 1),
                    duration: 0.1,
                    delay: 0.1,
                    ease: "power1.inOut"
                  },
            }
        });
        
        ValuesHorizontalScrollTL.to(value__secs, {
            xPercent: -100 * (value__secs.length - 1),
            ease: "none"
        }); 
        ValuesHorizontalScrollTL.to({}, {duration: 0.05})
    }




const cursor = document.querySelector(".sec_cursor");
const cursorMedias = document.querySelectorAll(".cursor__media");
const navLinks = document.querySelectorAll(".sec__links");

gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    scale: 0
});

const setCursorX = gsap.quickTo(cursor, "x", {
    duration: 0.6,
    ease: "expo"
});
  
const setCursorY = gsap.quickTo(cursor, "y", {
duration: 0.6,
ease: "expo"
});

window.addEventListener("mousemove", (e) => {
    // setCursorX(e.pageX);
    setCursorY(e.clientY);
});

const tl = gsap.timeline({
    paused: true
});

tl.to(cursor, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "expo.inOut"
});

navLinks.forEach((navLink, i) => {
    navLink.addEventListener("mouseover", () => {
        cursorMedias[i].classList.add("active");
        tl.play()
    })
})

navLinks.forEach((navLink, i) => {
    navLink.addEventListener("mouseout", () => {
      tl.reverse();
      cursorMedias[i].classList.remove("active");
    });
});


gsap.from('.abt_footer_text .word', {
    opacity: 0,
    x: 80,
    duration: 1000,
    ease:'power4.inOut',
    stagger: { amount: 1000 },

    scrollTrigger: {
        trigger: ".abt_footer_text",
        start: "top 100%",
        end: "+=50%",
        scrub:true
    }
})

} // End of isLaptop


// let btt = document.querySelectorAll('[data-type="modal-trigger"]')

const btt = gsap.utils.toArray('[data-type="modal-trigger"]');
// let cds = document.querySelector('.cd-section')

btt.forEach(box => {

let cds = box.closest('.cd-section');

box.addEventListener("click", function(e) {
var offset = $('.scroll__wrap').offset().top;
$('html, body').animate({
    scrollTop: offset
  }, 700); 
box.classList.add('to-circle');
cds.classList.add('modal-is-visible')
document.body.classList.add('overflow-hidden');

let bt = gsap.timeline();
bt.call(btntocircle);
bt.to(box, {scale:40, delay:0.5, ease:'power4.inOut', duration:0.7})
});

function btntocircle() {
    box.classList.add('to-circle');
}

//trigger the animation - close modal window
$('.cd-section .cd-modal-close').on('click', function() {
    document.body.classList.remove('overflow-hidden');
    cds.classList.remove('modal-is-visible')
    let bt = gsap.timeline();
    bt.to(box, {scale:1, ease:'power4.inOut', duration:0.7})
    bt.call(circletoBtn);
});

function circletoBtn() {
    box.classList.remove('to-circle');
}
})

let fadeItem = gsap.utils.toArray(".fade");
fadeItem.forEach(elem => {
    gsap.from(elem, {
        duration:0.3,
        y: 40,
        autoAlpha: 0,
        ease: 'power4.inOut',
        scrollTrigger: {
            scroller:window,
            trigger: elem,
            // toggleActions: "play none reverse none",
            start: "top 80%",
            end: "+=100%",
        }
    })
})


gsap.set('#flags figure', {autoAlpha:0, y:30})
ScrollTrigger.batch("#flags figure", {
    onEnter: batch => gsap.to(batch, {autoAlpha: 1, y:0, stagger: 0.1, ease:'power4.inOut'}),
    start: "top 70%"
});