import React from "react";
import { Table, Card } from "antd";
import { Row, Col } from "antd";
import CardStats from "./CardStats.js";

const RowStyle = {
    paddingTop: '10px'
};

class PlayerStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const player = this.props.info;
        const dataSourceA = [
            {
                key: "1",
                col1: "Town Hall Level",
                col2: player.townHallLevel,
                col3: "Experience Level",
                col4: player.expLevel,
                col5: "Current Trophies",
                col6: player.trophies
            },
            {
                key: "2",
                col1: "Current Trophies",
                col2: player.trophies,
                col3: "Best Trophies",
                col4: player.bestTrophies,
                col5: "War Stars",
                col6: player.warStars
            },
            {
                key: "3",
                col1: "Attack Wins",
                col2: player.attackWins,
                col3: "Attack Wins",
                col4: player.defenseWins,
                col5: "Builder Hall Level",
                col6: player.builderHallLevel
            },
            {
                key: "4",
                col1: "Versus Trophies",
                col2: player.versusTrophies,
                col3: "Best Versus Trophies",
                col4: player.bestVersusTrophies,
                col5: "Versus Battle Wins",
                col6: player.versusBattleWins
            },
            {
                key: "5",
                col1: "Donations",
                col2: player.donations,
                col3: "Donations Received",
                col4: player.donationsReceived

            }
        ];

        const columns = [
            {
                title: "Col1",
                dataIndex: "col1",
                key: "col1"
            },
            {
                title: "Col2",
                dataIndex: "col2",
                key: "col2"
            }, {
                title: "col3",
                dataIndex: "col3",
                key: "col3"
            },
            {
                title: "col4",
                dataIndex: "col4",
                key: "col4"
            }, {
                title: "col5",
                dataIndex: "col5",
                key: "col5"
            },
            {
                title: "col6",
                dataIndex: "col6",
                key: "col6"
            }
        ];
        return (
            <div className="playerStats">
                <Row>
                    <Col xs={24} sm={24} md={24}>
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
                </Row>

                <Row>
                    <Col xs={24} sm={24} md={24}>
                        <div style={RowStyle}>
                            <CardStats info={player} />
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default PlayerStats;
