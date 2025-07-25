import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setAvailabilityStatus } from '../redux/slices/landingPageSlice';
import { getMockAvailabilityStatus } from '../utils/availabilityService';
import { Badge, Card, ListGroup } from 'react-bootstrap';

const AvailabilityIndicator: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedUnits = useAppSelector(state => state.landingPage.selectedUnits);
  const availabilityStatus = useAppSelector(state => state.landingPage.availabilityStatus);

  useEffect(() => {
    if (selectedUnits.length > 0) {
      const statusList = getMockAvailabilityStatus(selectedUnits.map(u => u.unit_id));
      dispatch(setAvailabilityStatus(statusList));
    }
  }, [selectedUnits, dispatch]);

  const getBadge = (status: string) => {
    switch (status) {
      case 'available': return <Badge bg="success">Available</Badge>;
      case 'reserved': return <Badge bg="warning">Reserved</Badge>;
      case 'sold': return <Badge bg="danger">Sold</Badge>;
      default: return null;
    }
  };

  return (
    <Card className="mt-3 shadow-sm">
      <Card.Body>
        <Card.Title>Unit Availability</Card.Title>
        <ListGroup>
          {availabilityStatus.map(item => (
            <ListGroup.Item key={item.unitId} className="d-flex justify-content-between">
              <span>Unit #{item.unitId}</span>
              <span>{getBadge(item.status)}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default AvailabilityIndicator;