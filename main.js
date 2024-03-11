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
     a. Create two temp arrays, one temp array being the main array with no 
        duplicate flavors. The second temp array will have quantities of each flavor;
        the quantities will be located in the same index as the flavor names in the 
        first temp array.
     b. Take these two temp arrays and combine them to make an object, with the key
        being the flavor name, and the value being the quantity of that flavor.
  4. Show the object with the flavor/quantity properties in the website console.
*/

/* 
This function will build the first temp array, 
removing all duplicates from the main array.

@params {array} flavorArray
@return {array} tempNoDupeArray 
*/
const removeArrayDupes = (flavorArray) => {
  const tempNoDupeArray = [];
  //need to sort flavorArray alphabetically in order for this function to function.
  flavorArray.sort();
  tempNoDupeArray.push(flavorArray[0]);
  for (let i=1; i<flavorArray.length; i++) {
    if (flavorArray[i] === flavorArray[i-1]) continue;
    tempNoDupeArray.push(flavorArray[i]);
  };
  return tempNoDupeArray;
};

/* 
This function will build the second temp array, 
giving us counts for each flavor in the same index position
as those flavors in the first temp array.

@params {array, array} flavorArray, tempNoDupeArray
@return {array} tempFlavorCountArray 
*/
const getFlavorCount = (flavorArray, tempNoDupeArray) => {
  const tempFlavorCountArray = [];
  let currentFlavorCount = 0;
  // Our nested for loops let us iterate through our main array for each
  // index of our first temp no dupe array. This will give us a count for each flavor.
  for (let i=0; i<tempNoDupeArray.length; i++) {
    currentFlavorCount = 0;
    for (let j=0; j<flavorArray.length; j++) {
      if (flavorArray[j] === tempNoDupeArray[i]) currentFlavorCount++;
    }
    tempFlavorCountArray.push(currentFlavorCount);
  };
  return tempFlavorCountArray;
} ;

/* 
This function will use our two temp functions to transform our main array
into an object with the different flavors being the keys and the
quantity of flavors being the values of those keys.

@params {array} flavorArray
@return {object} flavorObject 
*/
const buildFlavorObject = (flavorArray) => {
  const flavorArrayNoDupes = removeArrayDupes(flavorArray);
  const flavorArrayCount = getFlavorCount(flavorArray, flavorArrayNoDupes);
  let flavorObject = {};
  for (let i=0; i<flavorArrayNoDupes.length; i++) {
    flavorObject[flavorArrayNoDupes[i]] = flavorArrayCount[i];
  };
  return flavorObject;
};

/* 
This is our main script. We prompt the user for their order of desired flavors,
then we split their inputted string into an array, and then we return that array
transformed into an object in a table in the console of our website. 
*/
const flavorString = prompt("Please enter your order of desired flavors, separated ONLY by commas:");
const flavorArray = flavorString.split(',');
console.table(buildFlavorObject(flavorArray));