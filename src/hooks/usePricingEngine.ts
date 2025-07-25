import { Unit, Project } from '../types';

export const usePricingEngine = (
  selectedUnits: Unit[],
  project: Project
) => {
  return {
    total: 0,
    breakdown: [],
  };
};
