import {
  StatKey,
  gyms,
  styles,
  getGymBonus
} from "./database";


export type FightingStyle =
  | "Striker"
  | "Wrestler"
  | "BJJ Specialist"
  | "Complete Fighter";



export interface CareerFighter {

  name:string;

  age:number;

  style:FightingStyle;

  gym:string;

  wins:number;

  losses:number;

  reputation:number;

  money:number;

  division:string;

  organisation:string;

  stats:Record<StatKey,number>;

  belts:string[];

}



const startingStats:Record<FightingStyle,Record<StatKey,number>> = {


  Striker:{

    striking:65,

    power:65,

    wrestling:45,

    bjj:40,

    cardio:60,

    fightIQ:50

  },


  Wrestler:{

    striking:45,

    power:55,

    wrestling:70,

    bjj:55,

    cardio:70,

    fightIQ:55

  },


  "BJJ Specialist":{

    striking:40,

    power:45,

    wrestling:55,

    bjj:75,

    cardio:55,

    fightIQ:65

  },


  "Complete Fighter":{

    striking:55,

    power:55,

    wrestling:55,

    bjj:55,

    cardio:55,

    fightIQ:60

  }

};




export function createCareerFighter(

name:string,

style:FightingStyle

):CareerFighter {


return {


name,

age:18,

style,

gym:"MMA Academy",

wins:0,

losses:0,

reputation:0,

money:1000,

division:"Flyweight",

organisation:"Amateur Circuit",

belts:[],


stats:{
...startingStats[style]
}


};


}





export function chooseGym(

fighter:CareerFighter,

gym:string

){


if(!gyms.includes(gym)){

return fighter;

}


fighter.gym=gym;


return fighter;


}





export function train(

fighter:CareerFighter,

stat:StatKey

){


const improvement = 1 +
getGymBonus(
fighter.gym,
stat
);



fighter.stats[stat]=Math.min(

100,

fighter.stats[stat]+improvement

);



fighter.money -= 500;


return fighter;


}





export function winFight(

fighter:CareerFighter

){


fighter.wins++;

fighter.reputation += 5;

fighter.money += 3000;



return fighter;


}




export function loseFight(

fighter:CareerFighter

){


fighter.losses++;

fighter.reputation =
Math.max(
0,
fighter.reputation-2
);


return fighter;

}




export function earnBelt(

fighter:CareerFighter,

belt:string

){


fighter.belts.push(belt);


fighter.reputation += 25;


return fighter;


}





export function getCareerRecord(

fighter:CareerFighter

){


return `${fighter.wins}-${fighter.losses}`;


}





export function canTurnProfessional(

fighter:CareerFighter

){


return fighter.reputation >= 15;


}





export function getCareerLevel(

fighter:CareerFighter

){


if(fighter.reputation < 15)

return "Amateur";


if(fighter.reputation < 40)

return "Regional Pro";


if(fighter.reputation < 70)

return "National Contender";


if(fighter.reputation < 100)

return "World Ranked";


return "Champion";

}
