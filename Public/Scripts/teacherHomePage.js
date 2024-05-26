// const mongoose = require('../Module/CounsellingDB');
// const express = require('express');
// const app = express();
// app.get('',(req,resp)=>{

// })
// async function findData(){
//     const data = await mongoose.count();
//     return data;
// }
// const application = document.getElementById('applications');
// let n =findData();
// application.innerHTML = `${n}`;


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


// Nav Bar:

const subMenu = document.getElementById('subMenu');
subMenu.style.display='none';
function toggleMenu(){
    subMenu.style.display='inline'
}
function toggleMenu2(){
    subMenu.style.display='none';
}

//  Gsap Animation :


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