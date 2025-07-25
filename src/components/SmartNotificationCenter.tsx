import React from 'react';
import { Alert } from 'react-bootstrap';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const SmartNotificationCenter: React.FC = () => {
  const {
    conflictResolution,
    selectedUnits,
    selectedProject
  } = useAppSelector((state: RootState) => state.landingPage);

  // No Project selected
  if (!selectedProject) {
    return (
      <Alert variant="warning" className="my-2">
        Please select a project to proceed.
      </Alert>
    );
  }

  // No units selected
  if (selectedUnits.length === 0) {
    return (
      <Alert variant="info" className="my-2">
        No units selected. Please choose units to calculate pricing.
      </Alert>
    );
  }

  // Conflict warning
  if (conflictResolution.hasConflict && !conflictResolution.resolved) {
    return (
      <Alert variant="danger" className="my-2">
        Conflict detected: {conflictResolution.conflictType}. Please review the selected units.
      </Alert>
    );
  }

  return null; // No notification needed
};

export default SmartNotificationCenter;