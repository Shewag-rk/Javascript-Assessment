// 1. Given an array Arr[] of N integers, write a function to find the sum of the values at the even
// index positions and the odd index positions separately.

// function positionsEvenandOdd(Arr){
//     let addEven = 0;
//     let addOdd = 0;
//     for(i=0; i<Arr.length; i++){
//         if(i % 2 === 0){
//             addEven +=Arr[i];
//         }else{
//             addOdd +=Arr[i];
//         }
//     }
//     return {addEven,addOdd};

// }
// const Arr = [5, 15, 25, 35, 45];
// const result = positionsEvenandOdd(Arr);
// console.log("Sum of even index positions:", result.addEven);
// console.log("Sum of odd index positions:", result.addOdd);


// 2. Given an array of numbers, write a function in JavaScript that removes all the duplicates from
// the array and returns a new array with only the unique values. Ensure that your solution is
// efficient in terms of time complexity. If there are no duplicates, return the array as is

// function removeAllDucplicates(arr){
//   arr.forEach((element, index) => {
//     if (arr.indexOf(element) !== index) {
//       newarry.push(element);
//     }
//   });
// }
// const Arr = [1, 2, 2, 3, 9, 4, 5, 7,9,2];
// let newarry=[];
// const result = removeAllDucplicates(Arr);
// console.log(newarry);


// 3. Given a string, you need to remove only two consecutive duplicates from the
// string(removeConsecutiveDuplicates(str)). If no two consecutive characters are found, return
// the string as it is

// function removeConsecutiveDuplicates(arr){
//   let n =arr.length;
//   if(n<=1)
//     return n;
//   let val=1;
//   for(let i=1; i<n; i++){
//     if(arr[i] !== arr[i-1]){
//       arr[val++]=arr[i];
//     }
//   }
//   return val;
// }
// const arr = "aabccbdddc"
// const result = removeConsecutiveDuplicates(arr);
// console.log(arr.slice(0, result));


// 4. Write a function sortBooleansAndIntegers(arr) that takes an array of booleans, integers
// and sorts the booleans first ( with false before the true), followed by the integers in ascending
// order


// 5. Create a Fitness Tracker Application to manage user details, add user and exercise entries,
// track calories burned, and set fitness goals
// BMI = weight (kg) / [height (cm)/100]2 Hints.

// let fitdetails = [];
// function mainOption() {
//   const subOption = prompt(
//     "Pick an option: \n" +
//       "1.addUser: \n " +
//       "2.displayUsers: \n " +
//       "3.updateUser: \n " +
//       "4.deleteUser:"
//   );
//   switch (subOption) {
//     case "1":
//       addUser();
//       break;
//     case "2":
//       displayUsers();
//       break;
//     case "3":
//       updateUser();
//       break;
//     case "4":
//       deleteUser();
//       break;
//     case "5":
//       console.log("Exiting..");
//       return;
//     default:
//       console.error(" Please give valid input! ");
//   }
//   function addUser() {
//     let id = Math.floor(Math.random() * 10000);
//     let username = prompt(" Enter the username:");
//     if (typeof username !== "string" || username.trim() === "") {
//       console.error("Invalid name(name should not empty string).");
//       return;
//     }
//     let userage = Number(prompt(" Enter the user age:"));
//     if (typeof userage === Number) {
//       if (userage >= 1) {
//         console.error("nvalid age(must be positive number).");
//       }
//       console.error("Invalid age(must be positive number).");
//       return;
//     }
//     let weight = prompt(" Enter the user weight:");
//     let height = prompt(" Enter the user height:");
//     let heightInMeters = height / 100;
//     let heightSquared = heightInMeters * heightInMeters;
//     let bmi = weight / heightSquared;
//     let bmiFormatted = bmi.toFixed(2);
//     const fitnessinfo = {
//       username,
//       userage,
//       weight,
//       height,
//       id,
//       bmiFormatted,
//     };
//     fitdetails.push(fitnessinfo);
//     console.log(
//       " User " +
//         fitnessinfo.username +
//         " added successfully with " +
//         fitnessinfo.bmiFormatted +
//         " Goal:Maintain your current activity and diet."
//     );
//   }
//   mainOption();
//   function displayUsers() {
//     if (fitdetails.length === 0) {
//       console.error(" no details");
//       return;
//     }
//     console.log(" fitness details");
//     fitdetails.forEach((fitness, index) => {
//       console.log(
//         `${index + 1}. , ID:${fitness.id}, Name: ${fitness.username}, Age: ${
//           fitness.userage
//         }, Weight: ${fitness.weight}, Height: ${fitness.height} BMI: ${
//           fitness.bmiFormatted
//         }`
//       );
//     });
//   }
//   function updateUser() {
//     const updateName = prompt(" Enter the new Name");
//     const userid = Number(prompt(" Enter the user ID:"));
//     fitdetails = fitdetails.map((fitness) => {
//       if (fitness.id === userid) {
//         fitness.username = updateName;
//         console.log("Updated successfully");
//       }
//       return fitness;
//     });
//     fitdetails.forEach((fitness, index) => {
//       console.log(
//         `${index + 1}. ID: ${fitness.id}, Name: ${fitness.username}, Age: ${
//           fitness.userage
//         }, Weight: ${fitness.weight}, Height: ${fitness.height}, BMI: ${
//           fitness.bmiFormatted
//         }`
//       );
//     });
//   }
//   function deleteUser(){
//     const deleteID = parseInt(prompt("Enter the user ID:"));
//     fitdetails = fitdetails.filter((fitness) => {
//       if(fitness.id === deleteID) {
//         console.log("Contact deleted successfully.");
//         return false;
//       } else {
//         return true;
//       }
//     });
//     fitdetails.forEach((fitness, index) => {
//       console.log(
//         `${index + 1}. ID: ${fitness.id}, Name: ${fitness.username}, Age: ${
//           fitness.userage
//         }, Weight: ${fitness.weight}, Height: ${fitness.height}, BMI: ${
//           fitness.bmiFormatted
//         }`
//       );
//     });
// }
// }
// mainOption();
