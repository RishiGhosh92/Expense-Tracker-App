const person = {
  name: "Rishi",
  age: 26,
  location: {
    city: "Chennai",
    temp: 32
  }
};
const { name: firstName = "Anon", age } = person;
console.log(`${firstName} is ${age} years old`);

const { city, temp } = person.location;
if (city && temp) {
  console.log(`It's ${temp} in ${city}`);
}

const book = {
  title: "React book",
  author: "Ryan Thomas",
  publisher: {
    name: "Penguin"
  }
};
const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);
