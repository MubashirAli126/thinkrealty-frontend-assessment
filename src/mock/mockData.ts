// mockData.ts

import { Area, Zone, Project, Unit, ActiveUser } from '../types';

export const mockAreas: Area[] = [
  { area_id: 1, area_name_en: 'Downtown', area_name_ar: 'وسط المدينة' },
  { area_id: 2, area_name_en: 'Uptown', area_name_ar: 'الضاحية العليا' },
  { area_id: 3, area_name_en: 'Harbor View', area_name_ar: 'منظر الميناء' },
  { area_id: 4, area_name_en: 'Green Acres', area_name_ar: 'المروج الخضراء' }
];

export const mockZones: Zone[] = [
  { zone_id: 1, area_id: 1, zone_name_en: 'Central Park', zone_name_ar: 'الحديقة المركزية' },
  { zone_id: 2, area_id: 2, zone_name_en: 'Skyline', zone_name_ar: 'الأفق' },
  { zone_id: 3, area_id: 3, zone_name_en: 'Marina Bay', zone_name_ar: 'مارينا باي' },
  { zone_id: 4, area_id: 4, zone_name_en: 'Sunset Hills', zone_name_ar: 'تلال الغروب' }
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
  },
  {
    project_id: 2,
    project_name: 'Skyview Residences',
    area_id: 2,
    zone_id: 2,
    completion_status: 'completed',
    min_price: 60000,
    max_price: 220000,
    total_units: 8,
    available_units: 3
  },
  {
    project_id: 3,
    project_name: 'Marina Pearl Towers',
    area_id: 3,
    zone_id: 3,
    completion_status: 'ready_to_move',
    min_price: 70000,
    max_price: 250000,
    total_units: 5,
    available_units: 1
  },
  {
    project_id: 4,
    project_name: 'Greenview Apartments',
    area_id: 4,
    zone_id: 4,
    completion_status: 'under_construction',
    min_price: 45000,
    max_price: 150000,
    total_units: 6,
    available_units: 5
  }
];

export const mockUnits: Unit[] = [
  // Project 1
  { unit_id: 101, project_id: 1, unit_number: 'A-101', property_type: 'apartment', bedrooms: 2, area_sqft: 950, price: 120000, status: 'available', floor_level: 2, has_balcony: true, has_parking: true },
  { unit_id: 102, project_id: 1, unit_number: 'A-102', property_type: 'studio', bedrooms: 1, area_sqft: 500, price: 80000, status: 'reserved', floor_level: 1, has_balcony: false, has_parking: true },
  { unit_id: 103, project_id: 1, unit_number: 'A-103', property_type: 'apartment', bedrooms: 3, area_sqft: 1100, price: 150000, status: 'available', floor_level: 3, has_balcony: true, has_parking: true },
  { unit_id: 104, project_id: 1, unit_number: 'A-104', property_type: 'apartment', bedrooms: 2, area_sqft: 920, price: 118000, status: 'sold', floor_level: 2, has_balcony: false, has_parking: true },

  // Project 2
  { unit_id: 201, project_id: 2, unit_number: 'B-201', property_type: 'apartment', bedrooms: 2, area_sqft: 1000, price: 140000, status: 'available', floor_level: 4, has_balcony: true, has_parking: false },
  { unit_id: 202, project_id: 2, unit_number: 'B-202', property_type: 'studio', bedrooms: 1, area_sqft: 600, price: 90000, status: 'available', floor_level: 2, has_balcony: true, has_parking: false },
  { unit_id: 203, project_id: 2, unit_number: 'B-203', property_type: 'apartment', bedrooms: 3, area_sqft: 1300, price: 180000, status: 'reserved', floor_level: 5, has_balcony: true, has_parking: true },

  // Project 3
  { unit_id: 301, project_id: 3, unit_number: 'C-301', property_type: 'apartment', bedrooms: 2, area_sqft: 1050, price: 160000, status: 'available', floor_level: 3, has_balcony: true, has_parking: true },
  { unit_id: 302, project_id: 3, unit_number: 'C-302', property_type: 'penthouse', bedrooms: 4, area_sqft: 2000, price: 250000, status: 'sold', floor_level: 6, has_balcony: true, has_parking: true },
  { unit_id: 303, project_id: 3, unit_number: 'C-303', property_type: 'apartment', bedrooms: 2, area_sqft: 1000, price: 165000, status: 'reserved', floor_level: 2, has_balcony: true, has_parking: false },

  // Project 4
  { unit_id: 401, project_id: 4, unit_number: 'D-401', property_type: 'apartment', bedrooms: 2, area_sqft: 980, price: 110000, status: 'available', floor_level: 2, has_balcony: true, has_parking: true },
  { unit_id: 402, project_id: 4, unit_number: 'D-402', property_type: 'studio', bedrooms: 1, area_sqft: 450, price: 65000, status: 'available', floor_level: 1, has_balcony: false, has_parking: false },
  { unit_id: 404, project_id: 4, unit_number: 'D-404', property_type: 'apartment', bedrooms: 2, area_sqft: 950, price: 100000, status: 'sold', floor_level: 2, has_balcony: false, has_parking: true },

  // Extra Units
  { unit_id: 105, project_id: 1, unit_number: 'A-105', property_type: 'apartment', bedrooms: 1, area_sqft: 650, price: 95000, status: 'available', floor_level: 1, has_balcony: true, has_parking: false },
  { unit_id: 106, project_id: 1, unit_number: 'A-106', property_type: 'apartment', bedrooms: 2, area_sqft: 970, price: 122000, status: 'reserved', floor_level: 2, has_balcony: true, has_parking: true },
  { unit_id: 405, project_id: 4, unit_number: 'D-405', property_type: 'apartment', bedrooms: 1, area_sqft: 600, price: 70000, status: 'available', floor_level: 1, has_balcony: true, has_parking: false },
];

export const mockActiveUsers: ActiveUser[] = [
  { user_id: 1, username: 'agent1', selected_units: [101, 103, 203] },
  { user_id: 2, username: 'agent2', selected_units: [301, 402] }
];
