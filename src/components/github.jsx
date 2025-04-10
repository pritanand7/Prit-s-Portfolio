import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", color:"#000000"}}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", color: "#000000"}}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="pritanand7"
        blockSize={18}
        blockMargin={4}
        color="#000000"
        fontSize={16}
        showWeekdayLabels={true}
       
      />
    </Row>
  );
} 

export default Github;