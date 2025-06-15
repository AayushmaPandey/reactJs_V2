const animalData = [
  {
    animalId: 1,
    name: "dog",
    type: "mammal",
    habitat: "land",
    food: ["meat", "bones"],
    cost: [250, 300],
  },
  {
    animalId: 2,
    name: "cat",
    type: "mammal",
    habitat: "land",
    food: ["fish", "milk", "meat"],
    cost: [150, 200],
  },
  {
    animalId: 5,
    name: "goat",
    type: "mammal",
    habitat: "land",
    food: ["grass", "milk"],
    cost: [150, 200],
  },
  {
    animalId: 3,
    name: "fish",
    type: "aquatic",
    habitat: "water",
    food: ["algae", "insects"],
    cost: [50, 100],
  },
  {
    animalId: 4,
    name: "frog",
    type: "amphibian",
    habitat: "water and land",
    food: ["insects", "small fish"],
    cost: [30, 50],
  },
];

// const animalResponse = {
//   status: 200,
//   message: "animal data fetched successfully",
//   data: animalData,
// };

// const getAnimalfoodCountAndTotalCost = () => {
//   if (animalResponse.status === 200) {
//     const foodCount = {};
//     let totalCost = 0;

//     animalResponse.data.forEach((animal) => {
//       if (animal.name === "dog" || animal.name === "cat") {
//         animal.food.forEach((foodItem) => {
//           foodCount[foodItem] = (foodCount[foodItem] || 0) + 1;
//         });

//         totalCost += animal.cost.reduce((sum, price) => sum + price, 0);
//       }
//     });

//     return {
//       fooditems: foodCount,
//       totalCost: totalCost,
//     };
//   } else {
//     return { message: "Failed to fetch animal data" };
//   }
// };

// const result = getAnimalfoodCountAndTotalCost();
// console.log("result =", result);

const getfoodDetails = () => {
  let foodResult = {};
  let totalCost = 0;

  animalData
    .filter(
      (animal) =>
        animal.type === "mammal" &&
        (animal.name === "dog" || animal.name === "cat")
    )
    .forEach((animal) => {
      animal.food.forEach((food, index) => {
        if (foodResult[food]) {
          foodResult[food] += 1;
        } else {
          foodResult[food] = 1;
        }

        totalCost += animal.cost[index] || 0; // safe cost addition
      });
    });

  return {
    fooditems: foodResult,
    totalCost: totalCost,
  };
};

console.log(getfoodDetails());
