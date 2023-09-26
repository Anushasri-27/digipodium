//basic operation
let L = 24;
let B = 5;
let z=L*B;
console.log("area of rectangle", z);

console.log("***************************************************");

//if-statement
let age=20;
if(age>=18){
    console.log("you are an adult");
}

console.log("***************************************************");

//if-else

if(age>=18){
    console.log("you can drive");
}else{
    console.log("sorry you cannot drive");
}

console.log("***************************************************");
//if-else-if

let marks = 50;
if(marks === 50){
    console.log("just passed");
}else if (marks>50){
    console.log("first division");
} else{
    console.log("failded");
}

console.log("***************************************************");

//ternary operator ?:

let age2=10;
let result= (age2>=18) ? "you can vote" : "not elligible";
console.log(result);

//even odd
console.log("***************************************************");

console.log("find number is even or odd ");

let num=31;

let evnOrNot = (num%2==0)? "even" :" odd";

console.log(num +" is " + evnOrNot );


console.log("***************************************************");

// wap to fing largest number out of three

let n1= 5;
let n2=3;
let n3=4;

if(n1>n2){
   
    let r = (n1>n3)? "n1 is greater" : "n3 is greater";
    console.log(r);

}else{
    let r = (n2>n3)? "n2 is greater" : "n3 is greater";
    console.log(r);
}