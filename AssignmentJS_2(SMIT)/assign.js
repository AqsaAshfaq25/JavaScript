// Q1) Write a function that creates a closure and return a function that can add a specific number to 
// any number passed to it. For Example, if the closure is created with 5, the returned function should 
// add 5 to any number passed to it?

function addNumber() {
    let num = 10;
    // console.log(num);
    return function checkNumber() { 
        num++;
      console.log(num);
    }
  }
  let number = addNumber();
  number();

// Q2) Write a recursive function that searches an array for a specific value. The function should return 
// true if the value is found, and false if it is not. You can assume that the array is not nested.

let arr = [1, 2, 3, 4, 5];
let SearchArr = arr.findIndex(function(val){
    if(val === 1 ){
        return true;
    }else{
        return false;
    }
});
console.log(SearchArr, arr);

// Q3) Write a function that adds a new paragraph element to the bottom of an HTML document. 
// The function should take a string argument that will be used as the text content of the new paragraph element.

document.body.onload = addElement;
function addElement() {
  let tag = document.createElement("p");
  tag.style.backgroundColor = "#000";
  tag.style.color = "#fff";
  tag.style.textAlign = "center";
  tag.style.fontSize = "1.4rem";

  let newContent = document.createTextNode("Hello, Welcome to my first WebPage");

  tag.appendChild(newContent);

  let element = document.getElementById("new");
  element.appendChild(tag);
}

// Q4) Write a function that adds a new list item to an unordered list in an HTML document. 
// The function should take a string argument that will be used as the text content of the new list item.

let listItems = ["Apple", "Mango", "Banana", "Grapes"];

function addList(){

let listBlock = document.getElementById("Unlist");

let unorderdList = document.createElement("ul");

 listItems.forEach(item=>{
    let list = document.createElement("li");
    list.innerHTML = item;
    unorderdList.appendChild(list);
} );
listBlock.appendChild(unorderdList);
}

// Q5) Write a function that changes the background color of an HTML element.The function should take 
// two arguments: the first argument is a reference to the HTML element, and the second argument is a string
//  representing the new background color.

let Para = document.querySelector("#Para");
Para.innerHTML = "<b>'PAKISTAN ZINDABAD'</b>"
Para.style.textAlign = "center";
Para.style.fontSize = "2rem";
Para.style.width = "100%";
Para.style.color = "#000";

setInterval(function(){
    let color1 = Math.round(Math.random() * 10000);
    Para.style.backgroundColor = "#" + color1;
}, 400);


// Q6) Write a function that saves an object to localStorage. The function should take two arguments: the first 
// argument is a string representing the key to use for storing the object, and the second argument is the object 
// to store.

let students = {
    name: "Aqsa",
    rollNo: 2123,
    teacher: "Hassan",
    Subject: "Computer",
}
let stringify = JSON.stringify(students) 
console.log(stringify);
localStorage.setItem("students", stringify); 
// Q7) Write a function that retrieves an object from localStorage. The function should take one argument, 
// which is a string representing the key used to store the object. The function should return the object.

let studentsData = {
    name: "Aqsa",
    rollNo: 2123,
    teacher: "Hassan",
    Subject: "Computer",
}
let Stringify = JSON.stringify(studentsData) 
console.log(stringify);
localStorage.setItem("studentsData", stringify); 

let prevStudents = localStorage.getItem("students");
console.log(prevStudents);

let change = prevStudents ? JSON.parse(prevStudents) : [];
console.log(change);

// Q8) Write a function that takes an object and saves each property to localStorage using the property 
// name as the key and the property value as the value. The function should also retrieve the object from 
// localStorage and return it as a new object.

// let employee = [];
function ProvideStudent(StName, StRollNo, StBoss, StSalary){
    return{
        name: StName,
        rollNo: StRollNo,
        Boss: StBoss,
        Salary: StSalary,
    };
   
}
let Nstudents = [
    ProvideStudent("Aqsa", 256, "Misbah", "Biology"),
    ProvideStudent("Areeba", 257, "Hassan", "Laravel"),
]
console.log(Nstudents);
localStorage.setItem("name", "Aqsa");

