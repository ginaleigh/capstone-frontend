import Nav from "react-bootstrap/Nav";
import "./nav.css";

function AlignmentExample() {
  return (
    <>
      <Nav style={{ backgroundColor: "#e4e2e0" }} className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Homepage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Report Incident</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">FAQ</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;
