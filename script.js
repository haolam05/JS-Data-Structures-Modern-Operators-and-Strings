'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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