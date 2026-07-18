export interface SaveData {

version:number;

date:string;

player:any;

resume:any;

stats:any;

events:any[];

news:any[];

rankings:any;

}





const SAVE_KEY = "mma-career-save";







export function createSave(

data:SaveData

){


const save:SaveData={


version:1,


date:new Date()

.toISOString(),


player:data.player,


resume:data.resume,


stats:data.stats,


events:data.events || [],


news:data.news || [],


rankings:data.rankings || {}


};




localStorage.setItem(

SAVE_KEY,

JSON.stringify(save)

);



return save;


}








export function loadSave()

{


const saved =

localStorage.getItem(

SAVE_KEY

);



if(!saved){


return null;


}



return JSON.parse(saved) as SaveData;


}








export function deleteSave()

{


localStorage.removeItem(

SAVE_KEY

);


}








export function hasSave()

{


return localStorage.getItem(

SAVE_KEY

)!==null;


}








export function exportCareer()

{


const save=loadSave();



if(!save){

return null;

}



return JSON.stringify(

save,

null,

2

);


}








export function importCareer(

data:string

){


const save=

JSON.parse(data);



localStorage.setItem(

SAVE_KEY,

JSON.stringify(save)

);



return save;


}
