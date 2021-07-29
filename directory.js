let fs=require("fs");
let path=require("path");
// let inputArr=process.argv.slice(2);
// // console.log(inputArr);
// let mainDir=inputArr[0];
// // let firstModule=inputArr[1];
// // let secondModule=inputArr[2];
// // let thirdModule=inputArr[3];
// let cwd=process.cwd();
// let mainDirPath=path.join(cwd,mainDir);
// // console.log(mainDirPath);
// // let firstModulePath=path.join(mainDirPath,firstModule)
// // let secondModulePath=path.join(mainDirPath,secondModule)
// // let thirdModulePath=path.join(mainDirPath,thirdModule)
// // console.log(mainDir);
// // console.log(firstModulePath);
// // console.log(secondModulePath);
// // console.log(thirdModulePath);
// let isexist=fs.existsSync(mainDirPath);
// // console.log(isexist);
// if(isexist){
//     console.log("Directory is created");
//     return;
// }else{
//     console.log(mainDir," created");
//     fs.mkdirSync(mainDirPath);
//     let topicFromInput=inputArr.slice(1,4);
//     for(let i=0;i<topicFromInput.length;i++){
//         let ctopicPath=path.join(mainDirPath,topicFromInput[i]);
//         console.log(topicFromInput[i]," created");
//         fs.mkdirSync(ctopicPath);
//         for(let j=1;j<=5;j++){
//             let modulePath=path.join(ctopicPath,"Module " + j);
//             fs.mkdirSync(modulePath);
//             console.log("Module" + j ," created inside",topicFromInput[i]);
//             let filepath=path.join(modulePath,"command.md");
//             fs.writeFileSync(filepath,"Sccessfully done");
//         }
//     }
// }


//copy the file.
let srcFilePath="C:\\Users\\Ridham Garg\\OneDrive\\Desktop\\dev plcmnt pgrm\\arrayAdvanced.js";
let destdr="C:\\Users\\Ridham Garg\\OneDrive\\Desktop\\dev plcmnt pgrm\\web dev";
let tobecopiedfile=path.basename(srcFilePath);
let destPath=path.join(destdr,tobecopiedfile);
// console.log(tobecopiedfile);
fs.copyFileSync(srcFilePath,destPath);
console.log("file copied");


