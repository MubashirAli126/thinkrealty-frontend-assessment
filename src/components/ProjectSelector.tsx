import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSelectedProject } from '../redux/slices/landingPageSlice';
import { Area, Zone, Project } from '../types';

interface Props {
  areas: Area[];
  zones: Zone[];
  projects: Project[];
}

const ProjectSelector: React.FC<Props> = ({ areas, zones, projects }) => {
  const dispatch = useDispatch();
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

const handleProjectSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const project = projects.find(p => p.project_id === +e.target.value);
    if (project) {
      console.log("Dispatching selected project:", project); // ✅ Add this
      dispatch(setSelectedProject(project));
    }
  };

  return (
    <Form className="p-3">
      <Row>
        <Col xs={12} md={4}>
          <Form.Group controlId="areaSelect">
            <Form.Label>Select Area</Form.Label>
           <Form.Select onChange={(e) => setSelectedArea(+e.target.value)}>
            <option value="">Select Area</option>
            {areas.map((area) => {
                return (
                <option key={area.area_id} value={area.area_id}>
                    {area.area_name_en}
                </option>
                );
            })}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col xs={12} md={4}>
          <Form.Group controlId="zoneSelect">
            <Form.Label>Select Zone</Form.Label>
            <Form.Select
              onChange={(e) => setSelectedZone(+e.target.value)}
              disabled={!selectedArea}
            >
              <option value="">Select Zone</option>
              {zones
                .filter((z) => z.area_id === selectedArea)
                .map((zone) => (
                  <option key={zone.zone_id} value={zone.zone_id}>
                    {zone.zone_name_en}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col xs={12} md={4}>
          <Form.Group controlId="projectSelect">
            <Form.Label>Select Project</Form.Label>
            <Form.Select onChange={handleProjectSelect} disabled={!selectedZone}>
              <option value="">Select Project</option>
              {projects
                .filter((p) => p.zone_id === selectedZone)
                .map((project) => (
                  <option key={project.project_id} value={project.project_id}>
                    {project.project_name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default ProjectSelector;