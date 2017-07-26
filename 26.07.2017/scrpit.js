var a=document.querySelector(".btns1")
var l=document.querySelector(".btns2")
var g=document.querySelector(".btns3")
var p=document.querySelector(".btns4")
var slide1=document.querySelector(".itemslide1")
var slide11=document.querySelector(".itemslide2")
var slide111=document.querySelector(".itemslide3")
var slide1111=document.querySelector(".itemslide4")


a.addEventListener("click", myFunc1)
function myFunc1(){
	slide1.style.display = "block"
	slide11.style.display = "none"
	slide111.style.display = "none"
	slide1111.style.display = "none"
}
l.addEventListener("click", myFunc2)
function myFunc2(){
	slide1.style.display = "none"
	slide11.style.display = "block"
	slide111.style.display = "none"
	slide1111.style.display = "none"
}
g.addEventListener("click", myFunc3)
function myFunc3(){
	slide1.style.display = "none"
	slide11.style.display = "none"
	slide111.style.display = "block"
	slide1111.style.display = "none"
}
p.addEventListener("click", myFunc4)
function myFunc4(){
	slide1.style.display = "none"
	slide11.style.display = "none"
	slide111.style.display = "none"
	slide1111.style.display = "block"
}

var btn1=document.querySelector(".btn1")
var btn2=document.querySelector(".btn2")
var btn3=document.querySelector(".btn3")
var btn4=document.querySelector(".btn4")
var b1=document.querySelector(".parag1")
var b2=document.querySelector(".parag2")
var b3=document.querySelector(".parag3")
var b4=document.querySelector(".parag4")

btn2.addEventListener("click", myFunc6)
function myFunc6(){
	b1.style.left = "0px";
	b2.style.left = "1250px";

}

$("li a").click(function(event){
	event.preventDefault()

	var elem=$("#"+$(this).attr("name"))
$(window).scrollTop(elem.offset().top)
console.log(elem.offset().top)
	
})