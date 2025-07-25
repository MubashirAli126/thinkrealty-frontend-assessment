import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setAvailabilityStatus } from '../redux/slices/landingPageSlice';
import { getMockAvailabilityStatus } from '../utils/availabilityService';
import { Badge, Card, ListGroup, Pagination } from 'react-bootstrap';

const ITEMS_PER_PAGE = 5;

const AvailabilityIndicator: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedUnits = useAppSelector(state => state.landingPage.selectedUnits);
  const availabilityStatus = useAppSelector(state => state.landingPage.availabilityStatus);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (selectedUnits.length > 0) {
      const statusList = getMockAvailabilityStatus(selectedUnits.map(u => u.unit_id));
      dispatch(setAvailabilityStatus(statusList));
    }
  }, [selectedUnits, dispatch]);

  useEffect(() => {
    setCurrentPage(1); // reset page if data changes
  }, [availabilityStatus]);

  const totalPages = Math.ceil(availabilityStatus.length / ITEMS_PER_PAGE);
  const paginatedData = availabilityStatus.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getBadge = (status: string) => {
    switch (status) {
      case 'available': return <Badge bg="success">Available</Badge>;
      case 'reserved': return <Badge bg="warning">Reserved</Badge>;
      case 'sold': return <Badge bg="danger">Sold</Badge>;
      default: return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const renderPagination = () => (
    <Pagination className="mt-2 justify-content-center">
      <Pagination.Prev onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} />
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} />
    </Pagination>
  );

  return (
    <Card className="mt-3 shadow-sm">
      <Card.Body>
        <Card.Title>Unit Availability</Card.Title>
        <ListGroup>
          {paginatedData.map(item => (
            <ListGroup.Item key={item.unitId} className="d-flex justify-content-between">
              <span>Unit #{item.unitId}</span>
              <span>{getBadge(item.status)}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {totalPages > 1 && renderPagination()}
      </Card.Body>
    </Card>
  );
};

export default AvailabilityIndicator;