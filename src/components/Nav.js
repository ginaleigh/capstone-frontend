import Nav from "react-bootstrap/Nav";

function AlignmentExample() {
  return (
    <>
      <Nav style={{ backgroundColor: "#e4e2e0" }} className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link style={{ color: "#494440" }}href="/home">Homepage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "#494440" }}target="_blank" href="https://www.transitchicago.com/speakup/#how-to-report">
            Report Incident
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "#494440" }}eventKey="link-2">FAQ</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;
