// console.log("git practise")
// console.log("feature code")

// const userData = [{
//     name: "aayushma",
//     age: 18,
//     city: "ktm",
//     haspassedOut: false,
//     occupation: "Prime Minister",

// },
// {
//     name: "amir",
//     age: 14,
//     city: "ktm",
//     haspassedOut: false,
//     occupation: "King",

// },
// {
//     name: "rajina",
//     age: 17,
//     city: "ktm",
//     haspassedOut: false,
//     occupation: "Chief Minister",

// }

// ]

// const apiResponse = {
//     statusCode: 200,
//     message: "user data fetched succesfully",
//     data: userData

// }
// const getUserName=()=>{
//     if(apiResponse.statusCode===200){
//        const result= apiResponse.data.map((user)=> user.name)


//     }
// }
// console.log(getUserName())
 

const userData=[ 
    {
    name:"rajina",
    age:18,
    hasPassedOut:false,
    occupation:undefined,
},
{name:"Aayushma",
    age:19,
    hasPassedOut:false,
    occupation:"Prime Minister",
},
{
    name:"Ranjana",
    age:22,
    hasPassedOut:false,
    occupation:"software engineer",
},
{
    name:"Ransir",
    age:23,
    hasPassedOut:false,
    occupation:" engineer",
},
]

const apiResponse={
    statusCode:200,
    message:"message fetched succesfully",
    data:userData,
}

// const getUserNames=()=>{
//     if(apiResponse.statusCode===200){
//         //const result=apiResponse.data.map((user)=> user.name)
//         const result=apiResponse.data
//         .filter((user)=>user.occupation)// keep only those users who have an occupation
//         .map((user)=>({ {
//             name:user.name
//             occupation:user.occupation
//         }))// user represents each object in the userData array
//         return result // return the name property of each user object)
//     }
//     return [] // return the array of names
// }
// console.log(getUserNames())

const getUserNames=()=>{
    if(apiResponse.statusCode===200){
        const result=apiResponse.data
        .filter((user)=> user.age> 21&& user.occupation)
        //.map((user)=> user.name)
        .map((user)=>({
            name: user.name,
            occupation: user.occupation,
            age: user.age,
        }))
        return result 

        }
    return [] 
}
console.log(getUserNames())
