const array1 = [10, 9, 8, `...`, 2, 1, `BLAST OFF!!!`];

for (const element of array1) {
  console.log(element);
}



var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var l = Numbers.length;
var max = -Infinity;
var i;
for (i = 0; l > i; i++) {
  if (Numbers[i] > max) {
    max = Numbers[i];
  }
}
console.info(max);

var l = Numbers.length;
var max = Infinity;
var i;
for (i = 0; l > i; i++) {
  if (Numbers[i] < max) {
    max = Numbers[i];
  }
  
      
}
console.info(max);





const sentence = `what a time to be alive!`
console.log(sentence.toUpperCase());





function findMinMax(array){
  let min = arr[0]
  let max = arr[0]

  for(let i = 0; i < arr.length; i++){
  
    if(min > arr[i]){
      min = arr[i]
    }
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return [min, max]
}

const array =[1, 2, 3, 4, 5, 6, 7, 8]

console.log(...findMinMax(array))


