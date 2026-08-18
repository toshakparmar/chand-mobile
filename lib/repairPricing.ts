export type RepairType =
  | "Screen Replacement"
  | "Battery Replacement"
  | "Charging Port Repair"
  | "Camera Repair"
  | "Back Glass Repair"
  | "Water Damage";

export const repairTypes: RepairType[] = [
  "Screen Replacement",
  "Battery Replacement",
  "Charging Port Repair",
  "Camera Repair",
  "Back Glass Repair",
  "Water Damage",
];

export const deviceCatalog: Record<string, string[]> = {
  Apple: ["iPhone 15 Pro", "iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone SE"],
  Samsung: ["Galaxy S24 Ultra", "Galaxy S23", "Galaxy S22", "Galaxy A54", "Galaxy Z Flip 5"],
  OnePlus: ["OnePlus 12", "OnePlus 11", "OnePlus Nord 3"],
  "Google Pixel": ["Pixel 8 Pro", "Pixel 8", "Pixel 7a"],
  Xiaomi: ["Xiaomi 14", "Redmi Note 13 Pro", "Poco X6"],
};

export const conditions = ["Excellent", "Good", "Fair", "Poor"] as const;
export type Condition = (typeof conditions)[number];

const basePrice: Record<RepairType, number> = {
  "Screen Replacement": 4499,
  "Battery Replacement": 1999,
  "Charging Port Repair": 1499,
  "Camera Repair": 2999,
  "Back Glass Repair": 2499,
  "Water Damage": 3499,
};

const baseTime: Record<RepairType, string> = {
  "Screen Replacement": "35 min",
  "Battery Replacement": "25 min",
  "Charging Port Repair": "30 min",
  "Camera Repair": "40 min",
  "Back Glass Repair": "50 min",
  "Water Damage": "24–48 hrs",
};

const brandMultiplier: Record<string, number> = {
  Apple: 1.35,
  Samsung: 1.15,
  OnePlus: 1.0,
  "Google Pixel": 1.1,
  Xiaomi: 0.85,
};

const conditionMultiplier: Record<Condition, number> = {
  Excellent: 0.95,
  Good: 1,
  Fair: 1.1,
  Poor: 1.25,
};

export function estimateRepair(
  brand: string,
  repairType: RepairType,
  condition: Condition
) {
  const price = basePrice[repairType] ?? 2499;
  const bMul = brandMultiplier[brand] ?? 1;
  const cMul = conditionMultiplier[condition] ?? 1;
  const estimated = Math.round((price * bMul * cMul) / 10) * 10;
  return {
    price: estimated,
    time: baseTime[repairType] ?? "30–45 min",
    warranty: "1 Year Warranty",
  };
}
