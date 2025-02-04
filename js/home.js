
    $('#cursor-static_overlay_container').on('click', function(ev) {
        $('#play-video').css('display', 'none')
        $('#close-video').css('display', 'flex')
        $('html').addClass('reel-play')
        $(this).parent().addClass('style-video')
        $('#video__container__close').css("z-index", "9999").removeClass('pointer-events-none')
        let attr = $(this).children().attr('data-video');
        if( attr === ('youtube') ) {
            $("#dental__reel")[0].src += "?autoplay=1";
            ev.preventDefault();
        } else {
            $("#dental__reel")[0].play()
        }
    })

    const ball = $('.cursor')

    $('#video__container__close').on('mousemove', onMouseMove)

    $('#video__container__close').on("mouseenter", e => {
        ball.addClass('active')
        gsap.to(ball, {scale:1.5, duration:1, autoAlpha:1});
    });

    $('#video__container__close').on("mouseout", e => {
        ball.removeClass('active');
        gsap.to(ball, {scale:1, duration:1, autoAlpha:0});
    });

    function onMouseMove(e) {
        gsap.to('.cursor', {
        x: e.clientX - 15,
        y: e.clientY - 15,
        ease: "power3",
        duration:.6
        })
        gsap.to('.cursor', {
        x: e.clientX - 5,
        y: e.clientY - 7,
        ease: "power3",
        duration:.6
        })
    }

    $('#video__container__close').on('click', function(ev) {
        $('#play-video').css('display', 'flex')
        $('#close-video').css('display', 'none')
        let attr = $('#video__section').children().attr('data-video');
        let src = $('#dental__reel').attr('src');
        $('.video__section').removeClass('style-video')
        $('html').removeClass('reel-play')
        if( attr === ('youtube') ) {
            $("#dental__reel").attr('src', src.replace('?autoplay=1', ''));
        } else {
            setTimeout(() => {
                $("#dental__reel")[0].pause();
                $("#dental__reel")[0].currentTime = 0;
            }, 1500);
        }
        $('#video__container__close').css("z-index", "").addClass('pointer-events-none')
    })


    jQuery(function () {
      $('.s__why_us_content > .s__why_us_content_copy').hide()
      $('.s__why_us_content').on('click', function () {
  
          var $contentCopy = $(this).find('.s__why_us_content_copy');
  
          if (!$contentCopy.is(':visible')) {
              $('.s__why_us_content').removeClass('active').find('.s__why_us_content_copy').slideUp();
  
              $(this).addClass('active').find('.s__why_us_content_copy').slideDown();
          }
          else
              $(this).toggleClass("active").find(".s__why_us_content_copy").slideToggle();
      })
    })


  const slides = document.querySelectorAll("section");
  const container = document.querySelector("#panelWrap");
  let dots = document.querySelector(".dots");
  let toolTips = document.querySelectorAll(".toolTip");
  let oldSlide = 0;
  let activeSlide = 0;
  let navDots = [];
  let dur = 0.6;
  let offsets = [];
  let toolTipAnims = [];
  let ih = window.innerHeight;

  let rig = gsap.matchMedia();
  let ll = gsap.matchMedia();
  let ra = gsap.matchMedia();
  let ee = gsap.matchMedia();
  let mod = gsap.matchMedia();


  // retrievedValue = localStorage.getItem("panelWrapPosition") 
  // if (retrievedValue) {
  //   lastIndex = localStorage.getItem("panelWrapPosition")
  //   console.log(gsap)
  //   gsap.to('#panelWrap', { y: offsets[lastIndex], ease:"power2.inOut", duration:1 }); 
  // } 

if ("ontouchstart" in document.documentElement) {

  // RESPOND BELOW

  ee.add("(min-width: 72rem) and (max-width:85.375rem)", () => {

  let titleAnimMob = gsap.timeline({paused:true})
    titleAnimMob.set(".s__why_us_content_wrap", {autoAlpha:deviceWidth.isLaptop ? 0 : 1})
    titleAnimMob.from('#why_us .al__section__title .al__title_cell', {
      opacity: 0,
      x: 80,
      duration: 0.8,
      ease:'Expo.easeInOut',
      stagger: { amount: 0.2 },
    })
    titleAnimMob.from("#s__why_us_img", {autoAlpha:0.025, scale:0.98, transformOrigin:"left", duration: 0.25})
    titleAnimMob.to(".why__us_title_bg", {y:-300, duration: 0.3})
    titleAnimMob.add('title_Anim')
    titleAnimMob.to(".s__why_us_title", {
      scale:deviceWidth.isDesktop ? 1.3 : deviceWidth.isLaptop ? 1.25 : 1.15, 
      x:-150,
      duration: 0.3}, 'title_Anim')
    titleAnimMob.to(".dentcare_branding", {opacity:0, duration: 0.3 }, 'title_Anim')
    titleAnimMob.to(".s__why_us_title", {scale:.65, 
      y:-10, 
      xPercent: -115, 
      duration: 0.5
    })
      
    titleAnimMob.to(".s__why_us_content_wrap", {autoAlpha:1})
    titleAnimMob.set(".s__why_us_content_wrap", {autoAlpha:0.9, duration:0.5, delay:0.2})

  ScrollTrigger.create({
    trigger: "#why_us",
    start: "top 60%",
    end: "bottom bottom",
    animation:titleAnimMob,
    onEnter:onEnterFunc
  });

    function onEnterFunc() {
      gsap.fromTo("#why__us_img_bg", {yPercent:0}, {yPercent:-60, duration: 0.25})
  
      gsap.fromTo("#why__us_title_bg", {yPercent:0}, {yPercent:-90, duration: 0.4})
    }

})

ra.add("(max-width: 1366px)", () => {

  $(function() {
    let fM = gsap.utils.toArray(".fiM");
    fM.forEach(elem => {
        gsap.from(elem, {
            y: 40,
            autoAlpha: 0,
            duration:0.6,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: elem,
                // toggleActions: "play none reverse none",
                start: "top 100%",
                end: "+=60%",
            }
        })
    })
  
    $('.u_section').each(function(i, el) {
      ScrollTrigger.create({
          trigger: el,
          start: deviceWidth.isHD ? "top 125%" : "top 75%",
          end: "max",
          onEnter: () => $(this).addClass('active__'),
          // onEnterBack: () => $(this).addClass('active__'),
          onLeave: () => $(this).removeClass('active__'),
          // onLeaveBack: () => $(this).removeClass('active__'),
      })
    })

    $(document).on("click",".s__aligner_braces_left", function () {
      $(this).addClass('active')
      e.stopPropagation()
    })

    $(document).on("click", function(e) {
      if ($(e.target).is(".s__aligner_braces_left") === false) {
        $('.s__aligner_braces_left').removeClass("active");
      }
    })
  
    ScrollTrigger.create({
      trigger: "#aligner_mockup",
      start: deviceWidth.isBelowTablet && deviceWidth.isBelowMobile ? "top bottom":"top 72%",
      end: "bottom bottom",
      animation:call__Anim
    });
  
    ScrollTrigger.create({
      trigger: "#mobile_mockup",
      start: "top 60%",
      end: "bottom bottom",
      animation:mobileapp
    });
    
  });

  

})

} else {

  ll.add("(min-width: 1024px)", () => {

    newSize();

    document.querySelector("#upArrow").addEventListener("click", slideAnim);
    document.querySelector("#downArrow").addEventListener("click", slideAnim);
  
  // create nev dots and add tooltip listeners

    $('.slide_dots').remove();
    for (let i = 0; i < slides.length; i++) {
      let tl = gsap.timeline({paused:true, reversed:true});
        let newDot = document.createElement("div");
        newDot.className = "slide_dots";
        newDot.index = i;
        navDots.push(newDot); 
        newDot.addEventListener("click", slideAnim);
        newDot.addEventListener("mouseenter", dotHover);
        newDot.addEventListener("mouseleave", dotHover);
        dots.appendChild(newDot);
        offsets.push(-slides[i].offsetTop);
        tl.to(toolTips[i], {opacity:1, ease:Linear.easeNone, duration:0.25});
        toolTipAnims.push(tl);
    }
  
  // get elements positioned
  // gsap.set(".dots", {yPercent:-50});
  gsap.set(".toolTips", {yPercent:-50});
  
  // side screen animation with nav dots
  const dotAnim = gsap.timeline({paused:true});
  dotAnim.to(
    ".slide_dots",
    {
      stagger: { each: 1, yoyo: true, repeat: 1 },
      scale: 1.25,
      filter: "invert(8%) sepia(76%) saturate(7367%) hue-rotate(180deg) brightness(81%) contrast(96%)",
      ease: "power4.inOut"
    },
    0.5
  );
  dotAnim.time(1);
  
  // tooltips hovers
  function dotHover() {
      toolTipAnims[this.index].reversed() ? toolTipAnims[this.index].play() : toolTipAnims[this.index].reverse();
  }
  
   // figure out which of the 4 nav controls called the function
function slideAnim(e) {  
  oldSlide = activeSlide;
  localStorage.setItem("panelWrapPosition", activeSlide);  
    
  // dragging the panels
  if (this.id === "dragger") {
      activeSlide = offsets.indexOf(this.endY);
  } else {
      if (gsap.isTweening(container)) {
          return;
      }
      // up/down arrow clicks
      if (this.id === "downArrow" || this.id === "upArrow") {
          activeSlide = this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
          // click on a dot
      } else if (this.className === "slide_dots") {
          activeSlide = this.index;
          // scrollwheel
      } else {
          activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
      }
  }
  // make sure we're not past the end or beginning slide
  activeSlide = activeSlide < 0 ? 0 : activeSlide;

  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;

  if (oldSlide === activeSlide) {
      return;
  }
  // if we're dragging we don't animate the container
  if (this.id != "dragger") {
      gsap.to(container, {
          y: offsets[activeSlide],
          ease: "power2.inOut",
          onUpdate: tweenDot,
          duration: dur
      });
  }

  // slides animation
  slides.forEach(section => {
      section.classList.remove('active__');
  });
  slides.forEach((element, key) => {
      if (key == activeSlide) {
          $(element).addClass('active__');
      }
  });
  if (activeSlide == 2) {
      call__Anim.restart()
  } else if (activeSlide == 4) {

      gsap.from('.section__certifications_col_1 .s__title .word', {
          opacity: 0,
          x: 80,
          duration: 0.7,
          ease: 'power4.inOut',
          stagger: {
              amount: 0.3
          },
      })

      gsap.from('.section__certifications_col_1 .s__certificate_badge', {
          opacity: 0,
          x: 80,
          duration: 0.7,
          delay: 0.4,
          ease: 'power4.inOut',
      })

      gsap.from('.s__certificate_caption', {
          opacity: 0,
          x: 80,
          duration: 0.7,
          delay: 0.5,
          ease: 'power4.inOut',
      })

      gsap.from('.section__certifications_col_2 .s__title .word', {
          opacity: 0,
          x: 80,
          duration: 0.7,
          ease: 'power4.inOut',
          stagger: {
              amount: 0.3
          },
      })

      gsap.from('.section__certifications_col_2 .s__certificate_badge', {
          opacity: 0,
          x: 80,
          duration: 0.7,
          delay: 0.4,
          ease: 'power4.inOut',
      })

  } else if (activeSlide == 3) {
      three_steps.restart()
  } else if (activeSlide == 5) {
      aligner_braces.restart()
  } else if (activeSlide == 6) {

      titleAnim.restart()

      gsap.fromTo("#why__us_img_bg", {
          yPercent: 0
      }, {
          yPercent: -60,
          duration: 0.25
      })

      gsap.fromTo("#why__us_title_bg", {
          yPercent: 0
      }, {
          yPercent: -90,
          duration: 0.4
      })

  }
  
  else if (activeSlide == 8) {
      news_events.restart()
      gsap.from('#news_events .s__button', {
          opacity: 0,
          x: 20,
          duration: 0.7,
          delay: 0.45,
          ease: 'Expo.easeInOut',
      })
  } 

  else if (activeSlide == 9) {

      mobileapp.restart()

      // gsap.to(".mock_1", { scale:1, rotate:3, opacity:1, delay:0.25 }); 
      // gsap.to(".mock_2", { x: (deviceWidth.isDesktop&&deviceWidth.isLaptop) ? -145 : deviceWidth.isTablet ? -10 : deviceWidth.isTab ? -140 : -80, rotate:0, scale:1, opacity:1, delay:0.25}); 
      // gsap.to(".mock_3", { x: (deviceWidth.isDesktop&&deviceWidth.isLaptop) ? 380 : deviceWidth.isTablet ? 80 : deviceWidth.isTab ? 300 : 180, rotate:0, scale:1, opacity:1, delay:0.25});
  } else if (activeSlide == 10) {
      testimonials.restart()
  } else if (activeSlide == 11) {
      appreciation.restart()
  } else if (activeSlide == 12) {
      letsconnect.restart()
  }

}
  
    gsap.set(".hideMe", {opacity:1});
    window.addEventListener("wheel", slideAnim);
    window.addEventListener("resize", newSize);
    // window.addEventListener("resize", dotLoop);
    
    // resize all panels and refigure draggable snap array
    function newSize() {
      offsets = [];
      ih = window.innerHeight;
      gsap.set("#panelWrap", { height: slides.length * ih });
      gsap.set(slides, { height: ih });
      for (let i = 0; i < slides.length; i++) {
        offsets.push(-slides[i].offsetTop);
      } 
      gsap.set(container, { y: offsets[activeSlide] });
    }
    
    function setCookie(name, value) {
      document.cookie = name + "=" + value + "; path=/";
    }

    // tween the dot animation as the draggable moves
      function tweenDot() {
        gsap.set(dotAnim, {
          time: Math.abs(gsap.getProperty(container, "y") / ih) + 1
        });
      }
  
  
  
  
  // THREE STEPS
  let three_steps = gsap.timeline({paused:true})
  three_steps.add('ts')
  three_steps.from('#three_steps .al__section__subtitle', {autoAlpha:0, x:15, ease:'Expo.easeInOut',delay:0.35}, 'ts')
  three_steps.from('#three_steps .al__section__title .word', {
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.2 },
  }, 'ts')
  
  // CERTIFICATIONS
  
  let aligner_braces = gsap.timeline({paused:true,}) 
  const braces_aligner_title = new SplitType('.s__aligner_braces_title', { types: 'chars' })
  aligner_braces.set(["#s__aligner_braces_left_top_container", "#s__aligner_braces_left_bottom_container", "#s__aligner_braces_right_top_container", "#s__aligner_braces_right_bottom_container"], {autoAlpha:0});
  aligner_braces.set('.s__aligner_braces_title', {scale:3.345})
  aligner_braces.from(braces_aligner_title.chars, {x:100, autoAlpha:0, stagger: { amount: 0.5 }, delay:0.45, duration: 0.4, onStart: () => {$('.s__aligner_braces_container').addClass('is-inview')}, onComplete: () => {$('.s__aligner_braces_container').removeClass('is-inview')}, onUpdate: () => {$('.s__aligner_braces_container').addClass('is-inview')}, onReverseComplete: () => {$('.s__aligner_braces_container').addClass('is-inview')} })
  aligner_braces.add('vs')
  aligner_braces.from('.s__aligner_braces_vs_container', { scale:4, autoAlpha:0, duration:0.5 }, 'vs' )
  aligner_braces.from('.s__aligner_braces_vs_bg', { autoAlpha:0, rotate:250, duration:0.5 }, 'vs' )
  aligner_braces.to('.s__aligner_braces_title', {
    scale:1, 
    ease:'power4.inOut', 
    duration: 1, 
    delay:0.1, 
    onStart: () => {
        $('.s__aligner_braces_container').addClass('is-inview')
    },
    onReverseComplete: () => {
        $('.s__aligner_braces_container').addClass('is-inview')
    }
  })
  aligner_braces.add('braces')
  aligner_braces.from("#s__aligner_braces_left_top_container", {x:50, autoAlpha:0, duration:0.4}, "braces")
  aligner_braces.from("#s__aligner_braces_left_bottom_container", {x:-50, autoAlpha:0, duration:0.4}, "braces")
  aligner_braces.from("#s__aligner_braces_right_top_container", {x:50, autoAlpha:0, duration:0.4}, "braces")
  aligner_braces.from("#s__aligner_braces_right_bottom_container", {x:-50, autoAlpha:0, duration:0.4},  "braces")
  aligner_braces.from({}, {onReverseComplete: () => {$('.s__aligner_braces_container').addClass('is-inview')}, onComplete: () => {$('.s__aligner_braces_container').removeClass('is-inview')}})

  // WHY US

  let titleAnim = gsap.timeline({paused:true})
  // titleAnim.set(".s__why_us_content_wrap", {autoAlpha:deviceWidth.isLaptop ? 0 : 1})
  titleAnim.set(".s__why_us_content", {autoAlpha:0, y:20})
  titleAnim.from('#why_us .al__section__title .al__title_cell', {
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.2 },
  })
  titleAnim.from("#s__why_us_img", {autoAlpha:0.025, scale:0.98, transformOrigin:"left", duration: 0.25})
  titleAnim.to(".why__us_title_bg", {y:-300, duration: 0.3})
  titleAnim.add('title_Anim')
  titleAnim.to(".s__why_us_title", {scale:deviceWidth.isDesktop ? 1.3 : deviceWidth.isLaptop ? 1.25 : 1.15, x:-150, duration: 0.3}, 'title_Anim')
  titleAnim.to(".dentcare_branding", {opacity:0, duration: 0.3 }, 'title_Anim')
  titleAnim.to(".s__why_us_title", {scale:.65, y:-10, 
    xPercent: deviceWidth.isAboveDesktop ? -150 : deviceWidth.isHdPlus ? -138 : deviceWidth.isDesktop ? -125 : deviceWidth.isLaptopX ? -118 : deviceWidth.isAboveTablet ? -100 : '', 
    duration: 0.5
  })

//   ScrollTrigger.batch(".news_list .n_events_item", {
//     onEnter: batch => gsap.from(batch, {autoAlpha: 0, y:40, stagger: 0.1, duration:0.6, ease:'power3.inOut'}),
// });
    
  // titleAnim.to(".s__why_us_content_wrap", {autoAlpha:1})
  // titleAnim.set(".s__why_us_content_wrap", {autoAlpha:0.9, duration:0.5, delay:0.2})
  titleAnim.to(".s__why_us_content", {autoAlpha:1, y:0, duration:0.7, stagger:0.1})

  // NEWS EVENTS
  
  let news_events = gsap.timeline({paused:true})
  news_events.add('ne')
  news_events.from('#news_events .al__section__title .al__title_cell', {
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.2 },
  }, 'ne')
  news_events.from('#news_events .ne__cell .carousel__card_inner', {
    opacity: 0,
    duration: 0.8,
    delay:0.25,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.25 },
  }, 'ne')
  news_events.from('#news_events .ne__cell .card__description', {
    opacity: 0,
    y:10,
    duration: 0.8,
    delay:0.35,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.25 },
  }, 'ne')
  news_events.from('#news_events .ne__block_text', {
    opacity: 0,
    x:20,
    duration: 0.7,
    delay:0.45,
    ease:'Expo.easeInOut',
  }, 'ne')
  
  // TESTIMONIALS
  
  let testimonials = gsap.timeline({paused:true})
  
  testimonials.add('do')
  
  testimonials.from('#testimonial .al__section__title .word', {
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.2 },
  }, 'do')
  testimonials.from('#testimonial .al__section__subtitle', {autoAlpha:0, y:15, ease:'Expo.easeInOut',delay:0.35}, 'do')
  
  // APPRECIATION
  
  let appreciation = gsap.timeline({paused:true})
  
  appreciation.add('dl')
  appreciation.from('#appreciation .al__section__title .word', {
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.2 },
  }, 'dl')
  appreciation.from('.logo-carousel .carousel-cell', {autoAlpha:0, y:30, delay:0.4, stagger: 0.1, }, 'dl')
  
  // APPRECIATION
  
  let letsconnect = gsap.timeline({paused:true})
  
  letsconnect.add('lc')
  letsconnect.from('#lets_connect .al__section__title .al__title_cell', {
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.1 },
  }, 'lc')
  letsconnect.from('#lets_connect .form-inner', {autoAlpha:0, y:30, delay:0.4, stagger: 0.1, }, 'lc')
  letsconnect.from('#lets_connect .al_1', {autoAlpha:0, y:30, delay:0.5 }, 'lc')
  letsconnect.from('#lets_connect .al_2', {autoAlpha:0, y:30, delay:0.6 }, 'lc')
  
  }) //END DESKTOP ANIMATION
}

  // START TABLET ANIMATION
  // rig.add("(max-width: rem)", () => {

  // })

  // STEPS
  $( document ).on('click',".__threeStepsInner", function(e) {
    e.preventDefault(); 
     let index = $(this).data('index');
    //  let colContent = '.col_content_'+index;  
    // const text = new SplitType(colContent, { types: 'lines' })  

    $(this).parent().toggleClass('active')
    $('.s3_col_wrap').not(':eq(' + index + ')').removeClass('active');
    if($('html').hasClass('is-loaded')) {
        $('html').removeClass().addClass('is-loaded');
    }else{
        $('html').removeClass();
    } 
    $('html').addClass('s3_col_active s3_col_'+$(this).index()+'_active') 
      // gsap.from(text.lines, {
      //   opacity: 0,
      //   y: 20,
      //   duration: 0.5,
      //   delay: deviceWidth.isLaptop ? 0.85 : 0.1,
      //   stagger: { amount: 0.6 },
      // }) 

  })
  
  $( document ).on('click',".s3_close", function() {
    $('.s3_col_wrap').removeClass('active')
    if($('html').hasClass('is-loaded')){
        $('html').removeClass().addClass('is-loaded');
    }else{
        $('html').removeClass();
    }  
  })

// })

// CALL OUT ANIMATION
gsap.set('#call_aligner_1', {autoAlpha:0})
gsap.set('.s__button_wrapper', {autoAlpha:0, y:6}) 
gsap.set('.dc__box .dc__box_1', {
  y: (deviceWidth.isAboveDesktop ? 700 : (deviceWidth.isDesktop||deviceWidth.isLaptop) ? 550: 450), 
  x: deviceWidth.isBelowTablet && (deviceWidth.isBelowMobile ? 70:210)
})
gsap.set('.dc__box .dc__box_2', {y: deviceWidth.isAboveDesktop ? 700 : (deviceWidth.isDesktop||deviceWidth.isLaptop) ? 600 : 550})
gsap.set('.dc__box .dc__box_3', {autoAlpha:0, xPercent: deviceWidth.isBelowTablet && -50})


let call__Anim = gsap.timeline({paused:true})
call__Anim.fromTo("#call_aligner_1", {scale:1, rotate:20, autoAlpha:0, ease: "Power2.easeOut"}, {scale:0.9, rotate:0, autoAlpha:1, duration: 0.5, delay:1 })
call__Anim.to(".s__button_wrapper", {y:0, autoAlpha:1, duration: 0.3, delay:0.3},'1')
call__Anim.to("#call_aligner_1", {autoAlpha:0, delay:0.3, y:-30, ease: "Power2.easeOut"})
call__Anim.to('.dc__box .dc__box_1', {
  y:10, 
  delay:0.3,
  x: deviceWidth.isBelowTablet && (deviceWidth.isBelowMobile ? 70:210), 
  duration:1.5, rotate:-20, ease:'back.inOut(1.5)'
},'1')
call__Anim.add('nx')
call__Anim.to('.dc__box .dc__box_1', {x: (deviceWidth.isDesktop||deviceWidth.isLaptop) ? -250 : deviceWidth.isTablet ? -80 : deviceWidth.isTab ? -150 : -100 ,y:10, duration:0.5, rotate:-50, ease:'back.inOut(2)'}, 'nx')
call__Anim.fromTo(".dc__box .dc__box_3", {scale:1, rotate:20, autoAlpha:0, ease: "Power2.easeOut"}, {scale:(deviceWidth.isDesktop||deviceWidth.isLaptop) ? 1.5 : deviceWidth.isTablet ? 1.38 : 1.2, rotate:-5, autoAlpha:1, duration: 0.5, delay:0.05}, 'nx')
call__Anim.to('.dc__box .dc__box_2', {
  x:(deviceWidth.isDesktop || deviceWidth.isLaptop) ? 250 : (deviceWidth.isTablet ? 370 : 130),
  y:10, duration:0.5, 
  delay:0.15, 
  rotate:(deviceWidth.isDesktop||deviceWidth.isLaptop) ? -20 : deviceWidth.isTablet ? 30 : 40, ease:'back.out(2)'}, 'nx')
call__Anim.to({}, {duration: 0.5})

// call__Anim.to({}, {duration: 0.2})
// call__Anim.to('.call__out__title', {duration:0.7, opacity:0.2}, 'nx')
call__Anim.add('xx')
call__Anim.to('.call__out__title', {duration:0.5, delay:1, opacity:1}, 'xx')
// call__Anim.to('.dc__box .dc__box_1', {x:-250,y:-650, duration:1.5, delay:1, rotate:-50, ease:'back.inOut(2)'}, 'xx')
// call__Anim.to(".dc__box .dc__box_3", {x:-50,y:-650, duration:1.5, delay:1.1,rotate:-50, ease:'back.inOut(2)'}, 'xx')
// call__Anim.to('.dc__box .dc__box_2', {x:250,y:-650, duration:1.5, delay:1.5, rotate:-20, ease:'back.out(1.5)'}, 'xx')


// MOBILE APP
let mobileapp = gsap.timeline({paused:true})
mobileapp.set('.mobile__app_container .mock_1', {scale:0.698, xPercent:-50, left:'50%'})
mobileapp.set('.mobile__app_container .mock_2', {xPercent:-50, left:'50%', 
x: (deviceWidth.isDesktop||deviceWidth.isLaptop) ? -60 : deviceWidth.isTablet ? -70 : -30,
y:50, 
rotate:9, scale:0.9, opacity:0.7})
mobileapp.set('.mobile__app_container .mock_3', {
  xPercent:(deviceWidth.isDesktop||deviceWidth.isLaptop) ? -30 : -10,
  x: (deviceWidth.isDesktop||deviceWidth.isLaptop) ? 280 : deviceWidth.isTablet ? 290 : 150, 
  y:50, rotate:-9, scale:0.9, opacity:0.7})

mobileapp.add('app')
mobileapp.from('.mobile__app_container_title .word', {
    opacity: 0,
    x: 80,
    duration: 0.8,
    ease:'Expo.easeInOut',
    stagger: { amount: 0.2 },
    onComplete: () => { $('.mobile__app_container').addClass('is-inview') },
}, 'app')
mobileapp.from('#mobile_mockup .al__section__subtitle', {autoAlpha:0, y:15, ease:'Expo.easeInOut',delay:0.35}, 'app')
mobileapp.from('#mobile_mockup .app-button', {autoAlpha:0, x:30, delay:0.25, stagger: 0.1, ease:'power4.inOut' }, 'app')

  // ---- Mobile App Section ----//
  mobileapp.to(".mock_1", { scale:1, rotate:3, opacity:1, delay:0.45
  }, 'app'); 
  mobileapp.to(".mock_2", { 
    x: (deviceWidth.isDesktop||deviceWidth.isLaptop) ? -145 : deviceWidth.isTablet ? -140 : -80, rotate:0, scale:1, opacity:1, delay:0.45
  }, 'app'); 
  mobileapp.to(".mock_3", { 
    x: (deviceWidth.isDesktop||deviceWidth.isLaptopX) ? 380 : deviceWidth.isLaptopX ? 320 : deviceWidth.isTablet ? 340 : 180, 
    rotate:0, scale:1, opacity:1, delay:0.45
  }, 'app');

// gsap.set(".logo-carousel .carousel-cell", {y: 100, autoAlpha:0});

  // NEWS EVENTS
  $('.data-news-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      autoPlay:false,
      percentPosition: true,
      pageDots:false
  });


  // TESTIMONIAL
  $('.testimonial__carousel').flickity({
      cellAlign: 'center',
      contain: true,
      autoPlay:false,
      fade: true,
      wrapAround: true,
      pageDots:false
  });