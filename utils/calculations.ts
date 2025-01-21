interface CalorieCalculations {
  basalMetabolicRate: number
  maintenanceCalories: number
  targetCalories: number
}

export const calculateCalories = (
  weight: number,
  height: number,
  age: number,
  sex: "male" | "female",
  activityLevel: string,
  goal: string,
): CalorieCalculations => {
  // Mifflin-St Jeor Formula
  const bmr = sex === "male" ? 10 * weight + 6.25 * height - 5 * age + 5 : 10 * weight + 6.25 * height - 5 * age - 161

  // Activity multipliers
  const activityMultipliers = {
    sedentario: 1.2,
    "pouco-ativo": 1.375,
    "moderadamente-ativo": 1.55,
    "muito-ativo": 1.725,
    "extremamente-ativo": 1.9,
  }

  const maintenance = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]

  // Goal adjustments
  const goalAdjustments = {
    emagrecer: -500,
    "emagrecer-agressivo": -1000,
    manter: 0,
    "ganhar-massa": 500,
  }

  const target = maintenance + goalAdjustments[goal as keyof typeof goalAdjustments]

  return {
    basalMetabolicRate: Math.round(bmr * 100) / 100,
    maintenanceCalories: Math.round(maintenance * 100) / 100,
    targetCalories: Math.round(target * 100) / 100,
  }
}

