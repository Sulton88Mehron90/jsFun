const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(data) {
    // Return an array of just the names of kitties who are orange e.g.
// ['Tiger', 'Snickers']

 /* CODE GOES HERE */
return data.filter(cat => cat.color === 'orange').map(name => name.name);
// WHAT - what is the data type we are working with? - arrray of objects.
// WANT- what do we want the function to do return/ what data do we want to end up with? - array of names of orange cats.
// HOW/METHODS- how do we want the function to get the data we need? and what methods can we use? - map and filter.
  },

  sortByAge(data) {
    // Sort the kitties by their age

return data.sort((a,b) => b.age - a.age);

// WHAT is the data type I am working with? Attay of objects
// Whant what output i want to end up with? - sorted age of the cats.
//How/What methods I would use?- sort().

},

  growUp(data) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    /* CODE GOES HERE */

// WHAT is the data type I am working with? Attay of objects
// Whant what output i want to end up with? - Return an array of kitties who have all grown up by 2 years e.g.
//How/What methods I would use? - map() and sort().
return data.map(cat => 
  {
    return {
      name: cat.name,
      age: cat.age + 2,
      color: cat.color
    }
  
  });
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(data) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

return data.reduce((acc, cur) => {
  cur.members.forEach(member => {
    //console.log(acc[member]);
    if(acc[member]){
      acc[member].push(cur.club);
    }else{
      acc[member] = [cur.club];
    };
  })   
  return acc;
}, {})

    // WHAT - what is the data type I am working with? Attay of objects.
    // WHANT - Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of.
    //How/WHAT method will be used? - reduce and forEach().
  
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    
return mods.map(mod => {
  let studentsPerInstructor = mod.students / mod.instructors
  return {
    mod:mod.mod,
    studentsPerInstructor: studentsPerInstructor
  }
  });
  

// WHAT - what is the data type I am working with? Attay of objects.
// WHANT - // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
//How/WHAT method will be used? - map().

  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    return cakes.map(cake => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      };
  });
// WHAT - what is the data type I am working with? Attay of objects with nested array as value of the key objects.
// WHANT - // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
//How/WHAT method will be used? - map().
  },

  onlyInStock() {
    return cakes.filter(cake => cake.inStock > 0);

// WHAT - what is the data type I am working with? Attay of objects with nested array.
// WHANT - // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
    //How/What method will be used? - filter().
  },

  totalInventory() {
    return cakes.reduce((acc, cur) => {
      acc += cur.inStock;
      return acc;
    }, 0);
// WHAT - what is the data type I am working with? - Array of objects with nested array as value of the key objects.
//WHANT - Return the total amount of cakes in stock e.g.59
//HOW/WHAT method will use? - reduce().
  },

  allToppings() {
  return cakes.reduce((acc, cur) => {
    cur.toppings.forEach(topping => {
      if(!acc.includes(topping)){
        acc.push(topping);
      }
    })
    return acc;
  },[]);

//WHAT - what is the data type I am working with? Attay of objects with nested array.
//WHANT - Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    // How/What method will be used? - map().
  },

  groceryList() {
    return cakes.reduce((acc, cur) => {
      // console.log(cur.toppings)
      cur.toppings.forEach(topping => {
        if(acc[topping]){
          acc[topping] += 1;
        }else{
          acc[topping] = 1;
        };
      })
      return acc;
    }, {});

// WHAT - what is the data type I am working with? Attay of objects with nested array.
//WHANT - I need to make a grocery list. Please give me an object where the keys are each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }
//HOW/WHAT method will be used? - reduce().

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
   return classrooms.filter(item => item.program === 'FE');

//WHAT - what is the data type I am working with? Attay of objects.
//WHANT - Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
//HOW/WHAT method will be used? - filter().
  },

  totalCapacities() {
    return classrooms.reduce((acc, cur) => {
      if(cur.program === 'FE'){
        acc.feCapacity += cur.capacity
        // above you are creating a key-value pair for the front-end classroom.
      } else {
        acc.beCapacity += cur.capacity
      };
      return acc;
    }, {feCapacity: 0, beCapacity: 0});
 
// WHAT - what is the data type I am working with? Attay of objects.
//WHANT - Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    // How/WHAT method will be used? - reduce().

  },
sortByCapacity() {
  return classrooms.sort((a, b) => a.capacity -b.capacity);
 
// WHAT - what is the data type I am working with? Attay of objects.
// WHANT -    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
//HOW/WHAT method will be used? - sort().

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(data) {
   return data.filter(book => (book.genre !== 'Horror' && book.genre!== 'True Crime')).map(book => book.title);
 
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
//psudocode:
//WHAT - what is the data type I am working with? Array of objects.
//WANT - return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']
//HOW/WHAT method will be used? - filter().
  },

getNewBooks(data) {
  return data
  // .filter(year => year.published >= 1990).map(book => {
  //   return {
  //     title: book.title,
  //     year: book.published
  //   };
  // });

  .reduce((acc, cur) => {
    if(cur.published >= 1990){
      acc.push({title: cur.title, year: cur.published});
      // if the key and value name is predeterment, you can create an object as above for output
    };
    return acc;
  },[]);

//WHAT - what is the data type I am working with? Array of objects.
//WANT - return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:
    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
//HOW/WHAT method will be used? - reduce() or filter(), map().
  },

getBooksByYear(books, year) {
  return books
  .filter(book => book.published > year)
  .map(item => {
    return {
      title: item.title,
      year: item.published
    };
  });

// WHAT - what is the data type I am working with? Array of objects.
// WANT - return an array of objects containing all books that were published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
//HOW/WHAT method will be used? - filteler(), map() or reduce().
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    return weather
    .map(item => (item.temperature.high + item.temperature.low) /2);

//WHAT - what data type I am working with? - Array of objects.
//WANT - what do I want for the output to be? -   return an array of all the average temperatures.    Eg:[ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
//HOW/WHAT method I am thinking of using to solve this problem? - map().
  },

  findSunnySpots() {

    return weather
    .filter(item => item.type === 'sunny' || item.type === 'mostly sunny')
    .map(note => `${note.location} is ${note.type}.`
  );

//WHAT - Array of objects plus object a s a value in one of the keys of the object within main array.
//WANT - Return an array of sentences of the locations that are sunny and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ].
//HOW/What method? - filter(), map().

  },

  findHighestHumidity() {
    return weather.sort((a, b) => b.humidity - a.humidity)[0]
//WHAT - Array of objects plus nested object.
//WANT - Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
//HOW/WHAT method I will be using? - find().

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {

    // let parksToVisit = [];
    // let parksVisited = [];

    // return nationalParks.map( item => {
    //   if(item.visited === false){
    //     parksToVisit.push(item.name)
    //   }else {
    //     parksVisited.push(item.name)
    //   };
    // return {
    //   parksToVisit: parksToVisit,
    //   parksVisited: parksVisited
    //  };
    // });
// !!!!why above didnt work? what am i missing?!!!!!

return nationalParks.reduce((acc, cur) => {
      if(cur.visited === false){
        // go with simple. you can get to `visited` information with cur.visited. you dont need to check acc.
        acc.parksToVisit.push(cur.name);
      } else {
        acc.parksVisited.push(cur.name);
      };
      return acc;
    }, {parksToVisit: [], parksVisited: [] });
    // create the object keys here if they determend and in this case its an [] so assign to it.

//psudocode:
//WHAT, data I am working with? - Array of objects with obj as value in one of the kays in object.
//WANT, output? - Return an object containing the names of which parks I need to visit and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //} 
// HOW/WHAT method will be used? - reduce or map
  },

  getParkInEachState() {
    return nationalParks
      // .map(item => {
      //   let output = {};
      //   if( item.location){
      //     output[item.location] = item.name;
      //   }
      //   return output
      // });

    .reduce((acc, cur) => {
      if(cur.location){
        let output = {}
       output[cur.location] = cur.name
//So, output[cur.location] is assigning a new property to the output object with the name of the state (taken from cur.location). The value of this property is set to the park name (taken from cur.name).
        acc.push(output)
      }
      return acc;
    }, []);

//WHAT data type? - array of objects with array as one of the value of the objects key.
//WANT do i need to return? - Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]
//How? WHAT method? - map or reduce

  },

  getParkActivities() {
    let allActivities = nationalParks.map(park => park.activities);
    let flattenedActivities = [].concat(...allActivities);
    let output = [...new Set(flattenedActivities)];
//Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. You can iterate through the elements of a set in insertion order.
// Use to remove duplicate elements from an array
// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
// console.log([...new Set(numbers)]);
// [2, 3, 4, 5, 6, 7, 32]

    // flattenedActivities.reduce((acc, cur) => {
    //   if(!acc.includes(cur)){
    //     acc.push(cur)
    //   };
    //   return acc;
    // },[]);
    //Come back to it. Why it didnt work?

  //  let output = [];
  //  flattenedActivities.forEach(act => {
  //     if(!output.includes(act)){
  //       output.push(act)
  //     };
  //   })
  return output 


//WHAT - data type i am working with? - Array of objects with array as value property on one of the key property of the objects in the main array.
//WANT - what do i want the return/outcome to be? - Return an array of all the activities I can do in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]
// HOW? WHAT method am I thinking to use? - map() or reduce();
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    return breweries
    .reduce((acc, cur) => {
    acc += cur.beers.length;
    return acc;
    }, 0);

    // .map(item => {
    //   let total = 0;
    //   total += item.beers.length
    //   return total
    // }).reduce((acc, cur) => {
    //   acc += cur
    //   return acc;
    // })

//Psudocode:
//WHAT? data i am working with: Array of objects with nested aobject as one of the value in the main array of objects. ha? lol
//WANT? what i want for the outcome to be? - Return the total beer count of all beers for every brewery e.g. // 40
//HOW? WHAT method i will be using? - reduce(), map()
  },

  getBreweryBeerCount() {
    return breweries
      // .map(item => ({
      //   name: item.name,
      //   beerCount: item.beers.length
      //  }))
    
    .reduce((acc, cur) => {
      if(cur.name){
        acc.push({ name: cur.name, beerCount: cur.beers.length})
      }
      return acc;
    }, []);

//WHAT dta type i am working with. - array of objects with nested object value for one of the keys.
//WANT what outcome would i want? - Return an array of objects where each object has the name of a brewery and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]
//How and what method i will be using?
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
