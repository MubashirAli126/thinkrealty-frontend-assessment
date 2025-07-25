import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LandingPageState,
  Unit,
  PricingResult,
  ConflictState,
  AvailabilityStatus, 
  UnitAvailability
} from '../../types';

const initialState: LandingPageState = {
  selectedProject: null,
  selectedUnits: [],
  areas: [],
  pricingCalculations: {
    totalPrice: 0,
    breakdown: [],
    total: undefined
  },
  availabilityStatus: [] as AvailabilityStatus,
  contentPersonalization: {
    language: 'en',
    focusArea: '',
    recommendations: [],
    englishDescription: '',
    arabicDescription: '',
    id: 0,
    name: ''
  },
  countdownTimers: {},
  bulkDiscountEligible: false,
  demandTriggers: [],
  notifications: [],
  conflictResolution: {
    hasConflict: false,
    conflictingUnits: [],
    resolved: false
  },

  layoutMode: 'standard',
  validationErrors: [],
  concurrentUsers: [],
  performanceMetrics: {
    fps: 60,
    cpuUsage: 20,
    memoryUsage: 150,
    cpuLoad: 0
  },
};

const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    addSelectedUnit: (state, action: PayloadAction<Unit>) => {
      state.selectedUnits.push(action.payload);
    },
    removeSelectedUnit: (state, action: PayloadAction<number>) => {
      state.selectedUnits = state.selectedUnits.filter(
        (unit) => unit.unit_id !== action.payload
      );
    },
    triggerPriceRecalculation: (state) => {
      // This could trigger side effects if you use middleware like redux-saga or thunk
      // console.log("Triggering price recalculation...");
    },
    updateConflictState: (state, action: PayloadAction<ConflictState>) => {
      state.conflictResolution = action.payload;
    },
    setPricingCalculations: (state, action: PayloadAction<PricingResult>) => {
      state.pricingCalculations = action.payload;
    },
    setAvailabilityStatus: (state, action: PayloadAction<UnitAvailability[]>) => {
      state.availabilityStatus = action.payload;
    },
    setLayoutMode: (state, action: PayloadAction<'standard' | 'compact' | 'performance' | 'focus'>) => {
      state.layoutMode = action.payload;
    },
  },
});

export const {
  addSelectedUnit,
  removeSelectedUnit,
  triggerPriceRecalculation,
  updateConflictState,
} = landingPageSlice.actions;

export const { setSelectedProject, setPricingCalculations, setAvailabilityStatus, setLayoutMode } = landingPageSlice.actions;
export default landingPageSlice.reducer;
