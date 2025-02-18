let dr=document.getElementsByClassName("op")[0]
let ip=document.getElementsByTagName("input")[0]
let fun=()=>{
    let val=parseInt(ip.value)
    if(isNaN(val)==false){
        dr.innerHTML="Number"
    }
    else{
        dr.innerHTML="String"
    }
}

// different ways to create arrays
//type 1
let cars=["tata","suzuki","toyota"]
console.log(cars)
//type 2
let brands=new Array("bmw","volvo","mazda")
console.log(brands)
//type 3
console.log(Array.of("a","b",2,3))


//different ways to create objects
//type1
let obj={name:"venkat","age":23}
console.log(obj)

//type2
let obj1=new Object();
obj1.name="praveen"
obj1.age=22
console.log(obj1)

//type3
const person = {
    firstName: "John",
    lastName: "Doe"
  }
  const man = Object.create(person);
man.firstName = "Peter";

console.log(man)



//different ways to create strings

//type 1
let string1="hello ,how are you"
let string2=new String("welcome to quest k2")


// array methods
let arr=[1,2,3,4,5,6,7,8,9,"a","b","c","d"]
console.log(arr.length)
//to convert to a string
console.log(arr.toString())
//find element at position
console.log(arr[0])
//join to form a string
console.log(arr.join("*"))
//delete elements from last
let popped=arr.pop()
console.log(popped)
//add elements at end
console.log(arr.push("d"))
//to remove elements at beginning
console.log(arr.shift())
//to add elements at beginning
console.log(arr.unshift(1))
let arr2=["a","b","c","d"]
console.log(arr2.concat(arr))
//to get the sub array
console.log(arr2.slice(1,5))
//to delete elements

console.log(arr.splice(1,1))




// logical operators
let value1=10
let value2=20
let value3=30
console.log(value1<value2 && value2<value3)
console.log(value1<value2 || value2>value3)