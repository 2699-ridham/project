//npm i request -> to install the request;
let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
console.log("before");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
request(url,cb);
function cb(error,response,html){ //backcall function (async);
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
    let searchTool=cheerio.load(html);
    let bowlersTable=searchTool(".table.bowler");
    // console.log(bowlersTable.length);
    let htmldata="";
    for(let i=0;i<bowlersTable.length;i++){
        htmldata += searchTool(bowlersTable[i]).html();
    }
    fs.writeFileSync("table.html",htmldata);
}
console.log("after");