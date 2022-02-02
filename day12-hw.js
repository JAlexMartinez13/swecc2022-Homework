
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]

//shoppingList.push("salt")  //adds an element to the end of the array.

//shoppingList.pop()  // removes the last element in the array and returns that element.

shoppingList.unshift()  //adds a new element at the beginning of the array.

shoppingList.shift()   //removes the first element in an array and returns that element.

shoppingList.forEach() //calls a function once for each element in the array.

shoppingList.map() //transforms the elements in the original array by calling the given function once for each element in the array.

shoppingList.filter() //creates a new array with only the elements that pass the test in a given function.

shoppingList.find() //returns the first element in an array that passes a test given as a function.

shoppingList.reduce() //executes a given function for each value of the array and returns a single value.

shoppingList.includes() // determines whether an array has a specific element.

shoppingList.indexOf() //search the array for a specific element and returns its first index.

shoppingList.findIndex() //returns the index of the first element in an array that passes the test in a given function.

shoppingList.every() //checks if all elements in an array pass a test given as a function

console.log(shoppingList)







let s = "the sky is blue"
let arrS = s.split(" ")
let reverseArr = arrS.reverse() 
let res = reverseArr.join(" ")

console.log(res)
