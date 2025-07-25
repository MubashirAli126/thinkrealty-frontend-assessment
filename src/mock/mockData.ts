// mockData.ts

import { Area, Zone, Project, Unit, ActiveUser } from '../types';

export const mockAreas: Area[] = [
  {
    area_id: 1,
    area_name_en: 'Downtown',
    area_name_ar: 'وسط المدينة'
  }
];

export const mockZones: Zone[] = [
  {
    zone_id: 1,
    area_id: 1,
    zone_name_en: 'Central Park',
    zone_name_ar: 'الحديقة المركزية'
  }
];

export const mockProjects: Project[] = [
  {
    project_id: 1,
    project_name: 'ThinkRealty Heights',
    area_id: 1,
    zone_id: 1,
    completion_status: 'under_construction',
    min_price: 50000,
    max_price: 200000,
    total_units: 10,
    available_units: 7
  }
];

export const mockUnits: Unit[] = [
  {
    unit_id: 101,
    project_id: 1,
    unit_number: 'A-101',
    property_type: 'apartment',
    bedrooms: 2,
    area_sqft: 950,
    price: 120000,
    status: 'available',
    floor_level: 2,
    has_balcony: true,
    has_parking: true
  },
  {
    unit_id: 102,
    project_id: 1,
    unit_number: 'A-102',
    property_type: 'studio',
    bedrooms: 1,
    area_sqft: 500,
    price: 80000,
    status: 'reserved',
    floor_level: 1,
    has_balcony: false,
    has_parking: true
  }
];

export const mockActiveUsers: ActiveUser[] = [
  {
    user_id: 1,
    username: 'agent1',
    selected_units: [101]
  }
];
