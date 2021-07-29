// let a=10;
// console.log(a);
// let s='I m ridham garg ' + a;
// console.log(s);
// let s1=s.charAt(4);
// console.log(s1);
// let s2=s.substring(4,10); //substring;
// console.log(s2);
// //template string;
// let s3=`I m pursuing the b.tech  ${a}`; //backtik
// console.log(s3);
// let s4=s3.slice(4); //slice;
// console.log(s4);
// let s5=s3.split("t");  //split on the basis of "t";
// console.log(s5);
// let s6=s3.split(" ");  //split on the basis of " ";
// console.log(s6);

// let capital=s3.toUpperCase();   //upper case;
// console.log(capital);

// let length=s3.length;  //length;
// console.log(length);

// // trimimg the string;
// let s7='    My name is Ridham garg    ';
// let trims7=s7.trim();
// console.log(trims7);

// let split_trim=trims7.split(" ");  //spliting of the trim string;
// console.log(split_trim);
// //join the Split_trim string;
// let answer=split_trim.join(" # ");
// console.log(answer);

// to print the max length word of the string;
// let s8='The quick brown fox jumped over the lazy dog';
// let strime=s8.trim();
// let arr=strime.split(" ");
// console.log(arr);

// let s9="";
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length >= s9.length){
//         s9=arr[i];
//     }
// }
// console.log(s9);

// let s10='The quick brown fox jumped over the lazy dog';
// let trim=s10.trim();
// let arr=trim.split(" ");
// // console.log(arr);
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
// }
// console.log(arr.join(" "));

//how to take input;
// let a='2 5978548';
// console.log(typeof a);
// let aSplit=a.split(" ");
// console.log(aSplit);
// let k=aSplit[0];
// let len=aSplit[1].length;
// k=k % len;
// if(k < 0){
//     k = k + len;
// }
// let div=1;
// let mult=1;
// for(let i=0;i<len;i++){
//     if(i < k){
//         div*=10;
//     }else{
//         mult*=10;
//     }
// }
// let q=Math.floor(aSplit[1] / div);
// let r=Math.floor(aSplit[1] % div);

// let rev=r * mult + q;

// console.log(rev);

//ARRAYS

// let arr=[1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.push(6);                       //push
// console.log(arr);
// arr.pop();                         //pop
// console.log(arr);
// arr.unshift(0);                    //unshift
// console.log(arr);
// arr.shift();                       //shift
// console.log(arr);
// let a=arr.slice(2,5);             
// console.log(a);
// let b=arr.splice(2,1);             //slice -> disturb the original Array;
// console.log("revomedElements",b);
// console.log("originalArray",arr);
// let idx=arr.indexOf(2);            //indexOf
// console.log("index",idx);
// let present=arr.includes(10);      //include;
// console.log(present);

// let i=0;
// let j=arr.length - 1;
// while(i < j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;

//     i++;
//     j--;
// }
// console.log("Reverse Of Array=",arr); 
// let reverseArray=arr.reverse();
// console.log(reverseArray);
let fs=require("fs");
let path=require("path");

// let input=process.argv.slice(2);
// let main=input[0];
// let c=process.cwd();
// let mainPath=path.join(c,main);
// fs.mkdirSync(mainPath);
// let takeInput=input.slice(1,4);
// for(let i=0;i<takeInput.length;i++){
//     let ctopic = path.join(mainPath,takeInput[i]);
//     fs.mkdirSync(ctopic);
//     for(let j=1;j<=5;j++){
//         let modulep=path.join(ctopic,'Module' + j);
//         fs.mkdirSync(modulep);
//         let filep=path.join(modulep,"command.md");
//         fs.writeFileSync(filep,"done");

//     }
// }

