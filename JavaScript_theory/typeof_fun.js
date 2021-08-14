// function fn(param){
//     console.log("param value",param);
// }

// fn(10);
// fn([1,2,3,5]);
// fn("ridham");
let a=[1,2,3,4];
let b=a;
console.log("b", a);
a.pop();
console.log("b",a);
//type of the function
//1.statement function;
// function fn(){
//     console.log("I'm statement function");
// }
// fn(); //statement

//2.function expression
let exp=function fn(){
    console.log("I'm a expression function");
}
exp(); //now the address of the fn() stored in the exp;

//3.IIFE -> immediate invoke funtion expression
(function fun(){
    console.log("I'm the IIFE function");
})();

//4.Arrow function
arrowfn=()=>{
    console.log( "Hello word");
}
arrowfn();