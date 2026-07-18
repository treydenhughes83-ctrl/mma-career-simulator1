import { startGame } from "./gameLauncher";
import { createGameLoop } from "./gameLoop";
import { createSave } from "./saveSystem";
import { displayDivisionRankings } from "./rankingDisplay";




// START CAREER

const career = startGame(

"Your Fighter",

"Complete Fighter",

"Flyweight"

);





// START GAME CLOCK

const loop = createGameLoop();





console.log(

"=== MMA CAREER STARTED ==="

);





console.log(

career.fighter

);





console.log(

loop

);






// SHOW CAREER INFO

console.log(

{

Name:career.fighter.name,

Gym:career.fighter.gym,

Division:career.weight.currentDivision,

Organisation:career.progression.organisation

}

);







// SAVE GAME

createSave({

version:1,

date:new Date().toISOString(),

player:career.fighter,

resume:career.resume,

stats:career.fighter.stats,

events:[],

news:[],

rankings:{}

});







console.log(

"GAME SAVED"

);







// TEST RANKING DISPLAY

console.log(

displayDivisionRankings([

{

name:"Your Fighter",

rank:10,

previousRank:12,

record:"0-0",

champion:false,

organisation:"UKFC",

division:"Flyweight"

}

])

);
