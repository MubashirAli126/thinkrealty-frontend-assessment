import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const ContentPreview: React.FC = () => {
  const {
    selectedProject,
    selectedUnits,
    pricingCalculations,
    contentPersonalization
  } = useAppSelector((state: RootState) => state.landingPage);

  const isArabic = contentPersonalization.language === 'ar';

  return (
    <Card className="mt-3 mb-3 shadow-sm">
      <Card.Body>
        <Row>
          <Col>
            <h5>
              {isArabic ? 'مشروع محدد' : 'Selected Project'}: {selectedProject?.project_name || (isArabic ? 'غير متوفر' : 'N/A')}
            </h5>
            <p>
              {isArabic ? 'عدد الوحدات المختارة' : 'Units Selected'}: {selectedUnits.length}
            </p>
            <p>
              {isArabic ? 'السعر الإجمالي' : 'Total Price'}: {pricingCalculations.total?.toLocaleString?.()} {isArabic ? 'ر.س' : 'SAR'}
            </p>
            <hr />
            <p className="text-muted">
              {isArabic
                ? contentPersonalization.arabicDescription
                : contentPersonalization.englishDescription}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContentPreview;
