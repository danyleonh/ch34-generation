let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Print out all of the people in the list
console.log(people);

// 2.Remove "Dani" from the array
let indexDani = people.indexOf("Dani");
if (indexDani !== -1) {
  people.splice(indexDani, 1);
}

// 3. Remove "Juan" from the array
let indexJuan = people.indexOf("Juan");
if (indexJuan !== -1) {
  people.splice(indexJuan, 1);
}

// 4. Move "Luis" to the front of the array
let indexLuis = people.indexOf("Luis");
if (indexLuis !== -1) {
  let luis = people.splice(indexLuis, 1);
  people.unshift(luis[0]);
}

// 5. Add your name to the end of the array
let yourName = "Daniela";
people.push(yourName);

// 6. Iterate through the array and exit after console.log "Maria"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

// 7. Get the indexOf where "Maria" is located
let indexMaria = people.indexOf("Maria");
console.log(indexMaria);

// At the end of the exercise, there should be 4 people in the array.

