import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setLayoutMode } from '../redux/slices/landingPageSlice';

const AdaptiveLayoutManager: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedUnits = useAppSelector((state) => state.landingPage.selectedUnits);
  const countdownTimers = useAppSelector((state) => state.landingPage.countdownTimers);
  const performanceMetrics = useAppSelector((state) => state.landingPage.performanceMetrics); // assume exists

  useEffect(() => {
    let newMode: 'standard' | 'compact' | 'performance' | 'focus' = 'standard';

    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      newMode = 'compact';
    } else if (selectedUnits.length > 5) {
      newMode = 'focus';
    } else if (performanceMetrics?.cpuLoad > 80) {
      newMode = 'performance';
    }

    dispatch(setLayoutMode(newMode));
  }, [selectedUnits, countdownTimers, performanceMetrics]);

  return null;
};

export default AdaptiveLayoutManager;