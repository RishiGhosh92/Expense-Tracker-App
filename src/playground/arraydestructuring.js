const address = ["A-2 Komala Court", "TNagar", "Chennai", "670001"];
const [, city, state = "MP"] = address;
console.log(`You're in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [drink, , cost] = item;
console.log(`A medium ${drink} costs ${cost}`);
