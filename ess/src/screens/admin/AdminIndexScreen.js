import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";

const AdminIndexScreen = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar/>
          </Col>
          <Col xs={10} id="page-content-wrapper">
            test
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminIndexScreen;
