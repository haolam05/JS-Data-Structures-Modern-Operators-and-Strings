'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Nested destructuring
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Switching variables
let [mainCourse, secondaryCourse] = restaurant.categories;
console.log(mainCourse, secondaryCourse);
[mainCourse, secondaryCourse] = [secondaryCourse, mainCourse];
console.log(mainCourse, secondaryCourse);

// Get 2 return values
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Destructuring with default values (don't know array length)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// using differetn names than property name of obj
const { name: n, openingHours: o, categories: c } = restaurant;
console.log(n, o, c);

// default values
const { menu: m = [] } = restaurant; // default value in case obj's property does not exist
console.log(m);

// Mutatting variables
let g = 11;
let h = 22;
const obj = { g: 33, h: 44, i: 55 };
// const {g,h} = obj;   // NOT work bc a and b are already declared
// let   {g,h} = obj;   // NOT work bc a and b are already declared
// {g,h} = obj          // muated the already declared variables, but NOT work (syntax error: unexpected token bc when we start with "{}", JS expects a code block)
({ g, h } = obj); // WORKS, a = 33, b = 44
console.log(g, h);

// Nested object
const res = { mon: { open: 3, close: 9 }, fri: { open: 4, close: 10 } };
const { fri } = res;
const {
  fri: { open, close },
} = res;
const {
  fri: { open: op, close: cl },
} = res;
console.log(fri);
console.log(open, close);
console.log(op, cl);

// destructuring parameters when obj is passed as argument
const res1 = {
  orderDelivery: function ({ name: n, addr, starterIdx, mainIdx, time = 10 }) {
    console.log(n, addr, starterIdx, mainIdx); // custom field name "n"
    console.log(time); // default parameter value
  },
};
res1.orderDelivery({
  addr: '123 street',
  mainIdx: 1,
  name: 'Hao',
  starterIdx: 2,
});

// Spread operator
const arr = [1, 2, 3];
const newArr = [arr, 4, 5]; // [[1,2,3], 4, 5]
const newArr2 = [...arr, 4, 5]; // [1,2,3,4,5]
console.log(newArr);
console.log(newArr2);
console.log(...newArr2);
// Copy array
const arr2 = [...arr];
console.log(arr2);
// Joining arrays
const arr3 = [...arr, ...arr2];
console.log(arr3);
// Strings
const str = 'Hao';
const strArr = [...str, ' ', 'L', 'a', 'm'];
console.log(strArr);
// Function arguments
const res3 = {
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
  name: 'Vietnamese Kitchen',
};
const ingredients = [
  // prompt("Let's make pasta. Ingreient 1?"),
  // prompt('Ingreient 2'),
  // prompt('Ingreient 3'),
];
res3.orderPasta(...ingredients);
// Objects
const res3Copy = { foundIn: '2023', ...res3, founder: 'Hao' };
console.log(res3Copy);
res3Copy.name = 'Thai Kitchen';
console.log(res3.name, res3Copy.name);

// Rest Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// Object
const days = {
  mon: 'Monday',
  tues: 'Tuesday',
  wed: 'Wednesday',
  thurs: 'Thursday',
  fri: 'Friday',
};
const { thurs, ...otherDays } = days;
console.log(thurs, otherDays);
const add = function (...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(add(2, 3));
console.log(add(2, 1, 3, 5, 3));
console.log(add(1));
console.log(add(...[1, 2, 3]));
const orderPizza = function (main, ...others) {
  console.log(main);
  console.log(others);
};
orderPizza('mushroom', 'olive', 'tomato');

// Short circuiting
// || operator
console.log(3 || 'Hao'); // 3
console.log('' || 'Hao'); // 'Hao' since '' is falsy
console.log(true || 0); // true
console.log(undefined || null); // null
// && operator
console.log(0 && 'Hao'); // 0
console.log(true && 'Hao'); // 'Hao'
if (orderPizza) {
  orderPizza('mushroom', 'tomato', 'olives');
}
orderPizza && orderPizza('mushroom', 'tomato', 'olives');

// Nullish Coalescing operator
let guests = restaurant.numGuests || 10; // guests = 10
console.log(guests);
restaurant.numGuests = 20;
guests = restaurant.numGuests || 10; // guests = 20
console.log(guests);
restaurant.numGuests = 0;
guests = restaurant.numGuests || 10; // guests = 10 since 0 is falsy
console.log(guests);
// -> To solve this, use nullish operator
guests = restaurant.numGuests ?? 10; // guests = 0 since 0 is not null or undefined
console.log(guests);

// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds; // method 1
const {
  odds: { team1, x: draw, team2 },
} = game; // method 2
console.log(team1, draw, team2);
const printGoals = function (...playerNames) {
  console.log(playerNames);
  console.log(`${playerNames.length} goals was scored!`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
// with index
for (const item of menu.entries()) console.log(item);
for (const [idx, item] of menu.entries()) console.log(`${idx + 1}: ${item}`);

// Enhanced object literal
// property name
const openHours = { mon: 'm', tue: 't' };
const restaurant2 = { owner: 'Hao', openHours };
console.log(restaurant2);
// function
const restaurant3 = {
  owner: 'Hao',
  order1: function () {
    console.log('Order is placed!');
  },
  order2() {
    console.log('Order is placed!');
  },
};
console.log(restaurant3);
console.log(restaurant3.order1());
console.log(restaurant3.order2());
// computed property name
const weekdays = ['mon', 'tue', 'wed', 'fri'];
const openH = { [weekdays[0]]: 'm', [weekdays[1]]: 't', [`day-${2 + 4}`]: 'w' };
console.log(openH);

// Optional Chaining
console.log(restaurant?.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.mon);
console.log(restaurant?.openingHours);
// methods
console.log(restaurant.order?.(0, 1)) ?? 'method does not exist';
//arrays
const users = [{ name: 'hao' }];
console.log(users[0]?.name);

// Looping over objects
console.log(Object.keys(openingHours));
console.log(Object.values(openingHours));
for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

// Coding Challenge #2
for (const [idx, player] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${player}`);
}
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  sum += odd;
}
console.log(`Average odd: ${sum / odds.length}`);
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
const scores = {};
for (const scorer of game.scored) {
  scores[scorer] ? scores[`${scorer}`]++ : (scores[scorer] = 1);
}
console.log(scores);

// Set
const set = new Set([1, 2, 3, 4]);
console.log(set.size);
console.log(set.has(3));
console.log(set.add(5));
console.log(set.add(5));
console.log(set.delete(1));
console.log(set);
for (const el of set) console.log(el);
set.clear();
console.log(set);
console.log(new Set('HaoLam'));
const arr1 = [1, 2, 2, 3, 3, 4, 4, 4, 5];
console.log(new Set(arr1));
console.log([...new Set(arr1)]); // turns set into array

// Maps
const map = new Map();
map.set('name', 'Hao');
console.log(map);
map.set(2001, 'birthYear');
console.log(map);
map.set(true, 22).set(false, 17).set('favNums', [5, 11]); // map#set returns the updated map
console.log(map);
console.log(map.get(true));
console.log(map.get(2001));
const array = [1, 2];
map.set(array, 'array');
console.log(map.get(array));
map.delete(true);
console.log(map);
console.log(map.has(false));
console.log(map.size);
map.clear();
console.log(map);
const map2 = new Map([
  [1, 'Java'],
  [2, 'Javascript'],
  [true, 'good'],
]);
console.log(map2);
// object to map
const map3 = new Map(Object.entries(restaurant));
console.log(map3);
// map to array
console.log([...map3]);
console.log([...map3.keys()]);
console.log([...map3.values()]);
for (const [key, value] of map2) console.log([key, value]);

// Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes`
);
for (const [minute, event] of gameEvents) {
  const halfStr = minute > 45 ? '[SECOND HALF]' : '[FIRST HALF]';
  console.log(`${halfStr} ${minute}: ${event}`);
}

//
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const rows = document.querySelector('textarea').value.split('\n');
  for (const [i, str] of rows.entries()) {
    const row = str.toLowerCase().trim().split('_');
    rows[i] =
      `${row[0]}${row[1].replace(row[1][0], row[1][0].toUpperCase())}`.padEnd(
        20,
        ' '
      ) + '✅'.repeat(i + 1);
  }
  console.log(rows.join('\n'));
});

// String exercise
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getDest = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ''
  )} ${getDest(from)} ${getDest(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
