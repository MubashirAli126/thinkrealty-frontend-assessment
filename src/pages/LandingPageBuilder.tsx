import React from 'react';
import ProjectSelector from '../components/ProjectSelector';
import UnitMultiSelect from '../components/UnitMultiSelect';
import PricingCalculator from '../components/PricingCalculator';
import AvailabilityIndicator from '../components/AvailabilityIndicator';
import ContentPreview from '../components/ContentPreview';
import SmartNotificationCenter from '../components/SmartNotificationCenter';
import AdaptiveLayoutManager from '../components/AdaptiveLayoutManager';
import { mockAreas, mockZones, mockProjects, mockUnits } from '../mock/mockData';
const LandingPageBuilder: React.FC = () => {
  return (
    <>
     <SmartNotificationCenter />
      <div className="container py-4">
        <h2>Landing Page Builder</h2>

        <div className="row">
          <div className="col-md-6">
            <ProjectSelector
                areas={mockAreas}
                zones={mockZones}
                projects={mockProjects}
            />
            </div>
            <div className="col-md-6">
            <ContentPreview />
            {/* <AdaptiveLayoutManager /> */}
          </div>
            <div className="col-md-12">
            <UnitMultiSelect units={mockUnits} />
             </div>
             <div className="col-md-6">
           
            <PricingCalculator />
          </div>
          <div className="col-md-6">
             <AvailabilityIndicator />
            {/* <ContentPreview /> */}
            <AdaptiveLayoutManager />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageBuilder;