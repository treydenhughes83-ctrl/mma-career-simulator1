export const amateurOrganisations = [

"FCC",

"UKFC"

] as const;



export type AmateurOrganisation =

(typeof amateurOrganisations)[number];






export interface AmateurRanking {


division:string;

champion:string;

rankings:string[];

}







export const amateurRankings:Record<
AmateurOrganisation,
AmateurRanking[]
> = {



UKFC:[


{


division:"Flyweight",


champion:"Bruce Riley",


rankings:[

"Bobby Kristensen",

"Umberto Del Prete",

"Kalum Guest",

"Dylan Hall",

"Dan Farrell",

"Jacob Wilson",

"Rocco Bernstein",

"Arona Fieldhouse",

"Morgan Fletcher",

"Conrad Connolly"

]


},



{


division:"Bantamweight",


champion:"TBA",


rankings:[

"UKFC Prospect 1",

"UKFC Prospect 2",

"UKFC Prospect 3",

"UKFC Prospect 4"

]


},



{


division:"Lightweight",


champion:"TBA",


rankings:[

"UKFC Prospect 5",

"UKFC Prospect 6",

"UKFC Prospect 7"

]


}



],





FCC:[



{


division:"Flyweight",


champion:"TBA",


rankings:[

"FCC Fighter 1",

"FCC Fighter 2",

"FCC Fighter 3",

"FCC Fighter 4"

]


},



{


division:"Bantamweight",


champion:"TBA",


rankings:[

"FCC Fighter 5",

"FCC Fighter 6",

"FCC Fighter 7"

]


},



{


division:"Lightweight",


champion:"TBA",


rankings:[

"FCC Fighter 8",

"FCC Fighter 9",

"FCC Fighter 10"

]


}



]


};








export function addAmateurFighter(

organisation:AmateurOrganisation,

division:string,

fighter:string

){


const weightClass =

amateurRankings[organisation]

.find(

d=>d.division===division

);



if(weightClass){


weightClass.rankings.push(fighter);


}


}








export function moveAmateurToPro(

fighter:string

){


return {

fighter,

message:

`${fighter} has earned a professional contract`

};


}
