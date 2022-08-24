//-------------------------------- Bonus 01

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  return Math.floor((Math.random() * dragon) + 15);
}


const warriorDamage = (warrior) => {
  return Math.floor(Math.random() * warrior) + warrior.strength;
}

console.log('---------------------------------------------------------------------------');
// DÚVIDA
getFirstName = (obj) => obj.firstName;

result = getFirstName({
  firstName: 'Yazeed'
});

console.log(result); // 'Yazeed'

console.log('--------------------');

len = (array) => array.length;
result = len([1, 2, 3]);

console.log(result); // 3
console.log('---------------------------------------------------------------------------');

isEven = (num) => num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);

console.log(result); // [2, 4]

console.log('---------------------------------------------------------------------------');

users = [
  {
    name: 'Yazeed',
    age: 25
  },
  {
    name: 'Sam',
    age: 30
  },
  {
    name: 'Bill',
    age: 20
  }
];

// com loop 

getName = (user) => user.name; 
usernames = [];

for (let i = 0; i < users.length; i++) {
  const name = getName(users[i]);

  usernames.push(name);
}

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]