import React from "react";
import { Row, Col } from "antd";
import { PacmanLoader } from "react-spinners";

class MyLoader extends React.Component {
  render() {
    return (
      <div style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }}>
              <PacmanLoader margin={"2px"} color={"#488bf4"} size={25} loading={this.props.loading} />
            </Col>
        </Row>

    </div>);
  }
}

export default MyLoader;