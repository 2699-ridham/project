// strings 
let a = 10;
let str = "Hello I am a \nstring " + a;
// console.log(str);
// str = 'Hello I am also a \nstring ' + a;
// console.log(str);
// template string it is enclosed inside backtick
let str1 = `Hello_I_am a template string ${a}`;
console.log("Actual str:", str1);
let charAt4 = str1.charAt(4); 
console.log("char At 4", charAt4);
// starting index ,ending-1
let slicedStr = str1.substring(4, 10);
console.log("sliced ",slicedStr);
// // toLowerCase, toUpperCase
// // string -> array of string on the  
// // basis of the delimeter-> array of string
let string='I am a String' + a;
let arrayStr = string.split("a");
console.log("Array of String", arrayStr);
// // get length
// let length=str.length;
// console.log(length);
// let str = "   Hello How Are You  ";
// let trimmedStr = str.trim();
// // console.log(trimmedStr);
// let arrString = trimmedStr.split(" ");
// console.log("arr string", arrString);
// // convert array of string into 
// // a string on the basis of delimieter 
// let ans = arrString.join("+");
// console.log(ans);