import { UnitAvailability } from '../types';

export const getMockAvailabilityStatus = (unitIds: number[]): UnitAvailability[] => {
  return unitIds.map(id => ({
    unitId: id,
    status: Math.random() > 0.5 ? 'available' : 'reserved',
    expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(), // 5 min lock
  }));
};