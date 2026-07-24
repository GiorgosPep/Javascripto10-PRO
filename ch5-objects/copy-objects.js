const initial = { firstname: 'Alice', 
    age : 30,
    address: {street: "Patission", streetNum: 80}
}


// const copyObj= initial
// copyObj.firstname = "Bob"
// console.log(initial.firstname) //Bob

const copyInitial = {...initial} //shallow copy
copyInitial.firstname = "Bob"
copyInitial.address.street = "Aristotelous" 

console.log(initial.firstname)
console.log(initial.address)

const copyInitial2 = JSON.parse(JSON.stringify(initial)) //deep copy

const copyInitial3 = structuredClone(initial) //deep copy