import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Card, Table } from 'react-bootstrap';
import { calculateComplexPricing } from '../utils/calculateComplexPricing';
import { setPricingCalculations } from '../redux/slices/landingPageSlice';

const PricingCalculator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedUnits } = useAppSelector((state) => state.landingPage);
  const pricing = useAppSelector((state) => state.landingPage.pricingCalculations);
  const selectedProject = useAppSelector(state => state.landingPage.selectedProject);
  
  useEffect(() => {
    if (selectedProject && selectedUnits.length > 0) {
      const result = calculateComplexPricing(selectedUnits, selectedProject, 100);
      dispatch(setPricingCalculations(result));
    }
   }, [selectedUnits, selectedProject, dispatch]);

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
            {pricing.breakdown.map((item, idx) => (
              <tr key={idx}>
                <td>{item.label}</td>
                <td>{item.amount.toLocaleString()} SAR </td>
              </tr>
            ))}
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{pricing.totalPrice.toLocaleString()} SAR </strong></td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PricingCalculator;
