
let circle=document.querySelector('#circle');
const btn = document.querySelector('#btn');
var tl=gsap.timeline();

window.addEventListener('mousemove',function(details){
    let xValue=details.clientX;
    let yValue=details.clientY;
    setTimeout(function(){
        circle.style.top=`${yValue}px`;
        circle.style.left=`${xValue}px`;
    },10);
})
btn.addEventListener('click',function(){
    tl.reverse();
})

tl
.from('#wrapper',{
    scale:.5,
    duration:3,
    ease:'Expo.easeInOut',
    opacity:0 
})

.from('#whitestrip',{
    duration:2,
    width:0,
    ease:'Expo.easeInOut',

},'-=2.5')
.from('#blackcard',{
    duration:1.5,
    x:50,
    opacity:0,
    ease:'Expo.easeInOut',

},'-=1')
.from('#line1em',{
    duration:1.5,
    x:50,
    opacity:0,
    ease:'Expo.easeInOut',

},'-=1')
.from('#line1em .line',{
    duration:2.5,
    width:50,
    opacity:0,
    ease:'Expo.easeInOut',

},'-=1')
.from('#blackcard p',{
    duration:1.2,
    y:30,
    opacity:0,
    ease:'Expo.easeInOut',

},'-=2')

.from('#sideem ',{
    duration:2,
    x:30,
    opacity:0,
    ease:'Expo.easeInOut',

},'-=2')