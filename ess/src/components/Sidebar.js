import React from "react";
import { Nav } from "react-bootstrap";
import '../assets/css/Sidebar.css'
import WindowDimensions from "../utils/WindowDimensions";

const Sidebar = () => {
  const { height, width } = WindowDimensions();
  return (
    <>
      <Nav className="d-none d-md-block bg-light sidebar"
           activeKey="/home"
           onSelect={selectedKey => alert(`selected ${selectedKey}`)}
           style={{
             height: height,
             width: width * 0.15,
           }}
      >
        <div className="sidebar-sticky"/>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </>
  );
}

export default Sidebar;
