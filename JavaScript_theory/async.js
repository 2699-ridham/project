let fs=require("fs");
console.log("before"); //calling 1
fs.readFile("f1.txt",cb); //cb will be called by node js;
//below function is call back function;
function cb(err,data){  //calling 3. //this will run after the whole completon of the code.
    if(err){
        console.log(err);
    }else{
        console.log("content " + data);
    }
}
console.log("after"); // calling 2