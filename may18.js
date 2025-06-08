//console.log(name)
//var name="tech"

//const arr1=[1,2,3]
//const arr2=[4,5,6]
//const arr3=[...arr1,...arr2]//spread operator
//arr3.push(10)//adds elements 10 to the last
//arr3.pop()//removes the last element
//arr3.shift()//removes the first element
//arr3.unshift(0)//adds 0 to the first element
//console.log(arr3)
//console.log(arr3[1])

// const userData={
//     name:"aayushma",
//     roll:1,
//     isAdmin:false,
//     subjects:undefined,
//     image:undefined,
// }
// //sanitizeData()//hoisting ko concept
// function sanitizeData(){
//     let result={}//khali object banayo
//     for(let key in userData){//userdata ma loop chalayo for in for object
//         if(userData[key]){
//             result={...result,[key]:userData[key]}
//         }
//     }

//     return result
// }
//  console.log(sanitizeData())//filter out the undefined values(only uses truthy values)

const arr=[1,2,3,4,5,6,7,8,9,10]
function filterEvenNum(){
    arr.map((num)=>{
        return( num*2)//returning the value of the loop
        
    })
    return result//returning the value of the function
}
console.log(filterEvenNum())


// const filterEvenNum2=()=>{//having name arrow function
//     console
// }
// ()=>{//having no name arrow function
//     console.log("jhuidgdd")
// }
//console.log(userData.name)
//console.log(1+"1")
//console.log(1 + + "1")
//console.log(1===1)
//console.log(1==1)
//console.log(1==="1")
//console.log(1=="1")
//console.log(typeof Nan)



