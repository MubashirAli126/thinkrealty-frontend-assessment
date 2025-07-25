import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Unit } from '../types';
import {
  addSelectedUnit,
  removeSelectedUnit,
  triggerPriceRecalculation,
  updateConflictState,
} from '../redux/slices/landingPageSlice';

interface UnitMultiSelectProps {
  units: Unit[];
}

const UnitMultiSelect: React.FC<UnitMultiSelectProps> = ({ units }) => {
  const dispatch = useAppDispatch();
  const selectedUnits = useAppSelector((state: { landingPage: { selectedUnits: any; }; }) => state.landingPage.selectedUnits);
  const concurrentUsers = useAppSelector((state: { landingPage: { concurrentUsers: any; }; }) => state.landingPage.concurrentUsers);
  const isUnitSelected = (unitId: number) =>
    selectedUnits.some((u: { unit_id: number; }) => u.unit_id === unitId);

  const handleUnitToggle = (unit: Unit) => {
    if (isUnitSelected(unit.unit_id)) {
      dispatch(removeSelectedUnit(unit.unit_id));
    } else {
      dispatch(addSelectedUnit(unit));
    }

    // Mock conflict and price logic calls (to be implemented)
    dispatch(triggerPriceRecalculation());
    dispatch(updateConflictState({
        // unitId: unit.unit_id,
        hasConflict: false,
        conflictType: 'price',
        resolved: false
    }));
  };

  return (
    <>
      <h5 className="mt-4">Select Units</h5>
      <Row xs={2} md={3} lg={4} className="g-3">
        {units.map((unit) => (
          <Col key={unit.unit_id}>
            <Card
              bg={isUnitSelected(unit.unit_id) ? 'success' : 'light'}
              text={isUnitSelected(unit.unit_id) ? 'white' : 'dark'}
              className="h-100"
              onClick={() => handleUnitToggle(unit)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Body>
                <Card.Title>Unit #{unit.unit_number}</Card.Title>
                <Card.Text>
                  <strong>Type:</strong> {unit.property_type}<br />
                  <strong>Price:</strong> ${unit.price.toLocaleString()}<br />
                  <strong>Status:</strong> {unit.status}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default UnitMultiSelect;