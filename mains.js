let fs=require("fs");
let path=require("path");
let inputArr=process.argv.slice(2);
// console.log(inputArr);

//node mains.js trees "directorypath";
//node mains.js organizes "directorypath";
//node mains.js helps;
let types = {
    media: [".mp4", ".mkv"],
    archives: ['.zip', '.7z', '.rar', '.tar', '.gz', '.ar', '.iso', ".xz"],
    documents: ['.docx', '.doc', '.pdf', '.xlsx', '.xls', '.odt', '.ods', '.odp', '.odg', '.odf', '.txt', '.ps', '.tex'],
    app: ['.exe', '.dmg', '.pkg', ".deb"]
}

let command=inputArr[0];
switch(command){
    case "trees":
        treesfn(inputArr[1]);
        break;
    case "organizes":
        organizesfn(inputArr[1]);
        break;
    case "helps":
        helpsfn(inputArr[1]);
        break;
    default:
        console.log("please 🙏 Enter the right input");
        break;
}

function treesfn(dirPath){
    console.log("Tree command implemented for",dirPath);
}

function organizesfn(dirPath){
    // console.log("Organize command implemented for",dirPath);
    //input directory path;
    let directpath;
    if(dirPath == undefined){
        console.log("Please enter the path");
        return;
    }else{
        let doesexist=fs.existsSync(dirPath);
        if(doesexist){
             directpath=path.join(dirPath,"organised_file");
            if(fs.existsSync(directpath) == false){
                fs.mkdirSync(directpath);
            }

        }else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeshelper(dirPath,directpath);
}


function organizeshelper(src,dest){
    let childnames=fs.readdirSync(src);
    // console.log(childern);
    for(let i=0;i<childnames.length;i++){
        let childrenAddress=path.join(src,childnames[i])
        let isfile = fs.lstatSync(childrenAddress).isFile();
        if(isfile){
            // console.log(childnames[i]);
           let category=getcategory(childnames[i]);
        //    console.log(childnames[i],"belongs to -->",category);
            organizedInManner(childrenAddress,dest,category);
        }
    }
}
function getcategory(name){
    let ext=path.extname(name);
    console.log(ext);
    for(let type in types){
        let typeArray=types[type];
        for(let i=0;i<typeArray.length;i++){
            if(ext == typeArray[i]){
                return type;
            }
        }
    }
    return "others";
}
function organizedInManner(srcFilePath,dest,cat){
    let catPath=path.join(dest,cat);
    if(fs.existsSync(catPath) == false){
        fs.mkdirSync(catPath);
    }
    let filePath=path.basename(srcFilePath);
    let destFilePath=path.join(catPath,filePath);
    fs.copyFileSync(srcFilePath,destFilePath);
    console.log(filePath,"copied to",cat);
}

function helpsfn(){
    console.log(`List of all the commands
                    node mains.js trees "directorypath"
                    node mains.js organizes "directorypath"
                    node mains.js helps; 
                `);
}
