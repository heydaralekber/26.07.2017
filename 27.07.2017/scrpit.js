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










