import { Unit, ActiveUser } from '../types';

export const useConflictDetection = (
  unit: Unit,
  selectedUnits: Unit[],
  concurrentUsers: ActiveUser[]
) => {
  const hasConflict = false;
  const reason = '';

  return { hasConflict, reason };
};
