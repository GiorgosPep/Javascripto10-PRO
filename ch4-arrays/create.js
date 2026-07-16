const arr = [];     //empty array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 'Alice', 3, 4, true];
const sparseArr = [1, , 3, 4, 5];   //sparse array
const arr3 = [,,,]      //empty array 

//Array is Constructor function
const arr4 = Arr(3)     //length 3, empty elements
const arr5 = Array(2, 3, 4, 5)  //length 4
const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]   //2D array
const objArr = [ {id: 1}, {id: 2}, {id: 3} ]   //array of objects

console.log(arr1[0])

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

for(const item of arr1) {
    console.log(item)
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j])
    }       
}


for (const row of grid) {
    for (const item of row) {
        console.log(item)
    }
}
