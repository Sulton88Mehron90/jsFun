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
//How and what method i will be using? find() and map.
  },

  getSingleBreweryBeerCount(breweryName) {
    return breweries
    .reduce((acc, cur) => {
      if(cur.name === breweryName){
        acc += cur.beers.length
      }
    return acc;
    }, 0);

//WHAT data type I am working with? array of objects with nested objects in one of the values for one of the keys. data as breweryName is a parameter that is passing.
//WANT, what the desiered outcome/return? - Return a number that is the count of beers that the specified brewery has e.g.
// given 'Ratio Beerworks', return 5
//HOW i would solve it? what methods to use? - filter, map
  },

  findHighestAbvBeer() {
    return breweries
    .flatMap(brewery => brewery.beers)
    .sort((a, b) => b.abv - a.abv)[0]
   // flatten [] first befoe working with data from all the arrays!

//What data tyme i am working with? - 
//Want - what is that i woant to return. - // Return the beer which has the highest ABV of all beers e.g.
// { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
//How and what method i will be using? - sort()

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
    return boardGames[type].map(item => item.name)

//What data type i am working with? - object of arrays with objects in them.
//Want? waht outcome i am willing to get in return. - Return an array of just the names of the games within a specified type. e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]
//How and wht method i will use? map()
  },

  listGamesAlphabetically(type) {
   return boardGames[type]
   .sort((a, b) => a.name.localeCompare(b.name))
   .map(item => item.name);

//To sort strings alphabetically in ascending order, you should use the localeCompare() function, which is specifically designed to compare strings according to language-appropriate rules.
   
//What data type i am working with? - Object of 3 arrays of objects.
//Want. what i want to be returned? - Return an array of just the names of the games within a specified type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]
// How. what method will be i using? - map(), filter(), sort().
  },

  findHighestRatedGamesByType(type) {
    return boardGames[type].sort((a, b) => b.rating - a.rating)[0]
  
//WHAT data type you are working with? - Object of arrays with array elements.
//WHANT ? what return you would want to see? - Return an object which is the highest rated game within the specified type.e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 }
//HOW/what method you will use to achive this? sort()
  },

  averageScoreByType(type) {
    return boardGames[type].reduce((acc, cur) => {
      acc += (cur.rating) / boardGames[type].length
      return acc
    }, 0);

//WHAT data type you are working with? - Object of arrays with array elements.
//WHANT ? what return you would want to see? - Return the average score for the specified type.e.g. given the argument of "strategy", return 7
  // note: do not worry about rounding your result.
//HOW/what method you will use to achive this? reduce()
},

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    let nameCount = 0;
    return boardGames[type]
    .filter(member => member.maxPlayers === maximumPlayers)
    .reduce((acc, cur) => {
      if(cur.rating){
        acc += cur.rating;
        nameCount += 1;
// takeaway: The nameCount increment and the division of the accumulator by nameCount should not be within the reduce function's callback. This is because reduce is executed for each element of the array, and you want to perform the division only once, after summing up all the ratings.
      };
    return acc;
    }, 0) / nameCount;
// function averageScoreByTypeAndPlayers(type, maximumPlayers) {
//const games = boardGames[type].filter(game => game.maxPlayers === maximumPlayers);
// if (games.length === 0) {
//  return 0;
// } 
//const sum = games.reduce((acc, game) => acc + game.rating, 0);
// return sum / games.length;
// };
// In this version of the function, we:
   // Filter the games by type and maximum number of players.
   // If there are no games that match the criteria, we return 0.
   // We use the reduce function to sum up the ratings of the games that match the criteria.
   // Finally, we calculate the average by dividing the sum by the number of games.

//Psudocode:
//WHAT data type you are working with? - Object of arrays with array elements.
//WHANT ? what return you would want to see? - Return the average score of any games that match the specified type and maximum number of players. e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.
//HOW/what method you will use to achive this? reduce()
  }
};

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
return instructors.reduce((acc, cur) => {
 cohorts.forEach(mod => {
  if(cur.module === mod.module){
    acc.push({name: cur.name, studentCount: mod.studentCount})
  };
 });
  return acc;
}, []);

//Psudocode:
//WHAT? - data type I am working with? - 2 Arrays of obj. with nested arr.in them.
//WANT? - what do I want to return? - Return an array of instructors where each instructor is an object with a name and the count of students in their module. e.g.
//HOW? - what method I will be using? - reduce().
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
  },

  studentsPerInstructor() {
   return cohorts.reduce((acc, cur) => {
    let instCount = 0
    instructors.forEach(inst => {
      if(inst.module === cur.module){
        instCount += 1;
      };
    });
    let key = `cohort${cur.cohort}`
    acc[key] = cur.studentCount / instCount;
   return acc;
   //takeaways: ALWAYS return acc at the begining!!!
   },{});

//Psudocode:
//WHAT? - data type I am working with? - 2 Arrays of obj. with nested arr.in them.
//WANT? - Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // };
//HOW? - what method I will be using? - reduce() and forEach()
  },

modulesPerTeacher() {
  return instructors.reduce((acc, cur) => {
    cohorts.forEach(item => {
     if(cur.teaches.some(subj => item.curriculum.includes(subj))){
       if(!acc[cur.name]){
        acc[cur.name] = [];
       };
        acc[cur.name].push(item.module);
     };
    });
    return acc;
  }, {});

//Psudocode:
//WHAT? - data type I am working with? - 2 Arrays of obj. with nested arr.in them.
//WANT? - what outcome i am looking for? what to return? - Return an object where each key is an instructor name and each value is an array of the modules they can teach based on their skills. e.g.:
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
//HOW? - what method will be using? - reduce() - to iterrate over instractors array to get to the instractor.teaches, forEach() - to iterrate over cohorts array to get to cohorts.curriculum; some() within forEach to iterrate over instractors.teaches array to get subjects to see if it is includes in cohorts.curriculum. becouse we need to see if one subj includes than the teacher can teach that subj. in mod that it is related to.

//Takeaways: didn't need below for the problem but its good to know.

  // let flattenedCurriculum = [].concat(... item.curriculum);

//In this step, the ... (spread) operator is used to "spread out" the arrays inside item.curriculum into individual elements. The concat function then combines all of these elements into a single array called flattenedCurriculum.
//ex: 
//from this : [['hiking', 'fishing'],['swimming', 'bird watching']]
//to this: ['hiking', 'fishing', 'swimming', 'bird watching']

  // let noDupl = [... new Set(flattenedCurriculum)];

//In this step, a new Set object is created from flattenCurriculum. A Set is a built-in JavaScript object that only allows unique values—any duplicate values are automatically removed. The ... (spread) operator is then used again to convert this Set back into an array. The result is an array of unique subjects from all the teaches skills. 
  },

curriculumPerTeacher() {
  return instructors.reduce((acc, cur) => {
    cur.teaches.forEach(topic => {
      if(!acc[topic]){ // check if the topic key doesn't exist in the accumulator
        acc[topic] = [];
      }
      acc[topic].push(cur.name); // this must not be inside the else block
    });
    return acc;
  }, {});


//WHAT? - data type I am working with? - 2 Arrays of obj. with nested arr.in them.
//WANT? - what outcome you are wanting to see? - Return an object where each key is a curriculum topic and each value is an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
//HOW? - what method you want to use? - reduce() and forEach().

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
    let partOne = sidekicks.reduce((acc, cur) => {
      if (!acc[cur.boss]) {
        acc[cur.boss] = cur.loyaltyToBoss;
      } else {
        acc[cur.boss] += cur.loyaltyToBoss;
      }
      return acc;
    }, {})
    // console.log(partOne)
   return Object.keys(partOne).map(output => {
      return {bossName: output, sidekickLoyalty: partOne[output]}
    });
// Takeaways: since the data we needed is in sidekicks [] i used reduce to iterrate ove that array. checked if acc[cur.boss] is true. if it is false create a key in acc and give it a value of cur.loyaltyToBoss. else add += cur.loyaltyToBoss to acc. in order to get the exspected return used Object.key on the varieble with reduce.
    //{ Scar: 16, Ursula: 20, Jafar:3 } 
//the outcome is an object that is why used the Object.keys to get the keys and used map() over the new keys and returned the wanted outcome format.

//WHAT? - what type of data you are working with? - 1 object and 1 array with nested obj with Array as value for one of the keys in objects.
//WANT? - what is the desiered outcome? return? - Create an array of objects that each have the name of the boss and the sum loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
//HOW? - what method you will be using? Object.keys reduce(), map()... nested methods
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
    // return Object.keys(constellations)
    // .map(key => 
    //   stars
    // .reduce((acc, cur) => {
    //   if(!constellations[key].alternateNames.includes(cur.constellation) && !constellations[key].starNames.includes(cur.name)) {
    //     acc.push(cur)
    //   };
    //   return acc;
    // },[])
    // ).flat()

    return Object.keys(constellations)
    .map(key => stars
    .filter(star => !constellations[key].alternateNames.includes(star.constellation) &&
      !constellations[key].starNames.includes(star.name)
    ))
    .flat();

//HELP!!!!!

//WHAT? - what data type i am working with? - one object of objects with nested arrays. Second is an array of objects.
//WANT? - what i want the return be? - Return an array of all the star objects that appear in any of the constellations listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' 
  //      },
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
// HOW? what method i will be using? - reduce(),  map(), filter(), bject.keys
  },

  starsByColor() {
    return stars.reduce((acc, cur) => {
      if(!acc[cur.color]){
        acc[cur.color] = []
      };
        acc[cur.color].push(cur)
      return acc;
    },{});

//Takeaways: not always need to use else. think than decide if its needed.

//WHAT? - what data type i am working with? - one object of objects with nested arrays. Second is an array of objects.
//WANT? - what do i want the outcome to be? - Return an object with keys of the different colors of the stars, whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
//HOW? - what method to use? - reduce(), map(), filter()
  },

  constellationsStarsExistIn() {
    const brightestStars = stars
    .sort((a, b) => a.visualMagnitude - b.visualMagnitude)
    .map(brighter => brighter.constellation);
   // let output = [... new Set(brightestStars)];
    return brightestStars

//ASK for help!

//WHAT? - what data type i am working with? - one object of objects with nested arrays. Second is an array of objects.
//WANT? - Sort the stars by brightness and return an array of the star's constellation names Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
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
//HOW? - what method would i use? - sort() and map()
  }
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ------------------------------------------------------------------
// DATASET: charaters, weapons from ./datasets/ultima

const ultimaPrompts = {
  totalDamage() {
    return characters.reduce((prevChar, curChar) => {
      curChar.weapons.reduce((acc, cur) => {
        prevChar += weapons[cur].damage
        return acc;
      }, 0)
      return prevChar;
  }, 0)
// Takeaways: using forEach and reduce inside it didnt give me anything. using map() give me the otput of array of numbers but not the sum of damages.
//Pseudocode:
//WHAT? what dtata type I am working with? - Array of objects with array as a value for one of the keys in the object. Objeject of objects.
//WANT? - what do i want to be returned. - Return the sum of the amount of damage for all the weapons that our characters can use // Answer => 113
//HOW? - what methods will you be using? - reduce(), 
  },

  charactersByTotal() {
    return characters
    .map(character => {
      let totalD = 0;
      let totalR = 0;
    character.weapons.forEach( weapon => {
      totalD += weapons[weapon].damage;
      totalR += weapons[weapon].range;
    });
    return { [character.name]: 
      {
        damage: totalD, 
        range: totalR
      }
    } 
    });
    // .reduce((acc, cur) => {
    //  let totalDamage = 0;
    //  let totalRange = 0;
    // cur.weapons
    // .forEach(weapon => {
    //   totalDamage += weapons[weapon].damage;
    //   totalRange += weapons[weapon].range;
    // });
    // acc.push({[cur.name]: {damage: totalDamage, range: totalRange}})
    //   return acc;
    // }, []);

 
    
//Pseudocode:
//WHAT? - what dtata type I am working with? - Array of objects with array as a value for one of the keys in the object. Objeject of objects.
//WANT? - what do you want to return? Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
//How? - what method to use? - for each and reduce.
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

    let awesomeDinos = {};

    movies.forEach(movie => {
    let count = 0;

    Object.keys(dinosaurs).forEach(key => {
      if(movie.dinos.includes(key) && dinosaurs[key].isAwesome === true){
        count += 1;
      };
    })
  awesomeDinos[movie.title] = count;
  })
 return awesomeDinos;
    

//WHAT? - what data type you'll be working with? - object of objects, and array of objects with nested arrays.
//WANT? - what would you try to return? - Return an object where each key is a movie title and each value is the number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
//HOW? what method you'll be using? - filter(), map()
  },

  averageAgePerMovie() {
    return movies.reduce((acc, cur) => {
      let age = [];
    
    cur.cast.forEach(human => {
      if(humans[human]) { 
// checking if human is in the humans object
        age.push(cur.yearReleased - humans[human].yearBorn);
      }
      });
    let avgAgeCount = Math.floor(age.reduce((acc, cur) => acc + cur, 0) / age.length);
    
      if(!acc[cur.director]){
        acc[cur.director] = {};
      }
    
      acc[cur.director][cur.title] = avgAgeCount;
        return acc;
      }, {});
    
//WHAT? - what data type you'll be working with? - object of objects, and array of objects with nested arrays.
//WANT? - what you want to return? - Return an object where each key is a movie director's name and each value is an object whose key is a movie's title and whose value is the average age of the cast on the release year of that movie. e.g.:
// {
//   'Steven Spielberg':
//     {
//       'Jurassic Park': 34,
//       'The Lost World: Jurassic Park': 37
//     },
//   'Joe Johnston':
//     {
//       'Jurassic Park III': 44
//     },
//   'Colin Trevorrow':
//     {
//       'Jurassic World': 56
//     },
//   'J. A. Bayona':
//     {
//       'Jurassic World: Fallen Kingdom': 59
//     }
// }
//HOW? what method you will be using? 
  },

uncastActors() {
  return Object.keys(humans).reduce((acc, cur) => {
    const jurassicParkMovies = movies.filter(movie => movie.title.includes("Jurassic Park"));

    let notInJurassicPark = jurassicParkMovies.every(movie => !movie.cast.includes(cur));

      if (notInJurassicPark) {
        acc.push({
          name: cur,
          nationality: humans[cur].nationality,
          imdbStarMeterRating: humans[cur].imdbStarMeterRating
        });
      }
      return acc;
    }, []).sort((a, b) => a.nationality.localeCompare(b.nationality));
  
//Help!!  there might be a problem with the data in your movies or humans object.   
//WHAT? - what data type you'll be working with? - object of objects, and array of objects with nested arrays.
//WANT? - what is the return should be? - Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.
//HOW? what methods? - reduce, filter, sort

    // e.g.
    //   [
    //  {
    //     name: 'Justin Duncan',
    //     nationality: 'Alien',
    //     imdbStarMeterRating: 0
    //   },
    //   {
    //     name: 'Karin Ohman',
    //     nationality: 'Chinese',
    //     imdbStarMeterRating: 0
    //   },
    //   {
    //     name: 'Tom Wilhoit',
    //     nationality: 'Kiwi',
    //     imdbStarMeterRating: 1
    //   }, {
    //     name: 'Jeo D',
    //     nationality: 'Martian',
    //     imdbStarMeterRating: 0
    //   }
  //   ]
//How? what method should be used? - map, filter, sort.

  },

  actorsAgesInMovies() {
    return Object.keys(humans).reduce((acc, cur) => {
      let age = []
      movies.forEach(movie => {
        if(movie.cast.includes(cur)){
          age.push(movie.yearReleased - humans[cur].yearBorn)
        };
      })
      if(age.length > 0){  
// only push actor to acc if they have acted in at least one movie
      acc.push({
        name: cur,
        ages: age
      })
    }
      return acc;
    }, []);

//WHAT? - what data type you'll be working with? - object of objects, and array of objects with nested arrays.
//WANT? - Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie. e.g.
    // [ 
    //   { name: 'Sam Neill', ages: [ 46, 54 ] },
    //   { name: 'Laura Dern', ages: [ 26, 34 ] },
    //   { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
    //   { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
    //   { name: 'Ariana Richards', ages: [ 14, 18 ] },
    //   { name: 'Joseph Mazello', ages: [ 10, 14 ] },
    //   { name: 'BD Wong', ages: [ 33, 55, 58 ] },
    //   { name: 'Chris Pratt', ages: [ 36, 39 ] },
    //   { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } 
    // ]
//How? what method should be used? - 
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
