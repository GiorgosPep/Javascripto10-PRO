//Scenario: booleans
const cartTotal = 50;
const isMember = true;

const hasFreeShipping = cartTotal >= 40 && isMemeber;

console.log(hasFreeShipping)

const hasDiscount = cartTotal > 100 || isMember;

//Τα && και || δεν επιστρέφουν πάντα boolean.
//Μπορεί να επιστρέφουν μία από τις τιμές
const username = ''
const displayname = username || 'Guest' //Guest

console.log(displayname)

const user = {name: 'Alice'}        //truthy
const helloName = user && user.name;