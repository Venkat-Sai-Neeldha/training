//task 1 :even or odd
let num=3
if(num%2==0){
    console.log(num +" is even")
}
else{
    console.log(num +" is odd")
}


// task2 :multiplication table
let num1=5
for(let i=1;i<=10;i++){
    console.log(num1+" X "+i+" = "+num1*i)
}
//task 3: switch case: day of the weekend
let daynumber=4
switch(daynumber){
    case 0:
        console.log("sunday")
        break
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    default:console.log("invalid input")
}

//Task 4: sum of first 10 natural numbers
let sum=0
for(let i=1;i<=10;i++){
    sum=sum+i
}
console.log(sum)

// task5:reverse a string using loop
let str="hello"
let revstr=""
for(let i=str.length-1;i>=0;i--){
revstr+=str[i]
}
console.log(revstr)