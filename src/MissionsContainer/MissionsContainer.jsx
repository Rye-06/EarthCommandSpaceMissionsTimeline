import { MissionCard } from './MissionCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export const MissionsContainer = ({ missions, category = "General" }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Alert variant={"success"}>{category}</Alert>
      </Row>
      <Row className="justify-content-md-center">
        {missions.map((mission) => {
          return (
            <MissionCard
              name={mission.name}
              icon={mission.icon}
              status={mission.status}
              description={mission.description}
            />
          );
        })}
      </Row>
    </Container>
  );
};