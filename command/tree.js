function treefn(dirPath){
    // console.log("implementation of the tree" + "\n " + dirPath);
    if(dirPath == undefined){
        dirPath=process.cwd();
    }
    console.log("implementation of the tree" + "\n " + dirPath);
}

module.exports={
    treefxn:treefn
}