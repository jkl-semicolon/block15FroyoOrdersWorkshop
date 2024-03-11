/* 
This website will allow visitors to enter in their desired froyo flavors
separated by commas through a prompt. When they view the browser console,
they observe a table listing how many of each flavor was ordered.

Example: user enters: vanilla,vanilla,vanilla,strawberry,coffee,coffee
         user sees:   vanilla:3
                      strawberry:1
                      coffee:2

@params {string} flavorString
@return {object} orderTable

  1. Prompt the user to enter their desired flavors, separated by commas.
  2. Split the string into an array, with the desired flavors as values.
  3. Transform the array into an object, with the keys being the desired flavors
     and the amounts of the flavors being the values.
  4. Show the object with the flavor/quantity properties in the website console.
*/

// const flavorString = prompt("Please enter your order of desired flavors, separated ONLY by commas:");

//test placeholder for flavorString:
const flavorString = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";

const flavorArray = flavorString.split(',');

flavorArray.sort();

console.log(flavorArray);

// This function will build a temp array, removing all duplicates.
const removeArrayDupes = (array) => {
  const tempArray = [];
  tempArray.push(array[0]);
  for (let i=1; i<array.length; i++) {
    if (array[i] === array[i-1]) continue;
    tempArray.push(array[i])
  }
  return tempArray;
}

console.log(removeArrayDupes(flavorArray));

// This function will take in a sorted flavor array, along with the temp array of it with
// duplicates removed. It will return an array with the flavor counts of those flavors.
const getFlavorCount = (array, tempArray) => {
  const flavorCountArray = [];
  let currentFlavorCount = 0;
  for (let i=0; i<tempArray.length; i++) {
    currentFlavorCount = 0;
    for (let j=0; j<array.length; j++) {
      if (array[j] === tempArray[i]) {
        currentFlavorCount++;
      }
    }
    flavorCountArray.push(currentFlavorCount);
  }
  return flavorCountArray;
} 

console.log(getFlavorCount(flavorArray, removeArrayDupes(flavorArray)));


// This function will build an object of flavor and quantities.
// @params {array} flavorArray
// @return {object} flavorObject
const buildFlavorObject = (flavorArray) => {
  const flavorArrayNoDupes = removeArrayDupes(flavorArray);
  const flavorArrayCount = getFlavorCount(flavorArray, flavorArrayNoDupes);
  let flavorObject = {};
  for (let i=0; i<flavorArrayNoDupes.length; i++) {
    flavorObject[flavorArrayNoDupes[i]] = flavorArrayCount[i];
  }
  return flavorObject;
} 

console.table(buildFlavorObject(flavorArray));