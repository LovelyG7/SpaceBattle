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

let attackbtn = false

document.getElementById('attack').addEventListener('click',()=>{attackbtn = true;
attackAliens();
});

document.getElementById('reset').addEventListener('click',()=> {
  location.reload();
});

let BubaGump = new Ship(20,5,0.7)
console.log(BubaGump);



class Aliens {
  constructor () {
    this.ships= []
  }
  addAliens (){
    this.shiphull = Math.round(Math.random()*(6-3)+3)// enemy hull is between 3 and 6
    this.firepower =Math.round(Math.random()*(4-2)+2)//enemyfirepower is between 2 and 4
    this.accuracy = (Math.random()*(.8-.6)+.6).toFixed(2)// enemy accuracy is between .6 and .8 
    this.ships.push(new Ship (this.shiphull,this.firepower,this.accuracy));

    let enemyImg = document.createElement("img");
    enemyImg.src = "/images/enemy_ship.png";
    document.getElementById("Ship").append(enemyImg)
  }
}


let enemyAliens = new Aliens();
function startGame(){
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();

let shipImg = document.createElement("img");
shipImg.src = "/images/USS_Ship.png";
document.getElementById("Ship").append(shipImg);
}

document.getElementById("start").addEventListener("click",startGame);


//console.log(enemyAliens);

// Attack Methods
const attackAliens = () => {
  // let enemyFleet = enemyAliens.ships;

  const resultContainer = document.getElementById("results")
  let message ="";

  //console.log(enemyFleet);
  for (let i=0; i<enemyAliens.ships.length; i++){
    //if attack button is not selected the loop doesn't continue.
    AlienOnDeck = enemyAliens.ships[i];
    if (attackbtn==false){
      return;
    }

    if (AlienOnDeck.shiphull <=0 ){
      continue  
    }
    //we need to check if shiphull is 0 ( destroyed), if destroyed then game over, if not keep fighting
    if (BubaGump.shiphull <=0) {
      console.log("Game Over! Your ship has been destoyed");
      message += "Game Over! Your ship has been destoyed\n"
      return;  
    }
    while (BubaGump.shiphull > 0 && enemyAliens.ships[i].shiphull > 0 && attackbtn) {
      if (Math.random() < BubaGump.accuracy) {
        enemyAliens.ships[i].shiphull= enemyAliens.ships[i].shiphull - BubaGump.firepower
        console.log('***');
        message +='***\n'
        console.log(`You've hit enemy ${i+1}!`);
        message +=`You've hit enemy ${i+1}!\n`
        console.log(`Ship Health: ${BubaGump.shiphull}`);
        message +=`Ship Health: ${BubaGump.shiphull}\n`
        console.log(`Enemy Health: ${enemyAliens.ships[i].shiphull}`);
        message +=`Enemy Health: ${enemyAliens.ships[i].shiphull}\n`
        console.log('***');
        message +='***\n'
        console.log('')
        message += ''
      }
      // need to check if enemy alien ship is destroyed, if yes then break and go to the next ship
      if (enemyAliens.ships[i].shiphull <= 0){
        console.log("Hooray,enemy Alien had been destroyed");
        message += "Hooray,enemy Alien had been destroyed\n"
        break;
      }

      if (Math.random() < enemyAliens.ships[i].accuracy){
        BubaGump.shiphull = BubaGump.shiphull - enemyAliens.ships[i].firepower 
      }
      if (BubaGump.shiphull <=0) {
        console.log("Game over, your ship has been destroyed" );
        message += "Game Over! Your ship has been destoyed\n" 
        break;
      
      }
    }
    
  }
   resultContainer.innerText = message; // Display all the battle

}

attackAliens();
console.log(BubaGump);
const shipStats = document.getElementById("shipStats");
shipStats.innerText= `${BubaGump.toString}`;