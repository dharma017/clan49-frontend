import { Card, Row, Col } from "antd";
const gridStyle = {
  width: "10px",
  textAlign: "center"
};

const chestDivStyle = {
  paddingTop: "20px"
};

const ChestCycle = props => (
  <div>
    <Card
      bordered={false}
      hoverable={true}
      type="inner"
      title="Upcoming Chests"
    >
      <Row gutter={8}>
        {props.chestCycle.upcoming.map((chest, i) => (
          // <Card.Grid className="chest-container" key={i} style={gridStyle}>
          <Col xs={{ span: 7, offset: 1 }} sm={{ span: 1, offset: 1 }} key={i}>
            <div style={chestDivStyle} key={i}>
              <img
                src={"https://spy.deckshop.pro/img/chests/" + chest + ".png"}
                alt=""
                className={"chest chest-" + chest}
              />

              {i > 0 ? (
                <span className="text-white h4 text-reverse" dir="ltr">
                  +{i}
                </span>
              ) : (
                ""
              )}
            </div>
          </Col>

          // </Card.Grid>
        ))}

        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 2, offset: 1 }}>
          <div style={chestDivStyle}>
            <img
              src="https://spy.deckshop.pro/img/chests/magical.png"
              alt=""
              className="chest chest-magical"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.chestCycle.magical}
            </span>
          </div>
        </Col>
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 2, offset: 1 }}>
          <div style={chestDivStyle}>
            <img
              src="https://spy.deckshop.pro/img/chests/epic.png"
              alt=""
              className="chest chest-epic"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.chestCycle.epic}
            </span>
          </div>
        </Col>
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 2, offset: 1 }}>
          <div style={chestDivStyle}>
            <img
              src="https://spy.deckshop.pro/img/chests/giant.png"
              alt=""
              className="chest chest-giant"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.chestCycle.giant}
            </span>
          </div>
        </Col>
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 2, offset: 1 }}>
          <div style={chestDivStyle}>
            <img
              src="https://spy.deckshop.pro/img/chests/legendary.png"
              alt=""
              className="chest chest-legendary"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.chestCycle.legendary}
            </span>
          </div>
        </Col>
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 2, offset: 1 }}>
          <div style={chestDivStyle}>
            <img
              src="https://spy.deckshop.pro/img/chests/smc.png"
              alt=""
              className="chest chest-smc"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.chestCycle.superMagical}
            </span>
          </div>
        </Col>
      </Row>
    </Card>
  </div>
);
export default ChestCycle;
