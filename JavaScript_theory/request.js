//npm i request -> to install the request;
let request=require("request");
let cheerio=require("cheerio");
console.log("before");
request('https://www.npmjs.com/package/cheerio',cb);
function cb(error,response,html){ //backcall function
    if(error){
        console.log(error);
    }else if(response.statusCode == 404){
        console.log("page not found");
    }else{
        // console.log(html);
        dataExtracter(html);
    }
}
function dataExtracter(html){
    let searchTool=cheerio.load(html); //search tool
    let elemRep=searchTool("#readme>h1"); // css selector
    let moduleName=elemRep.text().trim(); //text
    console.log("moduleName",moduleName);
}
console.log("after");