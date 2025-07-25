import { PricingBreakdownItem, PricingResult, Project, Unit } from "../types";

export const calculateComplexPricing = (
  units: Unit[],
  project: Project,
  selectionPercentage: number
): PricingResult => {
  let basePrice = 0;
  const breakdown: PricingBreakdownItem[] = [];

  units.forEach((unit) => {
    const price = unit.price * (selectionPercentage / 100);
    basePrice += price;
    breakdown.push({ label: `Unit ${unit.unit_id}`, amount: price });
  });

  const totalPrice = basePrice;

  return {
  totalPrice,
  breakdown,
  total: undefined,
};
};
