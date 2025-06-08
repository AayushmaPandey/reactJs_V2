const potentialMatch = [
  {
    id: 1,
    Fname: "Aayushma",
    Lname: "Pandey",
    age: 25,
    gender: "female",
    maritalStatus: "single",
    location: {
      permanentLocation: { city: "ktm", country: "Nepal" },
      currentLocation: { city: "Sydney", country: "USA" },
    },
  },
  {
    id: 2,
    Fname: "Amir",
    Lname: "Pandey",
    age: 24,
    gender: "male",
    maritalStatus: "single",
    location: {
      permanentLocation: { city: "ktm", country: "Nepal" },
      currentLocation: { city: "Texas", country: "USA" },
    },
  },
  {
    id: 3,
    Fname: "sumit",
    Lname: "oli",
    age: 22,
    gender: "male",
    maritalStatus: "married",
    partnerName: "sushmita",
    location: {
      permanentLocation: { city: "delhi", country: "India" },
      currentLocation: { city: "bangalore", country: "India" },
    },
  },
];
const shadiResponse = {
  status: 200,
  message: "potential match fetched successfully",
  data: potentialMatch,
};
// const getPotentialMatch = () => {
//     if(shadiResponse.status ===200){
//         let match=[]
//         shadiResponse.data.forEach((person))= > {
//             if(person.maritalStatus === "single" && person.age >=18 && person.location.currentLocation.city === "Sydney"){
//                 match.push({
//                     id:person.id,
//                     name :  ${person.Fname} ${person.Lname},
//                     age : person.age,

//                 })
//             }
//         }
//     }

// }
// const getPotentialMatch = () => {
//     if (shadiResponse.status === 200) {
//         let match = [];
//         shadiResponse.data.forEach((person) => {
//             if (
//                 person.maritalStatus === "single" &&
//                 person.age >= 18 &&
//                 person.gender === "female" &&
//                 person.location.currentLocation.city === "Sydney"
//             ) {
//                 match.push({
//                     id: person.id,
//                     name: `${person.Fname} ${person.Lname}`,
//                     age: person.age,
//                 });
//             }
//         });
//         return match;
//     }
// };
// console.log(getPotentialMatch());



const getPotentialMatch = () => {
  if (shadiResponse.status === 200) {
    shadiResponse.data.map((candidate) => {
      const { gender, age, maritalStatus, location } = candidate;
      const Myrequirements =
        (gender === "female" && age > 19) || maritalStatus === "single";
      if (Myrequirements) {
        location.currentLocation.country === "USA"
          ? console.log(
              `Potential match found: ${candidate.Fname} ${candidate.Lname}, Age: ${age}, Location: ${location.currentLocation.city}, ${location.currentLocation.country}`
            )
          : console.log("beter luck next time");
      }
    });
  }
};

console.log("new added")

getPotentialMatch();

