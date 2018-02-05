import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import Link from "next/link";
import { Tag } from 'antd';
import { Table, Icon, Divider } from "antd";
import PlayerRank from "./PlayerRank.js";
import CrClanStats from "./CrClanStats.js";


const RowStyle = {
  paddingTop: "10px"
};

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clan = this.props.clan;
    // if (!clan) {
    //   return <p>No data</p>;
    // }
   
    const memberDataSource = clan.members.map((member, index) => ({
      key: index.toString(),
      rank: member.rank,
      previousRank: member.previousRank,
      arena: member.arena.name,
      expLevel: member.expLevel,
      role: member.role,
      tag: member.tag,
      name: member.name,
      trophiesContribution: member.trophies,
      donations: member.donations,
      donationsReceived: member.donationsReceived,
      clanChestCrowns: member.clanChestCrowns
    }));

    
    let clanStat = {
      'coLeaderCount' : 0,
      'elderCount' : 0,
      'leaderName' : '',
    };

    memberDataSource.forEach((member, index) => {
      if (member.role === "coLeader") {
        clanStat.coLeaderCount++;
      }

      if (member.role === "elder") {
        clanStat.elderCount++;
      }

      if (member.role === "leader") {
        clanStat.leaderName = member.name;
      }
    });

    console.log(clanStat);

    const memberColumns = [
      {
        title: "Rank",
        dataIndex: "rank",
        width: 5,
        defaultSortOrder: "asc",
        sorter: (a, b) => a.rank - b.rank,
        render: (text, record) => (
          <span className="h4" dir="ltr">
            <PlayerRank record={record} />
          </span>
        )
      },
      {
        title: "Player Tag",
        dataIndex: "name",
        width: 5,
        render: (text, record) => (
          <span>
            {/* {record.role} */}
            {(record.role === 'coLeader') && <Tag color="#2db7f5">{record.role} </Tag>}
            {(record.role === 'elder') && <Tag color="#87d068">{record.role}</Tag>}
            {(record.role === 'leader') && <Tag color="#108ee9">{record.role}</Tag>}
            {(record.role === 'member') && <Tag color="#f50">{record.role}</Tag>}
            <Divider type="horizontal" />
            <Link as={`/p/${record.tag}`} href={`/player?id=${record.tag}`}>
              <a>{record.name}</a>
            </Link>
            <Divider type="horizontal" />
            #{record.tag}
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
        title: "Clan Chest",
        dataIndex: "clanChestCrowns",
        width: 5,
        // defaultSortOrder: "descend",
        sorter: (a, b) => a.clanChestCrowns - b.clanChestCrowns
      },
      {
        title: "Arena",
        dataIndex: "arena",
        width: 5
      },
      {
        title: "Exp. Level",
        dataIndex: "expLevel",
        width: 5
      },
      {
        title: "Trophies",
        dataIndex: "trophiesContribution",
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
        sorter: (a, b) => a.donationsReceived - b.donationsReceived
      }
    ];

    return (
    <div>
        <div className="clan-container">
          <Row>
            <Col xs={{ span: 12 }} sm={{ span: 8 }}>
              <img
                src={clan.badge.image}
                alt=""
                className="clanbadge rtl-mr-3 mt-3"
              />
              <div className="float-left">
                <h1 className="display-4 mb-0 pt-3">{clan.name}</h1>
                <p className="small text-reverse text-muted">#{clan.tag}</p>
              </div>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8, offset: 8 }}>
              <div className="float-right py-3 media ml-md-4">
                <img
                  src="https://spy.deckshop.pro/img/cr/trophies.png"
                  alt=""
                  className="trophyicon d-none d-sm-flex rtl-mr-2"
                />

                <div className="media-body">
                  <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
                    {clan.score}
                  </h4>
                  <p className="small text-muted text-reverse mb-0 text-danger">
                    <span dir="ltr">{clan.memberCount} / 50</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="pb-2">
                <p className="text-white border p-3 py-2 border-dark mb-0"> {clan.description}
                </p>
                {clan.clanChest.status === 'active' && <span>
                  Collect <em style={{ "color": 'red', 'font-size': '12px' }}>{(parseInt(1600 / clan.memberCount)) + " crowns"}</em> for the Clan Chest event.
                    </span>}
                
              </div>
            </Col>
          </Row> 
        </div>
        <div className="cr-clan">
          <div className="clan-stats">
            <CrClanStats clan={clan} extras={clanStat}/>
          </div>
          <div className="clan-members">
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
        </div>
        </div>
    
    )
  }
}

export default Home;
