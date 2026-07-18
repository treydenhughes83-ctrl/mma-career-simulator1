export interface Sponsor {
  name: string;
  requirement: number;
  money: number;
  description: string;
}


export const sponsors: Sponsor[] = [

  {
    name: "Venum",
    requirement: 30,
    money: 15000,
    description:
      "MMA equipment sponsor. Available for rising fighters.",
  },

  {
    name: "Monster Energy",
    requirement: 40,
    money: 25000,
    description:
      "Energy drink sponsor for fighters gaining popularity.",
  },

  {
    name: "Gymshark",
    requirement: 50,
    money: 40000,
    description:
      "Fitness brand sponsorship for established athletes.",
  },

  {
    name: "Reebok",
    requirement: 60,
    money: 50000,
    description:
      "Major combat sports clothing sponsor.",
  },

  {
    name: "Nike",
    requirement: 70,
    money: 100000,
    description:
      "Elite global sponsorship for world-level fighters.",
  },

];


export function getAvailableSponsors(
  reputation: number
): Sponsor[] {

  return sponsors.filter(
    (sponsor) =>
      reputation >= sponsor.requirement
  );

}
