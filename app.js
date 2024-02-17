// const movies = [
//     {
//       name: "Spider-Man: Across The Spider-Verse",
//       year: 2023,
//       rate: 8.8,
//       genre: ["Adventure", "Action", "Comedy"],
//       country: ["United States"],
//       isAdult: false,
//     },
//     {
//       name: "The Godfather",
//       year: 1972,
//       rate: 9.2,
//       genre: ["Mafia", "Crime Film", "Drama"],
//       country: ["United States", "Italy"],
//       isAdult: true,
//     },
//     {
//       name: "T-34",
//       year: 2018,
//       rate: 5.9,
//       genre: ["Adventure", "Drama", "War", "Action"],
//       country: ["Russia"],
//       isAdult: true,
//     },
//     {
//       name: "Parasite",
//       year: 2019,
//       rate: 7.5,
//       genre: ["Adventure", "Drama", "War", "Action"],
//       country: ["South Korea"],
//       isAdult: true,
//     },
//     {
//       name: "Titanic",
//       year: 1997,
//       rate: 7.5,
//       genre: ["Adventure", "Drama", "Thriller", "Comedy"],
//       country: ["United States", "England"],
//       isAdult: true,
//     },
//     {
//       name: "Paddington",
//       year: 2014,
//       rate: 4.5,
//       genre: ["Adventure", "Fantasy", "Animation", "Comedy"],
//       country: ["France", "England"],
//       isAdult: false,
//     },
//   ];
// //   movies.filter((movie) =>{
// //     return movie.country.includes("United States")
// //   })


// // reduce








// high order function1
// function getNamesByGrade(students, grade) {
//   let filteredStudents = students.filter(student => student.grade === grade);

  
//   return filteredStudents.map(student => student.name);
// }

// const students = [
//   { name: "Quincy", percent: 96, grade: 5 },
//   { name: "Jason", percent: 84, grade: 4 },
//   { name: "Alexis", percent: 100, grade: 5 },
//   { name: "Sam", percent: 65, grade: 3 },
//   { name: "Katie", percent: 90, grade: 5 },
//   { name: "Anna", percent: 75, grade: 4 },
// ];

// console.log(getNamesByGrade(students, 5));

// highorder function2
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const wordCount = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(wordCount);


// high order function 3
// const inputArray = [1, 2, 3, 4, 5];
// const squaredArray = inputArray.map(number => number * number);
// console.log(squaredArray);


// high order function4
// const inputArray = [1, -4, 12, 0, -3, 29, -150];
// const sumOfPositiveNumbers = inputArray
//   .filter(number => number > 0) 
//   .reduce((acc, number) => acc + number, 0);

// console.log(sumOfPositiveNumbers);


// high order function5
// const inputString = 'George Raymond Richard Martin';

// const initials = inputString
//   .split(' ') 
//   .map(word => word.charAt(0)) 
//   .join('');

// console.log(initials);


// high order function6
// const students = [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
// ];

// students.sort((a, b) => a.age - b.age);

// const youngest = students[0];
// const eldest = students[students.length - 1];

// const ageDifference = eldest.age - youngest.age;

// console.log("Eng yosh o'quvchi:", youngest.name);
// console.log("Eng qari o'quvchi:", eldest.name);
// console.log("Farq:", ageDifference);


// high order function7
// function separateEvenOdd(array) {
//   const evenNumbers = array.filter(num => num % 2 === 0); 
//   const oddNumbers = array.filter(num => num % 2 !== 0); 
//   return [evenNumbers, oddNumbers];
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [even, odd] = separateEvenOdd(numbers);

// console.log("Juft sonlar:", even);
// console.log("Toq sonlar:", odd);


// high order function 8
// function removeDuplicates(array) {
//   return array.reduce((acc, current) => {
//     if (!acc.includes(current)) {
//       acc.push(current);
//     }
//     return acc;
//   }, []);
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 7, 8, 9, 9, 10];
// const result = removeDuplicates(numbers);
// console.log(result);


// high order function9
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];
// products.sort((a, b) => {
//   if (a.price !== b.price) {
//     return a.price - b.price;
//   }
//   if (a.rating !== b.rating) {
//     return b.rating - a.rating;
//   }
//   return b.discount - a.discount;
// });

// console.log(products);



// high order function10
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// products.sort((a, b) => b.rating - a.rating);

// const strongestProduct = products[0];

// console.log("Eng kuchli product:", strongestProduct);



// high order function11
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];


// const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

// console.log("Barcha products narxlari yig'indisi:", totalPrice);

// high order function 12
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const productNames = products.map(product => product.name);

// console.log(productNames);


// high order function13
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];


// const elementWithId5 = products.find(product => product.id === 5);
// const productName = elementWithId5 ? elementWithId5.name : "Element not found";

// console.log("Element name with id 5:", productName);


// high order function15
//let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];


// const elementWithId4 = products.find(product => product.id === 4);
// const productName = elementWithId4 ? elementWithId5.name : "Element not found";

// console.log("Element name with id 4:", productName);