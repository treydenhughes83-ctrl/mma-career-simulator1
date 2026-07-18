export interface FameData {


fame:number;

fans:number;

hype:number;

socialFollowers:number;


}







export function createFame(){

return {


fame:0,

fans:100,

hype:0,

socialFollowers:0


};

}








export function increaseFame(

data:FameData,

amount:number

){



data.fame += amount;



if(data.fame > 100){

data.fame = 100;

}



return data;


}








export function gainFans(

data:FameData,

amount:number

){



data.fans += amount;



return data;


}








export function fightHype(

data:FameData,

opponentRank:number

){



const hypeGain =

Math.max(

5,

20 - opponentRank

);



data.hype += hypeGain;



if(data.hype>100){

data.hype=100;

}



return data;


}








export function postSocialMedia(

data:FameData

){



const growth =

Math.floor(

Math.random()*5000

)+1000;



data.socialFollowers += growth;



return growth;


}








export function afterFightFame(

data:FameData,

won:boolean,

method:string

){



if(won){


data.fame += 5;



if(method==="KO/TKO"){

data.hype+=10;

}


if(method==="Submission"){

data.hype+=8;

}



}

else{


data.fame += 1;


}





return data;


}








export function getStarLevel(

fame:number

){



if(fame>=90)

return "Superstar";



if(fame>=70)

return "Main Event Fighter";



if(fame>=40)

return "Rising Prospect";



return "Unknown Prospect";


}
