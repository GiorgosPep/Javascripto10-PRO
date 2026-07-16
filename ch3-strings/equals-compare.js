const str1 = 'Hello'
const str2 = 'World'

// Equality check
console.log(str1 === 'Hello');      //true
console.log(str1 === str2);         //false

console.log('Coding' < 'factory');  //true

if(str1.localeCompare(str2,'el-GR') < 0) {
    console.log(`${str1} comes before ${str2}`)
}else if (str1.localeCompare(str2,'el-GR') > 0) {
    console.log(`${str1} comes after ${str2}`)
} else {
    console.log(`${str1} is equal to ${str2}`)
}

const s1 = 'HELLO'
const s2 = 'Hello'

if(s1.toUpperCase() === s2.toUpperCase()) {
    console.log(`${s1} is equal to ${s2} (case insensitive)`)
}

if(s1.localeCompare(s2, 'el-GR', { sensitivity: 'base' }) === 0) {
    console.log(`${s1} is equal to ${s2} (case insensitive)`)
}