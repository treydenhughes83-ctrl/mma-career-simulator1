export type FighterStyle =
  | "Striker"
  | "Grappler"
  | "Wrestler"
  | "BJJ Specialist"
  | "Complete Fighter";

export const divisions = [
  "Flyweight",
  "Bantamweight",
  "Featherweight",
  "Lightweight",
  "Welterweight",
  "Middleweight",
  "Light Heavyweight",
  "Heavyweight",
] as const;

export type Division = (typeof divisions)[number];

export interface FighterStats {
  striking: number;
  power: number;
  wrestling: number;
  bjj: number;
  cardio: number;
  fightIQ: number;
}

export interface Fighter {
  name: string;
  style: FighterStyle;
  division: Division;
  stats: FighterStats;
  wins: number;
  losses: number;
}
