const cats = [
  {
    name: "Garfield",
    weight: 25,
    age: 40,
    color: "Orange",
    occupation: "None"
  },
  {
    name: "Morris",
    weight: 15,
    age: 30,
    color: "Orange",
    occupation: "Spokescat"
  },
  {
    name: "Grumpy Cat",
    weight: 11,
    age: "Deceased",
    color: "Grey",
    occupation: "Instagram Model"
  },
  {
    name: "Salem",
    weight: 12,
    age: 25,
    color: "Black",
    occupation: "Witch"
  },
  {
    name: "Felix",
    age: 100,
    weight: 5,
    color: "Black",
    occupation: "Entertainer"
  },
  {
    name: "Heathcliff",
    age: 45,
    weight: 15,
    color: "Orange",
    occupation: "Junkyard Cat"
  },
  {
    name: "Tom",
    age: 40,
    weight: 12,
    color: "Grey",
    occupation: "Mouser"
  },
  {
    name: "Sylvester",
    age: 65,
    weight: 35,
    color: "Black and white",
    occupation: "Bird Watcher"
  },
  {
    name: "Azrael",
    age: 35,
    weight: 10,
    color: "Orange",
    occupation: "Sorcerer's Apprentice"
  },
  {
    name: "George",
    age: "Deceased",
    weight: 9,
    color: "Grey",
    occupation: "Greatest cat ever. RIP."
  }
]

// List all black cats
function listBlackCats() {
  for(let i = 0; i < cats.length; i++) {
    if (cats[i].color == "Black") 
      console.log(cats[i])
  }
}

listBlackCats()

// What's the total weight of all cats?
function totalCatWeight() {
  let weight = cats.reduce((accumulator, object) => {
    return object.weight + accumulator
  }, 0)

  console.log(weight);
}

totalCatWeight();

// Who is the oldest cat?
function findOldestCat() {
  let oldest;

  cats.forEach(cat => {
    if(!oldest) 
      oldest = cat;
    else 
    if(cat.age > oldest.age)
      oldest = cat
  });

  console.log(oldest);
}

// Which cat is a Witch?
function findTheWitch() {
  let witch;

  cats.forEach(cat => {
    if(cat.occupation == "Witch") {
      witch = cat;
    }
  });

  return witch;
}

console.log(findTheWitch())

// Which cats are chonky (weight 20lbs or more)?
function findChonkyCats() {
  let chonkers = cats.filter(cat => cat.weight >= 20);

  return chonkers;
}

console.log(findChonkyCats())

// For all cats, print to the screen "<name> is a/an <color> <occupation>."
function describeCats() {
  for(let i = 0; i < cats.length; i++) {
    console.log(`${cats[i].name} is a/an ${cats[i].color} ${cats[i].occupation}.`)
  }
}

describeCats();

// What's the name of the cat who is an Entertainer?
function findTheEntertainer() {
  let theEntertainer = cats.filter(cat => {
    return cat.occupation == "Entertainer"
  })

  return theEntertainer;
}

console.log(findTheEntertainer())