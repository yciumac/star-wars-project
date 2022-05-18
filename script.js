
const luke = {
   name: 'Luke Skywalker',
   height: '172',
   mass: '77',
   hair_color: 'blond',
   skin_color: 'fair',
   eye_color: 'blue',
   gender: 'male',
};
console.log(luke);

const interestedIn = prompt('What do you want to know about Luke? Choose between name, height, hair_color, eye_color');


if (luke[interestedIn]) {
   console.log(luke[interestedIn]);
} else {
   console.log('Wrong request! Choose between name, height, hair_color, eye_color');
};

luke.homeworld = 'Tatooine';
luke['birth_year'] = '19BBY';

// Exercice1
// "The main hero is, he has hair, eyes and he's from planet."

console.log(`The main hero is ${luke.name}, he has ${luke.hair_color} hair, ${luke.eye_color} eyes and he's from ${luke.homeworld} planet.`);