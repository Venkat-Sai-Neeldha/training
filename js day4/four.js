//task 1 reduce

let arr=[1,2,3,4,5,6,7,8,9]
let sum=arr.reduce((acc,num)=>acc+num,0)
console.log(sum)

//task2 filter even numbers from array
 let arr1=[1,2,3,4,5,6,7,8,9]
 let even=arr1.filter((num)=>num%2==0)
 console.log(even)
 

 // task 3
 book={
    name:"harry potter",
    author:"jk rowling",
    copies:10000,
    available:true
 }
 console.log(book)
 

 // add functions to objects
 methods={
    add:function(a,b){return a+b},
    sub:function(a,b){return a-b},
    mul: function(a,b){return a*b},
    div: function(a,b){return a/b}
 }
 console.log(methods.add(2,3))
 console.log(methods.sub(2,3))
 console.log(methods.mul(2,3))
 console.log(methods.div(2,3))

 // task 5 spread operator destructuring
 let arr2=[1,2,3,4]
 let arr3=[...arr2,5,6,7,8]
 console.log(arr3)
 
 //object
 let obj1={name:"venkat",age:20}
 let obj2={...obj1,ofc:"quest"}
 console.log(obj2)