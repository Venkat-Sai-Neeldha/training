let bgcol=document.getElementsByClassName("one")[0]
let ir=document.getElementsByTagName("input")[0]
let list=document.getElementById("two")
let arr=[]
let fun1=()=>{
    bgcol.style.backgroundColor="black"
     bgcol.style.color="white"
     
}
let fun2=()=>{
     bgcol.style.backgroundColor="white"
     bgcol.style.color="black"
   
}
let  fun3=()=>{
      arr.push(ir.value)
      ir.value=""
}
let fun4=()=>{
    str=""
    for(ele of arr){
      str=str+`<li>${ele}</li>`  
    }
    console.log(str)
    list.innerHTML=str
    
}