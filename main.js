let path=require("path");

let helpobj=require("./command/help");
let organizeobj=require("./command/organize");
let treeobj=require("./command/tree");
let inputArr=process.argv.slice(2);
let cmd=inputArr[0];
switch(cmd){
    case "help":
        helpobj.helpfxn();
        break;
    case "organize":
        organizeobj.organizefxn(inputArr[1]);
        break;
    case "tree":
        treeobj.treefxn(inputArr[1]);
        break;
    default:
        console.log("please 🙏 enter the right input");
        break;
}