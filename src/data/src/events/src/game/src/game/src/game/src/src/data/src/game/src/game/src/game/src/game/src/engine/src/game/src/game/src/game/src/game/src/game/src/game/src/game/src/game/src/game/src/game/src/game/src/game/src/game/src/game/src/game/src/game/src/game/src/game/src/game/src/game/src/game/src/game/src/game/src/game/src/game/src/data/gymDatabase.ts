export interface Gym {


name:string;

location:string;

speciality:string;

bonuses:{

striking:number;

wrestling:number;

bjj:number;

cardio:number;

};

reputation:number;


}







export const gyms:Gym[]=[



{

name:"Manchester Top Team",

location:"Manchester, UK",

speciality:"Complete MMA",

bonuses:{


striking:5,


wrestling:5,


bjj:5,


cardio:5


},

reputation:80

},





{

name:"American Kickboxing Academy",

location:"USA",

speciality:"Striking & Wrestling",

bonuses:{


striking:8,


wrestling:8,


bjj:3,


cardio:5


},

reputation:90

},






{

name:"Jackson Wink MMA",

location:"USA",

speciality:"Fight IQ & Game Plans",

bonuses:{


striking:6,


wrestling:7,


bjj:5,


cardio:6


},

reputation:95

},






{

name:"Renzo Gracie Academy",

location:"USA",

speciality:"Brazilian Jiu-Jitsu",

bonuses:{


striking:2,


wrestling:5,


bjj:10,


cardio:4


},

reputation:90

},






{

name:"American Top Team",

location:"USA",

speciality:"Complete MMA",

bonuses:{


striking:7,


wrestling:7,


bjj:7,


cardio:7


},

reputation:95

}


];








export function findGym(

name:string

){



return gyms.find(

gym=>gym.name===name

);


}








export function trainAtGym(

fighter:any,

gym:Gym

){



fighter.stats.striking += gym.bonuses.striking;


fighter.stats.wrestling += gym.bonuses.wrestling;


fighter.stats.bjj += gym.bonuses.bjj;


fighter.stats.cardio += gym.bonuses.cardio;



return fighter;


}
