//task1 factorial of a number
let fun=(ir)=>{
var ir=parseInt(document.getElementById("one").value)
var dr=document.getElementsByClassName("one")[0]
    let var1=1
 for(let i=1;i<=ir;i++){
      var1=var1*i
 }
  dr.innerHTML=var1
}

//task 2 max of an array
let arr=[4,3,6,2,8,5,1,9,0,7]
let fun1=(a)=>{
    let max=arr[0]
    for(ele of arr){
        if(ele>max){
            max=ele
        }
    }
    return max
}
console.log(fun1(arr))
//or
console.log(Math.max(...arr))


// task3 function expression
let x=function (a,b) {return a*b}
console.log(x(3,4))

//task4 immediately invoked function expression
let IIFE=(function (a,b) {
    let p=5
    let q=6
    return p*q})();
console.log(IIFE)