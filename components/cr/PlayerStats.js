import React from "react";
import { Table, Card } from "antd";
import { Row, Col } from "antd";

const RowStyle = {
  paddingTop : '10px'
};

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

      const dataSourceA = [
      {
        key: "1",
        title: "Role",
        value: this.props.player.clan.role
      },
      {
        key: "2",
        title: "League",
        value: this.props.player.arena.arena
      },
      {
        key: "3",
        title: "Level",
        value: this.props.player.stats.level
      },
      {
        key: "4",
        title: "Current Trophies",
        value: this.props.player.trophies
      },
      {
        key: "5",
        title: "Personal Best",
        value: this.props.player.stats.maxTrophies
      }
    ];

    const dataSourceB = [
      {
        key: "1",
        title: "Total Donations",
        value: this.props.player.stats.totalDonations
      },
      {
        key: "2",
        title: "Donations",
        value: this.props.player.clan.donations
      },
      {
        key: "3",
        title: "Donations Received",
        value: this.props.player.clan.donationsReceived
      }
    ];

    const dataSourceC = [
      {
        key: "1",
        title: "Wins",
        value: this.props.player.games.wins
      },
      {
        key: "2",
        title: "Three Crown Wins",
        value: this.props.player.stats.threeCrownWins
      },
      {
        key: "3",
        title: "Losses",
        value: this.props.player.games.losses
      },{
        key: "4",
        title: "Battle Count",
        value: this.props.player.games.total
      },
      {
        key: "5",
        title: "Draws",
        value: this.props.player.games.draws
      },
      {
        key: "6",
        title: "Win Rate",
        value: this.props.player.games.winPercent * 100 + '%'
      }
    ];
    
    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Value",
        dataIndex: "value",
        key: "value"
      }
    ];
    
    return (
      <div className="playerStats">
        <Row gutter={8}>
         <Col xs={24} sm={24} md={8}>
         <div style={RowStyle}>
          <Table
          dataSource={dataSourceA}
          columns={columns}
          bordered
          title={() => "Player Info"}
          showHeader={false}
          pagination={{ pageSize: 50, hideOnSinglePage: true }} />
          </div>
          </Col>
         <Col xs={24} sm={24} md={8}>
          <div style={RowStyle}>
          <Table
          dataSource={dataSourceB}
          columns={columns}
          bordered
          title={() => "Clan + Donations"}
          showHeader={false}
          pagination={{ pageSize: 50, hideOnSinglePage: true }} />
          </div>
          </Col>
          <Col xs={24} sm={24} md={8}>
          <div style={RowStyle}>
          <Table
          dataSource={dataSourceC}
          columns={columns}
          bordered
          title={() => "Ladder + Challenges"}
          showHeader={false}
          pagination={{ pageSize: 50, hideOnSinglePage: true }} />
          </div>
          </Col>
         </Row>
      </div>
    );
  }
}

export default PlayerStats;
