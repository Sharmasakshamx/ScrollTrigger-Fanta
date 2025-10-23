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

var tl = gsap.timeline({scrollTrigger:{
       trigger:".title_page",
       scroller:"body",
       start:"50% 45%",
    //    end:"100% 45%",
       scrub:1,
}})

tl.to("#fanta",{
    top:"122%",
    left:"3.5%",
},'orange')

tl.to("#orange_sliced_main",{
   top:"166%",
   left:"22%"
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

var tl2 = gsap.timeline({scrollTrigger:{
       trigger:".page3",
       scroller:"body",
       start:"-7% 50%",
       end:"40% 40%",
       scrub:1,
    //    markers:true,
}})

//  start(-7% 50%) -> this means that first value is for the strt point on trigger page which is page3 here and 2nd value is start point of the body

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
    top:"213.5%",
    left:"35%",
    width:"30%"
},'orange_roll')

tl2.to("#orange_sliced_main",{
   top:"204%",
    left:"42.6%",
    width:"14.5%"
},'orange_roll')

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
    width:"9%"
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
