//npm i request -> to install the request;
let request=require("request");
let cheerio=require("cheerio");
console.log("before");
let url="https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-1st-test-1239543/live-cricket-score";
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
    let searchTool=cheerio.load(html); //search tool
    let elementrepArr=searchTool(".match-comment-wrapper .match-comment-long-text");
    // console.log(elementrepArr.length);
    let lbc=searchTool(elementrepArr[0]).text();
    console.log(lbc);
}
console.log("after");