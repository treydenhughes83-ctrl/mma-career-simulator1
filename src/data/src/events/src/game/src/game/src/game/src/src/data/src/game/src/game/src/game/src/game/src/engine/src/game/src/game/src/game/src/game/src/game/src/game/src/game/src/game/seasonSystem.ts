export interface SeasonAward {

name:string;

fighter:string;

year:number;

}



export interface Season {


year:number;

events:number;

awards:SeasonAward[];

hallOfFame:string[];


}







export const seasons:Season[]=[];







export function createSeason(

year:number

):Season{


const season:Season={


year,


events:0,


awards:[],


hallOfFame:[]


};



seasons.push(season);



return season;


}








export function addEvent(

season:Season

){


season.events++;


return season;


}








export function giveAward(

season:Season,

award:string,

fighter:string

){


season.awards.push({


name:award,


fighter,


year:season.year


});



return season;


}








export function addHallOfFame(

season:Season,

fighter:string

){



if(!season.hallOfFame.includes(fighter)){


season.hallOfFame.push(fighter);


}



return season;


}








export function fighterOfYear(

season:Season,

fighter:string

){



return giveAward(

season,

"Fighter of the Year",

fighter

);


}








export function endSeason(

season:Season

){



return {


year:season.year,


events:season.events,


awards:season.awards,


hallOfFame:season.hallOfFame,


message:

`Season ${season.year} completed`

};


}
