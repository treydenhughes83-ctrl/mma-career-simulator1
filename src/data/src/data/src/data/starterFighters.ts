import { Fighter, FighterStyle } from "./fighters";
import { Division } from "./fighters";


export interface StarterBuild {
  name: string;
  style: FighterStyle;
  description: string;
  startingStats: {
    striking: number;
    power: number;
    wrestling: number;
    bjj: number;
    cardio: number;
    fightIQ: number;
  };
}


export const starterBuilds: StarterBuild[] = [

  {
    name: "Striker",
    style: "Striker",
    description:
      "Elite stand-up fighter. Strong boxing and kicks but needs to improve grappling.",
    startingStats: {
      striking: 65,
      power: 65,
      wrestling: 45,
      bjj: 40,
      cardio: 55,
      fightIQ: 50,
    },
  },


  {
    name: "Grappler",
    style: "Grappler",
    description:
      "Submission focused fighter with strong ground skills.",
    startingStats: {
      striking: 45,
      power: 50,
      wrestling: 65,
      bjj: 70,
      cardio: 55,
      fightIQ: 60,
    },
  },


  {
    name: "Wrestler",
    style: "Wrestler",
    description:
      "Pressure fighter who controls opponents with takedowns.",
    startingStats: {
      striking: 50,
      power: 60,
      wrestling: 75,
      bjj: 55,
      cardio: 70,
      fightIQ: 60,
    },
  },


  {
    name: "BJJ Specialist",
    style: "BJJ Specialist",
    description:
      "Submission expert who hunts for finishes.",
    startingStats: {
      striking: 40,
      power: 45,
      wrestling: 60,
      bjj: 80,
      cardio: 55,
      fightIQ: 65,
    },
  },


  {
    name: "Complete Fighter",
    style: "Complete Fighter",
    description:
      "Balanced fighter with no major weakness.",
    startingStats: {
      striking: 55,
      power: 55,
      wrestling: 55,
      bjj: 55,
      cardio: 60,
      fightIQ: 60,
    },
  },

];


export function createStarterFighter(
  name: string,
  style: FighterStyle,
  division: Division
): Fighter {

  const build = starterBuilds.find(
    (fighter) => fighter.style === style
  );

  if (!build) {
    throw new Error("Starter build not found");
  }


  return {
    name,
    style: build.style,
    division,
    stats: {
      ...build.startingStats,
    },
    wins: 0,
    losses: 0,
  };
}
