import { Col, Container, Nav, Row } from "react-bootstrap";
import '../../assets/css/Sidebar.css'
import WindowDimensions from "../../utils/WindowDimensions";

const AdminIndexScreen = () => {
  const { width, height } = WindowDimensions();
  return (
    <Container fluid>
      <Row>
        <Col xs={2}
             style={{
               height: height,
               backgroundColor: "black",
             }}
        >
        </Col>
        <Col xs={10}>
          test
        </Col>
      </Row>
    </Container>
  );
}

export default AdminIndexScreen;
