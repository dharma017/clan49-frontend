import { Card } from "antd";
const gridStyle = {
  width: "50%",
  textAlign: "center"
};

const PlayerStats = props => (
  <div>
    <Card title="Player Info">
      <Card.Grid style={gridStyle}>Role</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.clan.role}</Card.Grid>
      <Card.Grid style={gridStyle}>League</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.arena.arena}</Card.Grid>
      <Card.Grid style={gridStyle}>Level</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.stats.level}</Card.Grid>
      <Card.Grid style={gridStyle}>Current Trophies</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.trophies}</Card.Grid>
      <Card.Grid style={gridStyle}>Personal Best</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.stats.maxTrophies}</Card.Grid>
    </Card>
    <Card title="Ladder + Challenges">
      <Card.Grid style={gridStyle}>Wins</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.games.wins}</Card.Grid>
      <Card.Grid style={gridStyle}>Three Crown Wins </Card.Grid>
      <Card.Grid style={gridStyle}>
        {props.player.stats.threeCrownWins}
      </Card.Grid>
      <Card.Grid style={gridStyle}>Losses</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.games.losses}</Card.Grid>
      <Card.Grid style={gridStyle}>Battle Count </Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.games.total}</Card.Grid>
      <Card.Grid style={gridStyle}>Draws</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.games.draws}</Card.Grid>
      <Card.Grid style={gridStyle}>Win Rate </Card.Grid>
      <Card.Grid style={gridStyle}>
        {props.player.games.winsPercent * 100}%
      </Card.Grid>
    </Card>
    <Card title="Clan + Donations">
      <Card.Grid style={gridStyle}>Total Donations </Card.Grid>
      <Card.Grid style={gridStyle}>
        {props.player.stats.totalDonations}
      </Card.Grid>
      <Card.Grid style={gridStyle}>Donations</Card.Grid>
      <Card.Grid style={gridStyle}>{props.player.clan.donations}</Card.Grid>
      <Card.Grid style={gridStyle}>Donations Received </Card.Grid>
      <Card.Grid style={gridStyle}>
        {props.player.clan.donationsReceived}
      </Card.Grid>
    </Card>
  </div>
);
export default PlayerStats;
