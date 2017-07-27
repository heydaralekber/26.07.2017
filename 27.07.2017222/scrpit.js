var name2 = document.querySelector(".name")
console.log(name2)
var email = document.body.querySelector(".email")
console.log(email)
var phone=document.body.querySelector(".phone")
console.log(phone)
var website=document.body.querySelector(".website")
var message=document.body.querySelector(".message")
name2.addEventListener("click", myFunc5)
function myFunc5(){
name2.style.transition = "all 0.5s ease"
name2.style.borderBottom = "2px solid #53b778"
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #d5d5d5"
}
email.addEventListener("click", myFunc1)
function myFunc1(){
email.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #53b778"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #d5d5d5"
name2.style.borderBottom = "2px solid #d5d5d5"
}
phone.addEventListener("click", myFunc2)
function myFunc2(){
phone.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #53b778"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #d5d5d5"
name2.style.borderBottom = "2px solid #d5d5d5"
}
website.addEventListener("click", myFunc3)
function myFunc3(){
website.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #53b778"
message.style.borderBottom = "2px solid #d5d5d5"
name2.style.borderBottom = "2px solid #d5d5d5"
}
message.addEventListener("click", myFunc4)
function myFunc4(){
message.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #53b778"
name2.style.borderBottom = "2px solid #d5d5d5"
}


var icon1 = document.querySelector(".fa-ravelry")
console.log(icon1)
var icon2 = document.querySelector(".fa-deaf")
console.log(icon2)
var icon3 = document.querySelector(".fa-anchor")
console.log(icon3)
var icon4 = document.querySelector(".fa-area-chart")
console.log(icon4)
var icon5 = document.querySelector(".fa-calculator")
console.log(icon5)
var slide1 = document.querySelector("#slide1")
console.log(slide1)
var slide2 = document.querySelector("#slide2")
console.log(slide1)
var slide3 = document.querySelector("#slide3")
console.log(slide1)
var slide4 = document.querySelector("#slide4")
console.log(slide1)
var slide5 = document.querySelector("#slide5")
console.log(slide1)

icon1.addEventListener("click", myFunc6)
function myFunc6(){
	slide1.style.display = "block"
	slide2.style.display = "none"
	slide3.style.display = "none"
	slide4.style.display = "none"
	slide5.style.display = "none"
}

icon2.addEventListener("click", myFunc7)
function myFunc7(){
	slide1.style.display = "none"
	slide2.style.display = "block"
	slide3.style.display = "none"
	slide4.style.display = "none"
	slide5.style.display = "none"
}

icon3.addEventListener("click", myFunc8)
function myFunc8(){
	slide1.style.display = "none"
	slide2.style.display = "none"
	slide3.style.display = "block"
	slide4.style.display = "none"
	slide5.style.display = "none"
}

icon4.addEventListener("click", myFunc9)
function myFunc9(){
	slide1.style.display = "none"
	slide2.style.display = "none"
	slide3.style.display = "none"
	slide4.style.display = "block"
	slide5.style.display = "none"
}

icon5.addEventListener("click", myFunc10)
function myFunc10(){
	slide1.style.display = "none"
	slide2.style.display = "none"
	slide3.style.display = "none"
	slide4.style.display = "none"
	slide5.style.display = "block"
}