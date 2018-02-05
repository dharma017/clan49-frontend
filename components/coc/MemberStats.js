import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import PlayerRank from "./PlayerRank.js";
import Link from "next/link";
import { Table, Icon, Divider } from "antd";

const RowStyle = {
    paddingTop: '10px'
};

class MemberStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const clan = this.props.clan;

        const memberDataSource = clan.memberList.map((member, index) => ({
            key: index.toString(),
            tag: member.rank,
            league : member.league,
            clanRank: member.clanRank,
            previousClanRank: member.previousClanRank,
            expLevel: member.expLevel,
            role: member.role,
            tag: member.tag,
            name: member.name,
            trophies: member.trophies,
            versusTrophies: member.versusTrophies,
            donations: member.donations,
            donationsReceived: member.donationsReceived,
        }));

        const memberColumns = [
            {
                title: "Rank",
                dataIndex: "rank",
                width: 5,
                defaultSortOrder: "asc",
                sorter: (a, b) => a.clanRank - b.clanRank,
                render: (text, record) => (
                    <span className="h4" dir="ltr">
                        <PlayerRank record={record} />
                    </span>
                )
            },
            {
                title: "League",
                dataIndex: "league",
                width: 5,
                render: (text, record) => (
                    <span>
                        <img
                            src={record.league.iconUrls.tiny}
                            alt=""
                            className="hidden-xxs-down"
                            />
                        <Divider type="horizontal" />
                        {record.league.name}
                    </span>
                )
            },
            {
                title: "Player Tag",
                dataIndex: "tag",
                width: 5,
                render: (text, record) => (
                    <span>
                        {record.role}
                        <Divider type="horizontal" />
                        <Link
                            as={`/c/${record.tag.replace("#", "")}`}
                            href={`/chief?id=${record.tag.replace("#", "")}`}
                        >
                            <a>{record.name}</a>
                        </Link>
                        <Divider type="horizontal" />
                        {record.tag}
                    </span>
                ),
                filters: [
                    {
                        text: "Leader",
                        value: "leader"
                    },
                    {
                        text: "Coleader",
                        value: "coLeader"
                    },
                    {
                        text: "Elder",
                        value: "elder"
                    }
                ],
                filterMultiple: false,
                onFilter: (value, record) => record.role.indexOf(value) === 0,
                sorter: (a, b) => a.name.length - b.name.length
            },
            {
                title: "Exp. Level",
                dataIndex: "expLevel",
                width: 5
            },
            {
                title: "Trophies",
                dataIndex: "trophies",
                width: 5,
                // defaultSortOrder: "descend",
                sorter: (a, b) => a.trophies - b.trophies
            },
            {
                title: "Versus Trophies",
                dataIndex: "versusTrophies",
                width: 5,
                sorter: (a, b) => a.trophies - b.trophies
            },
            {
                title: "Donations Recieved",
                dataIndex: "donationsReceived",
                width: 5,
                render: (text, record) => (
                    <span>
                        {record.donations}
                        <Divider type="horizontal" />
                        → {record.donationsReceived}
                    </span>
                ),
                sorter: (a, b) => a.donations - b.donations
            }
        ];

        return (
            <div className="memberStats" style={{"margin-top":'20px'}}>
                <Table
                    bordered
                    title={() => "Clan Members"}
                    size="small"
                    dataSource={memberDataSource}
                    columns={memberColumns}
                    scroll={{ x: 1300 }}
                    pagination={{ pageSize: 50, hideOnSinglePage: true }}
                />
            </div>
        );
    }
}

export default MemberStats;
