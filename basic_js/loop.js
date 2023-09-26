//wroking of for , while ,do-while ,swicth and for each

// 1. for loop - n natural number [1-10]

for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// 1. for loop -  print a string n number of times

for (let i = 0; i < 5; i++) {
  console.log("anusha");
}

//while loop

let count = 0;
while (count <= 5) {
  console.log("count:" + count);
  count++;
}

//array->concept

const fruits = ["anusha", "neha ", "sonali", "reena"];

console.log(fruits[2]); //using index number

console.log(fruits.slice(0, 3)); //to print subarray using slice

//array built-in function

console.log(fruits.length); // 1 - length

// push --> add element at the end of array
fruits.push("sachin");
//pop--> remove element from end of array
fruits.pop();
//shift -->remove element at the begining of array
fruits.shift();
//unshift
fruits.unshift("anusha");
//index0f--->return index of element in array
console.log("index of anusha");
const index = fruits.indexOf("anusha");
console.log(index);
console.log("--------------------------------");
//concat-->combine to array-->add second array at the end of first
const boys = ["boyy1", "boys2"];
const newArr = fruits.concat(boys);
console.log(newArr);

//foreach-->execute a provided function on each array element
console.log("--------------------------------");
console.log('printing array element using foreach :')
fruits.forEach((element) => {
    console.log(element); //useing foreach to print
});
console.log("--------------------------------");
const number = [1,2,3,4,5,6,7,8,9,10];
number.forEach((element) =>{
    console.log("square of "+ element+" : " +element*element);
})

console.log("--------------------------------");

//map-->execute a provided function on each array element and return new array
console.log("--------------------------------");
const newNumber = number.map((element)=> element*2);
for(let i in newNumber){
    console.log(newNumber[i])
}
//filter--->create new array of elemnt who passes the condition
const num = [1,2,3,4,5,6,7,8,9,10];
const even = num.filter((ele)=> ele%2==0);
console.log(even)

//object

const obj ={
  "a" :1,
  "b":2,
  "c":3
};

for(let key in obj){
  console.log(key+" "+obj[key]);
}

console.log("------------------------------------------");

console.log("------------------------------------------");

console.log("------------------------------------------");

console.log("------------------------------------------");















