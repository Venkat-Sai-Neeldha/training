//task 1 :declare and initilize variables
let num=10

let str="hi,hello ,how are you"

let bool=true/false

let obj={name:"quest",type:"software"}

let arr=[1,2,"a","b"]


// task 2: arithmetic operations
let a=10,b=20
 //operations
 console.log(a+b)

 console.log(a-b)
 
 console.log(a*b)

 console.log(a/b)
  console.log(a%b)


//task3: greeting message
let ir=document.getElementsByTagName("input")[0]
function myfun(){
    alert(`hello ,welcome ${ir.value}`)
}

  //task 4: type conversion
  let str1="50"
  let num1=100
  let bool1=true
  //num to string
  console.log(parseInt(str1))
  //string to num
  console.log(String(num1))
  //boolean to num
console.log(Number(bool1))

//task 5: area of rectangle
function area(){
let inputref1=document.getElementsByClassName("ip1")[0]
let inputref2=document.getElementsByClassName("ip2")[0]
let dr=document.getElementsByClassName("op")[0]
let val1=parseInt(inputref1.value)
let val2=parseInt(inputref2.value)
  let area=val1*val2
    dr.innerHTML="the area is "+area
}

