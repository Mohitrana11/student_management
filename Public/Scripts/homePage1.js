// Circle:
const circle = document.getElementById('circle');
window.addEventListener('mousemove',(details)=>{
    const xValue = details.pageX;
    const yValue = details.pageY;
    setTimeout(()=>{
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    },50);
})
const clickBtn =document.getElementById('clickbtn');
const submenu = document.querySelector('.submenu');
clickBtn.addEventListener('click',(e)=>{
    submenu.style.display ='block';
})

gsap.from('.img1',{
    delay:0.4,
    opacity:0,
    duration:2,
    y:60,
})
gsap.from('.img2',{
    delay:0.2,
    opacity:0,
    duration:2,
    y:-60,
})
gsap.from('.img3',{
    delay:0.4,
    opacity:0,
    duration:2,
    x:60,
})
