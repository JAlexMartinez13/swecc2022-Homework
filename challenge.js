const arr = [{ info: 3},{ info: 6},{ info: 4 }];
const target = 4;
function modifyArr(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].info > target) {
      arr[i].info = '-';
    } else if (arr[i].info > target) {
      arr[i].info = '+'
    } else {
      arr[i].info = '='
    }
  }return arr
}




console.log(modifyArr(arr, target))