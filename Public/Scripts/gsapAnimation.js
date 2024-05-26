// College Animation! 


const t1 =gsap.timeline();
t1.from('.navbar',{
    opacity:0,
    duration:2,
    delay:1,
    x:-100
}).from('.nav-links a',{
    y:-100,
    ease:'Expo.easeInOut',
    opacity:0,
    duration:2,
},'+=1');


