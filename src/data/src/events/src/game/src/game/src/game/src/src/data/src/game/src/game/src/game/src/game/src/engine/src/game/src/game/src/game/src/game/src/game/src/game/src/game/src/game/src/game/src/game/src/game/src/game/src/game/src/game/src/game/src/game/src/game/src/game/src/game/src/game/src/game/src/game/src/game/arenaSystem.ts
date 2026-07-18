export interface Arena {


name:string;

city:string;

capacity:number;

ticketPrice:number;

homeAdvantage:number;


}





export interface EventFinance {


ticketsSold:number;

ticketIncome:number;

arena:string;


}







export const arenas:Arena[]=[


{

name:"Manchester Arena",

city:"Manchester",

capacity:21000,

ticketPrice:80,

homeAdvantage:5

},


{

name:"O2 Arena",

city:"London",

capacity:20000,

ticketPrice:100,

homeAdvantage:5

},


{

name:"UFC Apex",

city:"Las Vegas",

capacity:5000,

ticketPrice:150,

homeAdvantage:3

},


{

name:"Abu Dhabi Arena",

city:"Abu Dhabi",

capacity:12000,

ticketPrice:120,

homeAdvantage:4

}


];








export function selectArena(

name:string

){



return arenas.find(

arena=>arena.name===name

);


}








export function createEventFinance(

arena:Arena,

popularity:number

):EventFinance{



const attendance=

Math.min(

arena.capacity,

Math.floor(

arena.capacity *

(popularity/100)

)

);



return {


ticketsSold:attendance,


ticketIncome:

attendance *

arena.ticketPrice,


arena:arena.name


};


}








export function homeAdvantageBonus(

arena:Arena,

isHome:boolean

){



if(isHome){


return arena.homeAdvantage;


}



return 0;


}
