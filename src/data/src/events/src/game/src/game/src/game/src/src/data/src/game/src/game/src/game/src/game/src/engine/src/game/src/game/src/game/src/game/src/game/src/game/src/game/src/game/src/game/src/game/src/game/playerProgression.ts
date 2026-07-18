export interface CareerProgression {


amateurWins:number;

amateurLosses:number;

professionalWins:number;

professionalLosses:number;

reputation:number;

organisation:string;

level:number;


}







export function createProgression()

:CareerProgression{


return {


amateurWins:0,


amateurLosses:0,


professionalWins:0,


professionalLosses:0,


reputation:0,


organisation:"UKFC",


level:1


};


}








export function completeAmateurFight(

career:CareerProgression,

win:boolean

){



if(win){


career.amateurWins++;

career.reputation+=5;


}

else{


career.amateurLosses++;

career.reputation+=1;


}



return career;


}








export function turnPro(

career:CareerProgression

){



if(

career.amateurWins>=5 &&

career.reputation>=20

){



career.organisation="LFA";


career.level=2;


return true;


}



return false;


}








export function completeProFight(

career:CareerProgression,

win:boolean

){



if(win){


career.professionalWins++;

career.reputation+=10;


}

else{


career.professionalLosses++;

career.reputation+=3;


}



return career;


}








export function moveOrganisation(

career:CareerProgression,

next:string

){



career.organisation=next;


career.level++;


return career;


}








export function canMoveUp(

career:CareerProgression

){



return career.reputation >=

career.level*25;


}








export function careerStatus(

career:CareerProgression

){



return {


record:

`${career.professionalWins}-${career.professionalLosses}`,


amateurRecord:

`${career.amateurWins}-${career.amateurLosses}`,


company:

career.organisation,


reputation:

career.reputation



};


}
