export interface Area {
  area_id: number;
  area_name_en: string;
  area_name_ar: string;
}

export interface Zone {
  zone_id: number;
  area_id: number;
  zone_name_en: string;
  zone_name_ar: string;
}

export interface Project {
  project_id: number;
  project_name: string;
  area_id: number;
  zone_id: number;
    completion_status: "under_construction" | "ready" | "off_plan" | "completed" | "ready_to_move";
  min_price: number;
  max_price: number;
  total_units: number;
  available_units: number;
}

export interface Unit {
  unit_id: number;
  project_id: number;
  unit_number: string;
  property_type: 'apartment' | 'villa' | 'townhouse' | 'studio' | 'penthouse';
  bedrooms: number;
  area_sqft: number;
  price: number;
  status: 'available' | 'reserved' | 'sold';
  floor_level: number;
  has_balcony: boolean;
  has_parking: boolean;
}

export interface ActiveUser {
  user_id: number;
  selected_units: number[];
  username: string;
}

export interface UnitConflictState {
  unitId: number;
  hasConflict: boolean;
  conflictType?: string;
  resolved: boolean;
}

export interface ConflictState {
  hasConflict: boolean;
  conflictType?: string;
  resolved: boolean;
  conflictingUnits?: number[]; 
}

export interface PricingBreakdownItem {
  label: string;
  amount: number;
}

export interface PricingResult {
  total: any;
  totalPrice: number;
  breakdown: PricingBreakdownItem[];
}

export type AvailabilityStatus = UnitAvailability[];

export type UnitAvailabilityStatus = 'available' | 'reserved' | 'sold';

export interface UnitAvailability {
  unitId: number;
  status: UnitAvailabilityStatus;
  expiresAt?: string;
}

export interface PersonalizationConfig {
  id: number;
  name: string
  language: 'en' | 'ar';
  focusArea: string;
  englishDescription: string;
  arabicDescription: string;
  recommendations: string[];
}

export interface NotificationState {
  id: string;
  type: 'error' | 'info' | 'success' | 'warning';
  message: string;
}

export interface SelectionMetrics {
  totalUnits: number;
  totalArea: number;
  luxuryUnitsCount: number;
}

export interface ScreenDimensions {
  width: number;
  height: number;
}

export interface PerformanceState {
  fps: number;
  cpuUsage: number;
  memoryUsage: number;
  cpuLoad: number;
}

export interface ValidationError {
  message: string;
  severity: 'low' | 'medium' | 'high';
}

export interface DemandTrigger {
  unitId: number;
  reason: string;
}

export interface LandingPageState {
  [x: string]: any;
  selectedProject: Project | null;
  selectedUnits: Unit[];
  pricingCalculations: PricingResult;
  availabilityStatus: AvailabilityStatus;
  contentPersonalization: PersonalizationConfig;
  countdownTimers: { [unitId: number]: number };
  bulkDiscountEligible: boolean;
  demandTriggers: DemandTrigger[];
  notifications: NotificationState[];
  conflictResolution: ConflictState;
  performanceMetrics: PerformanceState;
  layoutMode: 'standard' | 'compact' | 'performance' | 'focus';
  validationErrors: ValidationError[];
  concurrentUsers: ActiveUser[];
}
