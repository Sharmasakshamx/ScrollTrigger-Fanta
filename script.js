gsap.from(".nav-list h4",{
    y:-40,
    delay:0.5,
    stagger:0.2,
    opacity:0,
})
gsap.from(".nav-link",{
    y:-40,
    opacity:0,
    duration:1
})

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add(
    {
         isDesktop: "(min-width: 551px)",
         isMobile: "(max-width: 768px)"
    },
     (context) => {
    // Destructure variables
    let { isDesktop, isMobile } = context.conditions;

    // Create a timeline
   var tl = gsap.timeline({scrollTrigger:{
       trigger:".title_page",
       scroller:"body",
       start:"50% 45%",
    //    end:"100% 45%",
       scrub:1,
}});


    // Desktop animation
    if (isDesktop) {
     tl.to("#fanta",{
    top:"122%",
    left:"3.5%",
},'orange')

tl.to("#orange_sliced_main",{
   top:"166%",
   left:"22%",
   rotate:"360",
},'orange')

tl.to("#orange_bunch",{
   top:"159%",
   left:"85%",
   width:"15%",
},'orange')

tl.to("#leaf",{
   top:"120%",
   left:"75%",
   width:"15%",
   rotate:"40"
},'orange')

    }

    // Mobile animation
    if (isMobile) {
     tl.to("#fanta",{
    top:"115%",
    left:"2%",
},'orange')

tl.to("#orange_sliced_main",{
   top:"140%",
   left:"45%",
   rotate:"360",
},'orange')

tl.to("#orange_bunch",{
   top:"187%",
   left:"0%",
   width:"35%",
},'orange')

tl.to("#leaf",{
   top:"110%",
   left:"75%",
   width:"35%",
   rotate:"40"
},'orange')

    }

    var tl2 = gsap.timeline({scrollTrigger:{
       trigger:".page3",
       scroller:"body",
       start:"-7% 50%",
       end:"40% 40%",
       scrub:1,
    //    markers:true,
}});

if(isDesktop)
{
//  for tl2

tl2.from("#cola_orange",{
    rotate:"-90",
    top:"-10%",
    left:"-30%",    
},'orange_roll')

tl2.from("#pepsi_orange",{
    rotate:"90",
    top:"-10%",
    right:"-30%",    
}, 'orange_roll')

tl2.from("#pepsi",{
    rotate:"30",
    top:"-2%",
    right:"-10%",    
}, 'orange_roll')

tl2.from("#cola",{
    rotate:"-30",
    top:"-2%",
    left:"-10%",    
}, 'orange_roll')

tl2.to("#fanta",{
    top:"2.5%",
    left:"35%",
    width:"30%"
},'orange_roll')

tl2.to("#orange_sliced_main",{
   top:"204%",
    left:"42.6%",
    width:"14.5%",
    rotate:"90",
},'orange_roll')

}

if(isMobile)
{
// for tl2

tl2.from("#cola_orange",{
    rotate:"-90",
    top:"-10%",
    left:"-30%",    
},'orange_roll')

tl2.from("#pepsi_orange",{
    rotate:"90",
    top:"-10%",
    right:"-30%",    
}, 'orange_roll')

tl2.from("#pepsi",{
    rotate:"30",
    top:"-2%",
    right:"-10%",    
}, 'orange_roll')

tl2.from("#cola",{
    rotate:"-30",
    top:"-2%",
    left:"-10%",    
}, 'orange_roll')

tl2.to("#fanta",{
    top:"234.5%",
    left:"29%",
    width:"42%"
},'orange_roll')

tl2.to("#orange_sliced_main",{
   top:"243%",
    left:"49%",
    width:"14.5%",
    rotate:"90",
},'orange_roll')

}
  }

);

// var tl = gsap.timeline({scrollTrigger:{
//        trigger:".title_page",
//        scroller:"body",
//        start:"50% 45%",
//     //    end:"100% 45%",
//        scrub:1,
// }})

// tl.to("#fanta",{
//     top:"122%",
//     left:"3.5%",
// },'orange')

// tl.to("#orange_sliced_main",{
//    top:"166%",
//    left:"22%",
//    rotate:"360",
// },'orange')

// tl.to("#orange_bunch",{
//    top:"159%",
//    left:"85%",
//    width:"15%",
// },'orange')

// tl.to("#leaf",{
//    top:"120%",
//    left:"75%",
//    width:"15%",
//    rotate:"40"
// },'orange')

// var tl2 = gsap.timeline({scrollTrigger:{
//        trigger:".page3",
//        scroller:"body",
//        start:"-7% 50%",
//        end:"40% 40%",
//        scrub:1,
//     //    markers:true,
// }})

// //  start(-7% 50%) -> this means that first value is for the strt point on trigger page which is page3 here and 2nd value is start point of the body

// tl2.from("#cola_orange",{
//     rotate:"-90",
//     top:"-10%",
//     left:"-30%",    
// },'orange_roll')

// tl2.from("#pepsi_orange",{
//     rotate:"90",
//     top:"-10%",
//     right:"-30%",    
// }, 'orange_roll')

// tl2.from("#pepsi",{
//     rotate:"30",
//     top:"-2%",
//     right:"-10%",    
// }, 'orange_roll')

// tl2.from("#cola",{
//     rotate:"-30",
//     top:"-2%",
//     left:"-10%",    
// }, 'orange_roll')

// tl2.to("#fanta",{
//     top:"2.5%",
//     left:"35%",
//     width:"30%"
// },'orange_roll')

// tl2.to("#orange_sliced_main",{
//    top:"204%",
//     left:"42.6%",
//     width:"14.5%",
//     rotate:"90",
// },'orange_roll')

var tl3 = gsap.timeline({scrollTrigger:{
       trigger:".page3",
       scroller:"body",
       start:"70% 50%",
       end:"110% 40%",
       scrub:1,
    //    markers:true,
}})

tl3.to("#orange_sliced_main",{
    top:"315%",
    left:"4%",
    width:"9%",
    rotate:"360"
})

gsap.to(".page4 #page4-heading",{
 transform:"translate(-78%)",
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"0% ",
        end:"top -100%",    
        scrub:4,
        pin:true,
    }
})

gsap.to("#pg4_leaf",{
    top:"7%",
    left:"58%",
    rotate:"55",
      scrollTrigger:{
        trigger:".page4 #pg4_leaf",
        scroller:"body",
        start:"0% ",
        end:"top -100%",    
        scrub:2,
    }
},'orange_scroll')

gsap.to("#pg4_orange",{
    rotate:"360",
    x:-1100,
    rotate:"55",
      scrollTrigger:{
        trigger:".page4 #pg4_orange",
        scroller:"body",
        start:"0% ",
        end:"top -100%",    
        scrub:2,
    }
},'orange_scroll')


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

