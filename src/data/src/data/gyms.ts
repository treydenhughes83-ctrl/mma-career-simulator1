export type StatKey =
  | "striking"
  | "power"
  | "wrestling"
  | "bjj"
  | "cardio"
  | "fightIQ";


export interface Gym {
  name: string;
  country: string;
  bonuses: Partial<Record<StatKey, number>>;
}


export const gyms: Gym[] = [
  {
    name: "Manchester Top Team",
    country: "🇬🇧 England",
    bonuses: {
      striking: 2,
      wrestling: 2,
      cardio: 2,
    },
  },

  {
    name: "American Top Team",
    country: "🇺🇸 USA",
    bonuses: {
      wrestling: 3,
      bjj: 2,
    },
  },

  {
    name: "American Kickboxing Academy",
    country: "🇺🇸 USA",
    bonuses: {
      wrestling: 3,
      cardio: 2,
    },
  },

  {
    name: "City Kickboxing",
    country: "🇳🇿 New Zealand",
    bonuses: {
      striking: 3,
      fightIQ: 2,
    },
  },

  {
    name: "Kill Cliff FC",
    country: "🇺🇸 USA",
    bonuses: {
      wrestling: 2,
      bjj: 2,
    },
  },

  {
    name: "Tristar Gym",
    country: "🇨🇦 Canada",
    bonuses: {
      striking: 2,
      fightIQ: 2,
    },
  },

  {
    name: "Jackson Wink MMA",
    country: "🇺🇸 USA",
    bonuses: {
      fightIQ: 3,
      striking: 1,
    },
  },
];


export function getGymBonus(
  gymName: string,
  stat: StatKey
): number {

  const gym = gyms.find(
    (gym) => gym.name === gymName
  );

  return gym?.bonuses[stat] ?? 0;
}
