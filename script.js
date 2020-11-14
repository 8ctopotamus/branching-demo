var planet = {
  name: 'Earth',
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion",
  neighboringPlanets: ["Mars", "Venus"],
  logFacts: function () {
    console.log("This planet's name is " + this.name)
    console.log("This planet's age is " + this.age)
  }
}

planet.logFacts()
console.log(planet.isPopulated)