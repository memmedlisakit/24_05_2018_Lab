 
//========================================normal self invoke
// let res01 = (function(){
// 	console.log("self invoke");
// 	return 55;
// })();


//========================================normal self invoke

// let res02 = (function(){
// 		console.log("hello");
// 		return	10;
// }())


//======================================== Boolean NOT self invoke


// let res03 = !function(){
// 	console.log("NOT");
// 	return	true;
// }();


//======================================== NUmmeric self invoke


// let res04  = +function(){
// 	// console.log("numeric");
// 	return 55;
// }();
// console.log(res01+" "+ res02+"  "+res03+"  "+res04)	

 
//========================================normal self invoke with parameter

// (function(str){
// 	alert(str)
// })("helloooooo");
 

//========================================normal self invoke with parameter callback function

// function test(){
// 	alert("declarative")
// };

//  (function(callback){
//  	callback();
//  })(function(){
//  	console.log("testing")
//  })

// let test = "test name"


//======================================== Objects


// let person = {
// 	name:"Anar",
// 	surname:"Abishov",
// 	"hear color": "black",
// 	[test]:"testing",
// 	return:"return",
// 	var :true
// }

// person.job = "web developer";         // add new property

// delete person["hear color"];          //  delete property

// console.log(person.name);
// console.log(person["hear color"]);

// let key  = prompt();
// alert(person[key]);



//======================================== Object clone
 




// let phone = {
// 	"model":"samsung",
// 	"marka":"s5"
// }


// let cloneObj = Object.assign({}, phone);

// console.log(phone)
// console.log(cloneObj)


// let test ={
// 	name:"test",
// 	surname:"testov",
// }
 
//  for(var key in test){
//  	console.log(test[key])
//  }



 

// let newObj = {
// 	"name":"new object",
// 	"surname":"objectiv",
// 	"birth date":1985,
// 	// getFullInfo:function(){
// 	// 	console.log(`${this["name"]} ${this.surname} ${this["birth date"]}`);
// 	// },
// 	// getAge:function(){
// 	// 	alert(2018 - this["birth date"])
// 	// },
// 	// setName:function(_name){
// 	// 	this.name = _name;
// 	// 	console.log(this["name"])
// 	// }
// 	getName(){
// 		alert(this.name);
// 	}
// }
// // newObj.getAge();
// // newObj.test("cxhjgh")

// console.log(newObj);



// let DOM = {
// 	"name": "h1",
// 	"color":"green",
// 	"text":"Hello world",
// 	appendBody(){
// 		let element = document.createElement(this.name);
// 		element.style.color = this.color;
// 		element.innerHTML = this.text;
// 		document.body.appendChild(element);
// 	}
// }


