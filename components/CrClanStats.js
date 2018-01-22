import { Card } from "antd";
import { Row, Col } from "antd";
const gridStyle = {
  width: "50%",
  textAlign: "center"
};

const CrClanStats = props => (
  <div>
    <Row gutter={24}>
      <Col className="gutter-row" span={12}>
        <div className="upcoming-container">
          <Card title="Clan Admission">
            <Card.Grid style={gridStyle}>Members</Card.Grid>
            <Card.Grid style={gridStyle}>
              {props.clan.memberCount + " / 50"}
            </Card.Grid>
            <Card.Grid style={gridStyle}>Type</Card.Grid>
            <Card.Grid style={gridStyle}>{props.clan.type}</Card.Grid>
            <Card.Grid style={gridStyle}>Required Trophies</Card.Grid>
            <Card.Grid style={gridStyle}>{props.clan.requiredScore}</Card.Grid>
            <Card.Grid style={gridStyle}>Clan Leader</Card.Grid>
            <Card.Grid style={gridStyle}>N/A</Card.Grid>
            <Card.Grid style={gridStyle}>Required Crowns in Clan Chest </Card.Grid>
            <Card.Grid style={gridStyle}>32</Card.Grid>
          </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div className="upcoming-container">
          <Card title="Clan Info">
            <Card.Grid style={gridStyle}>Location</Card.Grid>
            <Card.Grid style={gridStyle}>{props.clan.location.name}</Card.Grid>
            <Card.Grid style={gridStyle}>Donations Per Week</Card.Grid>
            <Card.Grid style={gridStyle}>{props.clan.donations}</Card.Grid>
            <Card.Grid style={gridStyle}>Clan Chest Status</Card.Grid>
            <Card.Grid style={gridStyle}>
              {props.clan.clanChest.status}
            </Card.Grid>
            <Card.Grid style={gridStyle}>Elders</Card.Grid>
            <Card.Grid style={gridStyle}>N/A</Card.Grid>
            <Card.Grid style={gridStyle}>Co-leaders</Card.Grid>
            <Card.Grid style={gridStyle}>N/A</Card.Grid>
          </Card>
        </div>
      </Col>
    </Row>
  </div>
);
export default CrClanStats;
