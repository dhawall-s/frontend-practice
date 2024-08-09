// console.log(`hello world`);

// console.log(`I love pizza`);

// console.log(`hello`);

// window.alert(`this is an alert`);

// let fullname="dhawal saini"
// let age=19;
// let student=false; 
 
// document.getElementById("myh1").textContent = "hello";
// document.getElementById("para").textContent = `this is a paragraph`;

// document.getElementById("p1").textContent =`my name is :${fullname}`;
// document.getElementById("p2").textContent =`my ageis :${age}`;
// document.getElementById("p2").textContent =`are you a student : ${student}`;


// let students=30;

// students=students+1;
// students=students-1;
// students=students*2;
// students=students/2;
// students=students**2;
// students=students%2;

// students+=1;
// students-=1;
// students*=2;
// students/=2;
// students**=2;
// students%=2;
// students++;
// students--;

// console.log(students);



// let username;

// username = window.prompt("what is ur name "); 

// console.log(username);


// let username;
// document.getElementById("mysum").onclick = function(){
//     username=document.getElementById("mytext").value;
//     console.log(username);
//     document.getElementById("myh1").textContent=  `hello ${username}`;
// }


// let username;
// document.getElementById("mysum").onclick = function() {
//     username = document.getElementById("mytext").value;
//     console.log(username);
//     document.getElementById("myh1").textContent = `Hello, ${username}`;
// }


// let age =window.prompt("enter ur age");
// age=Number(age);
// age+=1;

// console.log(age);
// console.log(typeof age);



const PI=3.14;
let radius;
let circumference;
let area;

// radius=window.prompt(`enter the radius of a circle`);
// radius=Number(radius);

console.log(circumference);


document.getElementById("mybtn").onclick=function(){
    radius= document.getElementById("rad").value;
    circumference=2 * PI * radius;
    document.getElementById("h3").textContent=`the circumference of  the circle is ${circumference}`;
    
}