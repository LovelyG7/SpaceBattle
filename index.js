class Ship{
  constructor(shiphull,firepower,accuracy) {
    this.shiphull = shiphull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  fire(target) {
    if(Math.random()<this.accuracy){
      target.shiphull -= this.firepower;
    }
  }
}

let BubaGump = new Ship(20,5,0.7)

console.log(BubaGump);

//random number 1-20
//  var randomNumber= Math.floor(Math.random()*10)+1
// console.log('number is',randomNumber)

// create sub class extending from parent and chaning the values of the same parameters

// class Aliens extends Ship {
//   constructor () {
//     super(Math.floor(Math.random()*(7-3))+3, Math.floor(Math.random()*(.8-.6))+.6);
//   }
// }

class Aliens {
  constructor() {
    this.shiphull = Math.round(Math.random()*(6-3)+3)// enemy hull is between 3 and 6
    this.firepower =Math.round(Math.random()*(4-2)+2)//enemyfirepower is between 2 and 4
    this.accuracy = Math.round(Math.random()*(6-3)+3)// enemy accuracy is between .6 and .8 
    
  }
}

addAliens (){
  constructor () {
    this.ships= []
  }
  addAliens (){
    this.shiphull = Math.round(Math.random()*(6-3)+3)// enemy hull is between 3 and 6
    this.firepower =Math.round(Math.random()*(4-2)+2)//enemyfirepower is between 2 and 4
    this.accuracy = Math.round(Math.random()*(6-3)+3)// enemy accuracy is between .6 and .8 
    this.ships.push(new Ship (shiphull,firepower,accuracy));
  }
}

