var tl = gsap.timeline();

//------------------------loader---------------------------
function loader(){
    tl.to("#loader", {
        height: "0%",
        ease: Expo.easeInOut,
        duration: 1.5
    })
    tl.to("#loader img", {
        y:-350,
        ease: Expo.easeInOut,
        duration: 1.5
    },"-=1.5")
}
loader();


//---------------------------cursor--------------------
document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor",{
        left:`${dets.x}px`,
        top: `${dets.y}px`,
        ease:Expo.ease,
        duration:0.5
    })
})


//------------------------toggle dark/light-----------------------------
function toggle(){
    flag = 0;
    document.querySelector("#toggle").addEventListener("click", function () {
        if (flag === 0) {
            document.querySelector("#switch").style.left = "55%";
            document.documentElement.style.setProperty("--light", "#000")
            document.documentElement.style.setProperty("--dark", "#fff")
            document.documentElement.style.setProperty("--nav", "#cccccc")
            flag = 1;
        } else {
            document.querySelector("#switch").style.left = "3%";
            document.documentElement.style.setProperty("--light", "#fff")
            document.documentElement.style.setProperty("--dark", "#000")
            document.documentElement.style.setProperty("--nav", "#1f1f1f")
            flag = 0;
        }
    })
    
    document.querySelector("#toggle").addEventListener("mouseenter", function () {
        gsap.to("#cursor",{
            backgroundColor : "transparent",
            border : "thin solid #fff",
            scale : 2.5
        })
    })

    document.querySelector("#toggle").addEventListener("mouseleave", function () {
        gsap.to("#cursor",{
            backgroundColor : "#fff",
            border : "none",
            scale : 1
        })
    })
}
toggle();


//----------------------fixpage h1 anim---------------------
tl.from("#fixedpage h1",{
    opacity:0,
    y:"70px",
    z:"-90px",
    rotateX: "-92deg",
    skewX: "20deg",
    skewY: "-12deg",
    ease:Expo.ease,
    stagger:0.1,
    duration:1
},"-=0.8")

tl.from("#fixedpage p",{
    opacity:0,
    y:50
},"-=1")


//------------------------nav bar-----------------------------------------
function navbar(){
    document.querySelectorAll("#nav span").forEach(function (elem) {
        var clutter = "";
        
        elem.textContent.split("").forEach(function (elem) {
            clutter += `<span>${elem}</span>`
        })
        
        elem.innerHTML = clutter
    })
    
    var time;
    document.querySelector("#nav").addEventListener("mouseenter", function () {
        document.querySelectorAll("#nav span").forEach(function (harh1) {
            gsap.to(harh1.childNodes, {
                stagger: 0.05,
                duration: 0.1,
            y: -17,
            ease: "Expo.easeInOut"
        })
    })
})
document.querySelector("#nav").addEventListener("mouseleave", function () {
    document.querySelectorAll("#nav span").forEach(function (harh1) {
        gsap.to(harh1.childNodes, {
            stagger: -0.1,
            duration: 0.1,
            y: 17,
            ease: "Expo.easeInOut"
        })
    })
})
}
navbar();


//--------------------page1 random images-----------------------
function page1img(){
    var arr1 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf17f2d6b85_Hero-Gif-22-p-800.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db1d1d2d6ba2_Hero-Gif-36.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db13a32d6b88_Hero-Gif-33-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db55242d6b77_Hero-Gif-23-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db01f32d6b72_Hero-Gif-29.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db7a832d6b86_Hero-Gif-20-p-1080.jpeg"];
    var arr2 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db27062d6ba4_Hero-Gif-38-p-500.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db52a22d6b6e_Hero-Gif-15-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db22722d6b81_Hero-Gif-24-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbff42d6ba5_Hero-Gif-39.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db2bd12d6b83_Hero-Gif-25.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db779a2d6b71_Hero-Gif-10-p-1080.jpeg"];
    var arr3 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db9eec2d6b7f_Hero-Gif-5.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65f72d6b82_Hero-Gif-26-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db662c2d6b74_Hero-Gif-31.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbbc112d6ba0_Hero-Gif-34-p-500.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db5b892d6b6a_Hero-Gif-6.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db75e82d6b7d_Hero-Gif-17-p-800.jpeg"];
    var arr4 = ["https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbcbcd2d6b7a_Hero-Gif-21-p-1080.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbdfe62d6b76_Hero-Gif-8-p-500.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3dbf6432d6b75_Hero-Gif-9-p-800.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db37082d6ba3_Hero-Gif-37.jpg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db65ff2d6b8e_WILBURTON-EXTERIOR-FINAL-p-500.jpeg","https://assets.website-files.com/6148d60a98a3dba79b2d6a81/6148d60a98a3db120a2d6b7e_Hero-Gif-16-p-800.jpeg"];


    setTimeout(function(){
        setInterval(function(){
            document.querySelector("#page1 #img1").src = arr1[Math.floor(Math.random()*6)]
            // console.log("a")
        },2000)
    },0)
    
    setTimeout(function(){
        setInterval(function(){
            document.querySelector("#page1 #img2").src = arr2[Math.floor(Math.random()*6)]
            // console.log("b")
        },2000)
    },500)
    
    setTimeout(function(){
        setInterval(function(){
            document.querySelector("#page1 #img3").src = arr3[Math.floor(Math.random()*6)]
            // console.log("c")
        },2000)
    },1000)
    
    setTimeout(function(){
        setInterval(function(){
            document.querySelector("#page1 #img4").src = arr4[Math.floor(Math.random()*6)]
            // console.log("d")
        },2000)
    },1500)
}
page1img();

tl.from("#page1 img",{
    scale:0,
    duration:1
},"-=0.8")


//--------------------------moving video------------------------------------------------------
document.addEventListener("mousemove", function (dets) {
    document.querySelector("#container").style.transform = `translate(${(dets.x) * 0.2}px,${(dets.y) * 0.2}px)`
})


//-------------------all page h1 animation---------------------------
document.querySelectorAll(".page h1").forEach(function(elem){
    gsap.from(elem,{
        scrollTrigger:{
            trigger:elem,
            start:"top 90%"
        },
        opacity:0,
        y:"70px",
        z:"-90px",
        rotateX: "-92deg",
        skewX: "20deg",
        skewY: "-12deg",
        ease:Expo.ease,
        duration:1.5
    })
})


//------------------------------rotating circle-----------------------------------------
function rotatecircle(){
    document.querySelectorAll(".circle").forEach(function(elem) {
        elem.addEventListener("click", function () {
            gsap.to(this,{
                rotateX : "1440deg",
                ease: Linear.EaseOut,
                duration:2,
                // onComplete: function(){
                    //     elem.style.transform = 'rotateX(0deg)'
                    // }
                })
            })
            elem.addEventListener("mouseenter",function(){
                gsap.to("#cursor",{
                    scale:0.4,
                    ease:Expo.ease
                })
            })
            elem.addEventListener("mouseleave",function(){
                gsap.to("#cursor",{
                    scale:1,
                    ease:Expo.ease
                })
            })
        })
        
        gsap.to("#flipping-circles", {
            scrollTrigger: {
                trigger: "#flipping-circles",
                start: "top 100%",
                end: "bootom -30%",
                scrub: 2,
            },
            x: "-50vw",
            ease: Linear.ease
        })
}
rotatecircle();



//---------------------------page7 scroll images effect----------------------------
var t2 = gsap.timeline();
t2.to("#page7",{
    scrollTrigger:{
        trigger:"#page7",
        start:"top 0",
        // end:"bottom 100%",
        pin:true,
        scrub:2
    }
})

t2.to(".same",{
    scrollTrigger:{
        trigger:"#page7",
        start:"top 0",
        // end:"top -100%",
        scrub:2,
        pin:true
    },
    y:"-105%",
    stagger:0.5,
    ease: Linear
})

document.querySelectorAll("#page7 .img").forEach(function(everyimg){   
    gsap.to(everyimg,{
        scrollTrigger:{
            trigger:everyimg,
            start:"top 0",
            scrub:2,
        },
        scale:1.1,
    })
})
    
document.querySelectorAll("#images .img .overlay").forEach(function(elem){
    document.querySelectorAll("#images .img .overlay .text").forEach(function(every){
        every.addEventListener("mouseenter",function(){
            gsap.to(elem,{
                backgroundColor:"#0008"
            })
            gsap.to("#cursor",{
                backgroundColor : "transparent",
                border : "thin solid #fff",
                scale : 2.5
            })
        })
        every.addEventListener("mouseleave",function(){
            gsap.to(elem,{
                backgroundColor:"#0004"
            })
            gsap.to("#cursor",{
                backgroundColor : "#fff",
                border : "none",
                scale : 1
            })
        })
    })
})