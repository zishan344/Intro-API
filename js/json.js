const company = { name: "P-heor", location: "Bangladesh", id: 56 };
console.log(company);
const stringified = JSON.stringify(company);
console.log(stringified);
const parse = JSON.parse(stringified);
console.log(parse);
