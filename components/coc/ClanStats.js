import React from "react";
import { Table, Card } from "antd";
import { Row, Col } from "antd";

const RowStyle = {
    paddingTop: '10px'
};

class ClanStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const clan = this.props.clan;

        const dataSourceA = [
            {
                key: "1",
                title: "Members",
                value: clan.members + ' / 50 '
            },
            {
                key: "2",
                title: "Type",
                value: clan.type
            },
            {
                key: "3",
                title: "Required Trophies",
                value: clan.requiredTrophies
            },
            {
                key: "4",
                title: "Clan Leader",
                value: "Mesub"
            }
        ];

        const dataSourceB = [
            {
                key: "1",
                title: "Location",
                value: clan.location.name
            },
            {
                key: "2",
                title: "Donations",
                value: clan.warWins
            },
            {
                key: "3",
                title: "Donations Received",
                value: clan.warFrequency
            },
            {
                key: "4",
                title: "Elders",
                value: "N/A"
            },
            {
                key: "5",
                title: "Co-leaders",
                value: "N/A"
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
            <div className="clanStats">
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={12}>
                        <div style={RowStyle}>
                            <Table
                                dataSource={dataSourceA}
                                columns={columns}
                                bordered
                                title={() => "Clan Admission"}
                                showHeader={false}
                                pagination={{ pageSize: 50, hideOnSinglePage: true }} />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12}>
                        <div style={RowStyle}>
                            <Table
                                dataSource={dataSourceB}
                                columns={columns}
                                bordered
                                title={() => "Clan Info"}
                                showHeader={false}
                                pagination={{ pageSize: 50, hideOnSinglePage: true }} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ClanStats;
