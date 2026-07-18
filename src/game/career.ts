export type CareerLevel =
  | "Amateur"
  | "FCC"
  | "UKFC"
  | "LFA"
  | "Cage Warriors"
  | "PFL"
  | "ONE Championship"
  | "UFC";


export interface BeltHistory {
  organisation: string;
  division: string;
  wonAt: string;
  defended: number;
}


export interface Career {
  fighterName: string;

  level: CareerLevel;

  wins: number;
  losses: number;
  draws: number;

  reputation: number;

  money: number;

  currentDivision: string;

  belts: BeltHistory[];

  previousTeams: string[];

  challengesSent: string[];

  challengesReceived: string[];
}



export function createStarterCareer(
  name: string,
  style:
    | "Striker"
    | "Grappler"
    | "Wrestler"
    | "Balanced"
): Career {


  let startingRep = 5;


  if (style === "Striker") {
    startingRep = 8;
  }

  if (style === "Grappler") {
    startingRep = 7;
  }

  if (style === "Wrestler") {
    startingRep = 7;
  }


  return {

    fighterName: name,

    level: "Amateur",

    wins: 0,
    losses: 0,
    draws: 0,

    reputation: startingRep,

    money: 1000,

    currentDivision:
      "Flyweight",

    belts: [],

    previousTeams: [
      "Local MMA Gym"
    ],

    challengesSent: [],

    challengesReceived: []

  };

}




export function winFight(
  career: Career,
  opponentName: string
): Career {


  career.wins += 1;

  career.reputation += 3;

  career.money += 2000;


  return career;

}




export function loseFight(
  career: Career
): Career {


  career.losses += 1;

  career.reputation =
    Math.max(
      0,
      career.reputation - 2
    );


  return career;

}




export function winBelt(
  career: Career,
  organisation: string,
  division: string,
  event: string
) {


  career.belts.push({

    organisation,

    division,

    wonAt: event,

    defended: 0

  });


  career.reputation += 20;


  return career;

}




export function sendChallenge(
  career: Career,
  opponent: string
) {


  if (
    !career.challengesSent.includes(
      opponent
    )
  ) {

    career.challengesSent.push(
      opponent
    );

  }


  return career;

}




export function receiveChallenge(
  career: Career,
  opponent: string
) {


  career.challengesReceived.push(
    opponent
  );


  return career;

}




export function promoteCareer(
  career: Career
): Career {



  if (
    career.level === "Amateur" &&
    career.reputation >= 15
  ) {

    career.level = "FCC";

  }


  else if (
    career.level === "FCC" &&
    career.reputation >= 25
  ) {

    career.level = "UKFC";

  }


  else if (
    career.level === "UKFC" &&
    career.reputation >= 40
  ) {

    career.level = "LFA";

  }


  else if (
    career.level === "LFA" &&
    career.reputation >= 60
  ) {

    career.level =
      "Cage Warriors";

  }


  else if (
    career.level === "Cage Warriors" &&
    career.reputation >= 80
  ) {

    career.level =
      "UFC";

  }



  return career;

}
