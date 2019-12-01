const arr = [1, 2, 3, [4, 5, [6]], [7, 8]]

const arr1 = arr.flat(1)  // 1 is the deepth of array to be flatten

const arr2 = arr.flat(2)

console.log(arr)
console.log(arr1)
console.log(arr2)