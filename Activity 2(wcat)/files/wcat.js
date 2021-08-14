let fs=require("fs");
let path=require("path");

let inputArr=process.argv.slice(2);
// let cmd=inputArr;
let optionARR=[];
let fileARR=[];
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar == "-"){
        optionARR.push(inputArr[i]);
    }else{
        fileARR.push(inputArr[i]);
    }
}
for(let i=0;i<fileARR.length;i++){
    let ans=fs.existsSync(fileARR[i]);
    if(ans == false){
        console.log("File doesn't exist 🙏");
        return;
    }
}

let content="";
for(let i=0;i<fileARR.length;i++){
    content+=fs.readFileSync(fileARR[i]) + "\r\n";
}

let contentArr=content.split("\r\n");
// console.log(contentArr);
// console.log(optionARR);
if(optionARR.length == 0){
    console.log(content);
}else if(optionARR[0] == "-s"){
    fun1();
    if(optionARR[1] == "-n"){
        fun2();
    }else if(optionARR[1] == "-b"){
        fun3();
    }
}else if(optionARR[0] == "-n"){
    fun2();
    if(optionARR.includes("-s")){
        fun1();
    }
}else if(optionARR[0] == "-b"){
    fun3();
    if(optionARR.includes("-s")){
        fun1();
    }
}else if(optionARR[0] == "-n" && optionARR[1] == "-b"){
    fun2();
}else if(optionARR[0] == "-b" && optionARR[1] == "-n"){
    fun3();
}

function fun1(){
    for(let i=1;i<=contentArr.length;i++){
        if(contentArr[i] == "" && contentArr[i - 1] == ""){
            contentArr[i]=null;
        }else if(contentArr[i] == "" && contentArr[i - 1] == null){
            contentArr[i] = null;
        }
    }
    let crrtArr=[];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] !== null){
            crrtArr.push(contentArr[i]);
        }
    }
    console.log(crrtArr.join("\n"));
}

//*************-n ************/
function fun2(){
    let count = 1;
    for(let i=0;i<contentArr.length;i++){
            console.log(count + "." + " "  + contentArr[i]);
            count++;
    }
}

// *********** -b **************
function fun3(){
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] != ""){
            console.log(count + "." + " " + contentArr[i]);
            count++;
        }else{
            console.log();
        }
    }
}


