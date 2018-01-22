import { Card } from "antd";
const gridStyle = {
  width: "7.14%",
  textAlign: "center"
};

const ChestCycle = props => (
  <div>
    <Card title="Upcoming Chests">
      {props.chestCycle.upcoming.map((chest, i) => (
        <Card.Grid className="chest-container" key={i} style={gridStyle}>
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
        </Card.Grid>
      ))}

      <Card.Grid className="chest-container" style={gridStyle}>
        <img
          src="https://spy.deckshop.pro/img/chests/magical.png"
          alt=""
          className="chest chest-magical"
        />

        <span className="text-white h4 text-reverse" dir="ltr">
          +{props.chestCycle.magical}
        </span>
      </Card.Grid>

      <Card.Grid className="chest-container" style={gridStyle}>
        <img
          src="https://spy.deckshop.pro/img/chests/epic.png"
          alt=""
          className="chest chest-epic"
        />

        <span className="text-white h4 text-reverse" dir="ltr">
          +{props.chestCycle.epic}
        </span>
      </Card.Grid>

      <Card.Grid className="chest-container" style={gridStyle}>
        <img
          src="https://spy.deckshop.pro/img/chests/giant.png"
          alt=""
          className="chest chest-giant"
        />

        <span className="text-white h4 text-reverse" dir="ltr">
          +{props.chestCycle.giant}
        </span>
      </Card.Grid>

      <Card.Grid className="chest-container" style={gridStyle}>
        <img
          src="https://spy.deckshop.pro/img/chests/legendary.png"
          alt=""
          className="chest chest-legendary"
        />

        <span className="text-white h4 text-reverse" dir="ltr">
          +{props.chestCycle.legendary}
        </span>
      </Card.Grid>

      <Card.Grid className="chest-container" style={gridStyle}>
        <img
          src="https://spy.deckshop.pro/img/chests/smc.png"
          alt=""
          className="chest chest-smc"
        />

        <span className="text-white h4 text-reverse" dir="ltr">
          +{props.chestCycle.superMagical}
        </span>
      </Card.Grid>
    </Card>
  </div>
);
export default ChestCycle;
