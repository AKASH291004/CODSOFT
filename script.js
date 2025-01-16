function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
function loadinganimation(){
var tl=gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})

tl.from("#timer",{
    opacity:0,
    onStart:function(){
        var count=0;
        var timer=document.querySelector("#timer h5");
            setInterval(() => {
            if(count<=99){
                count++;
                timer.textContent=count;
            }
            }, 30);
    }
})
tl.to(".line h2",{
    opacity:1,
    animationName:"anime"
})
tl.to(".line h1",{
    opacity:0,
    stagger:.2,
    delay:0     //2.7  //this is changed******************
})

// tl.to("#loader",{
//     opacity:0,
//     duration:0.2,
//     delay:0.1
// })

// tl.from("#page1",{
//     y:1200,
//     delay:0.1,
//     // duration:0.5,
//     opacity:0,
//     ease:Power4
// })
tl.to("#loader",{
    display:'none',
    y:-1000,
    delay:0.1,
    // duration:0.5,
    opacity:0,
    ease:Power4
})
tl.from("#nav",{
    opacity:0
})

tl.from(".hero h1,#hero3 h2,#hero3 h3",{
    y:150,
    stagger:0.2
})

}
function cursoranimationandmagnet(){
// Shery.mouseFollower({
//     skew:true,
//     ease:"cubic-beizer(0.23,1,0.320,1)",
//     duration:1,
// });

// MAgnet Effect to the navbar Elements
Shery.makeMagnet("#nav-part2 h4");
Shery.makeMagnet("#menuicon");

/** video Container Animations */
var videocontainer=document.querySelector("#video-container")
var video_div_img=document.querySelector("#video-div-img")
var video=document.querySelector("#video-in-videocontainer");
var videocursor=document.querySelector("#video-crsr");

videocontainer.addEventListener("mouseenter",function(){
    videocontainer.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
            opacity:0
        })
        gsap.to("#video-crsr",{
                    left:dets.x - 500,
                    top:dets.y - 250
                })
    })
})
videocontainer.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
        opacity:1
    })
    gsap.to("#video-crsr",{
        top: "-8%",
        left: "60%"
    })
})

var flag=0;
videocontainer.addEventListener("click",function(){
    
    if(flag===0){
        video.play();
        video.style.opacity=1;
        videocursor.innerHTML= '<i class="ri-pause-line"></i>';
        gsap.to("#video-crsr",{
            scale:0.3
        })
        flag=1;
    }
    else{
        video.pause();
        video.style.opacity=0;
        videocursor.innerHTML= '<i class="ri-play-line"></i>';
        gsap.to("#video-crsr",{
            scale:1,
        })
        flag=0;
    }
})
 
/* Flag Animation*/
var flag=document.querySelector("#flag");

document.addEventListener("mousemove",function(dets){
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:0.7

        })
    })
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
})


}
function SheryAnimations(){
    Shery.imageEffect(".image-divv",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7575832305795315},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.41,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}

cursoranimationandmagnet();
SheryAnimations();
locomotiveanimation();
loadinganimation();
