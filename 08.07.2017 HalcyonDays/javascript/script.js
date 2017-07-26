var h=document.querySelector(".servicesSlider")
var e=document.querySelector(".servicesSlider2")

var prev=document.querySelector(".prev")
var next=document.querySelector(".next")

prev.addEventListener("click", myFunc)
function myFunc(){
	h.style.left = "-680px"
	e.style.left= "-680px"
	prev.style.background = "black"
	next.style.background = "white"
	
}

next.addEventListener("click", myFunc2)
function myFunc2(){
	e.style.left = "680px"
	h.style.left = "0px"
	next.style.background = "black"
	prev.style.background = "white"
	
}

