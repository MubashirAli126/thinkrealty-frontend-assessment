import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Card, Table, Pagination } from 'react-bootstrap';
import { calculateComplexPricing } from '../utils/calculateComplexPricing';
import { setPricingCalculations } from '../redux/slices/landingPageSlice';

const ITEMS_PER_PAGE = 5;

const PricingCalculator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedUnits } = useAppSelector((state) => state.landingPage);
  const pricing = useAppSelector((state) => state.landingPage.pricingCalculations);
  const selectedProject = useAppSelector(state => state.landingPage.selectedProject);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (selectedProject && selectedUnits.length > 0) {
      const result = calculateComplexPricing(selectedUnits, selectedProject, 100);
      dispatch(setPricingCalculations(result));
    }
  }, [selectedUnits, selectedProject, dispatch]);

  const totalPages = Math.ceil(pricing.breakdown.length / ITEMS_PER_PAGE);
  const paginatedData = pricing.breakdown.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
        <Card.Title>Pricing Calculator</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Label</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.label}</td>
                <td>{item.amount.toLocaleString()} SAR</td>
              </tr>
            ))}
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{pricing.totalPrice.toLocaleString()} SAR</strong></td>
            </tr>
          </tbody>
        </Table>
        {totalPages > 1 && renderPagination()}
      </Card.Body>
    </Card>
  );
};

export default PricingCalculator;