// //implementation of file/folder
// //directory
// //file -> read/write/update(append)
let fs=require("fs");  //module-> name = fs;
fs.writeFileSync("f1.txt","Hello,My name is Ridham garg");
let content=fs.readFileSync("f1.txt");
console.log("content " + content);
// fs.writeFileSync("abc.txt","I'm good"); //write
// //if doesn't exist create the insert;
// //file exist -> override;


// fs.appendFileSync("abc.txt","hey hello"); //update;
// let a=fs.readFileSync("abc.txt");
// console.log("content " + a);
// fs.unlinkSync("abc.txt");  //remove;
// console.log("file removed");

//create
// fs.mkdirSync("MyDirectory");
// delete
// fs.rmdirSync("MyDirectory");

//for file do exist or not
// let exist=fs.existsSync("file1.js");
// console.log(exist);

fs.unlinkSync("f1.txt");
console.log("removed");
let path=require("path"); //module-> name = path;
// to take input;
let inputArr=process.argv.slice(2);
console.log(inputArr);

let filename=inputArr[0];
let filename2=inputArr[1];
console.log("filename",filename);
console.log("filename2",filename2);
//current path of directory;
let currentpath=process.cwd();
console.log("currentPath",currentpath);
let joinedPath=path.join(currentpath,"abc","def");
console.log(joinedPath);
