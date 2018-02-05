import React from "react";
import { Table } from "antd";
import { Row, Col } from "antd";

import { Card, Icon, Avatar, Badge } from 'antd';

const gridStyle = {
    width: "10px",
    textAlign: "center"
};

const RowStyle = {
    paddingTop: '10px'
};

const chestDivStyle = {
    paddingTop: "20px"
};
class CardStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const player = this.props.info;
        console.log(player);

        const dataSourceA = player.heroes.map((hero, index) => ({
            key: index.toString(),
            name: hero.name,
            level: hero.level,
            maxLevel: hero.maxLevel,
            village: hero.village
        }));

        const dataSourceB = player.troops.map((troop, index) => ({
            key: index.toString(),
            name: troop.name,
            level: troop.level,
            maxLevel: troop.maxLevel,
            village: troop.village
        }));

        const dataSourceC = player.spells.map((spell, index) => ({
            key: index.toString(),
            name: spell.name,
            level: spell.level,
            maxLevel: spell.maxLevel,
            village: spell.village
        }));

        const columns = [
            {
                title: "",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "Level",
                dataIndex: "level",
                key: "level"
            },
            {
                title: "Max Level",
                dataIndex: "maxLevel",
                key: "maxLevel"
            },
            {
                title: "Village",
                dataIndex: "village",
                key: "village"
            }
        ];

        return (
            <div>
                <Row gutter={8}>
                    <Col xs={24} sm={24} md={8}>
                        <div style={RowStyle}>
                            <Table
                            size="middle"
                                dataSource={dataSourceB}
                                columns={columns}
                                bordered
                                title={() => "Heroes"}
                                showHeader={true}
                                pagination={{ pageSize: 50, hideOnSinglePage: true }} />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <div style={RowStyle}>
                            <Table
                                size="middle"
                                dataSource={dataSourceC}
                                columns={columns}
                                bordered
                                title={() => "Troops"}
                                showHeader={true}
                                pagination={{ pageSize: 50, hideOnSinglePage: true }} />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <div style={RowStyle}>
                            <Table
                                size="middle"
                                dataSource={dataSourceA}
                                columns={columns}
                                bordered
                                title={() => "Spells"}
                                showHeader={true}
                                pagination={{ pageSize: 50, hideOnSinglePage: true }} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CardStats;
