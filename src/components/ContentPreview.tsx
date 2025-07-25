import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { useTranslation } from 'react-i18next';

const ContentPreview: React.FC = () => {
  const {
    selectedProject,
    selectedUnits,
    pricingCalculations,
    contentPersonalization
  } = useAppSelector((state: RootState) => state.landingPage);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <Card className="mt-3 mb-3 shadow-sm">
      <Card.Body>
        <Row>
          <Col>
            <h5>
              {t('selected_project')}: {selectedProject?.project_name || t('not_available')}
            </h5>
            <p>
              {t('units_selected')}: {selectedUnits.length}
            </p>
            <p>
              {t('total_price')}: {pricingCalculations.totalPrice?.toLocaleString?.()} SAR
            </p>
            {/* <hr />
            <p className="text-muted">
              {isArabic
                ? contentPersonalization.arabicDescription
                : contentPersonalization.englishDescription}
            </p> */}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContentPreview;