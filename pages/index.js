import React from "react";
import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Table, Icon, Divider } from "antd";
import { Row, Col } from "antd";
import PlayerRank from "../components/PlayerRank.js";
import CrClanStats from "../components/CrClanStats.js";

class ClashRoyale extends React.Component {

  static async getInitialProps({ store, req, res }) {
    const resp = await fetch("https://api.cr-api.com/clan/2GPUC2", {
      headers: {
        Authorization:
          "Bearer b8a24f73d4dd45909e8dc97a6e1a8ee89f7072acc2e9418189a8a47b57c1ad77",
        "Content-Type": "application/json"
      }
    });
    console.log("api hit");
    const data = await resp.json();
    return { clan: data };
  }

  render() {
    const memberDataSource = this.props.clan.members.map((member, index) => ({
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

    const memberColumns = [
      {
        title: "Rank",
        dataIndex: "rank",
        width: "1%",
        defaultSortOrder: "asc",
        sorter: (a, b) => a.rank - b.rank,
        render: (text,record) => (
            <span className="h4" dir="ltr">
              <PlayerRank record={record} />
            </span>
        )
      },
      {
        title: "Player Tag",
        dataIndex: "name",
        width: "3%",
        render: (text, record) => (
          <span>
            {record.role}
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
        width: "1%",
        // defaultSortOrder: "descend",
        sorter: (a, b) => a.clanChestCrowns - b.clanChestCrowns
      },
      {
        title: "Arena",
        dataIndex: "arena",
        width: "1%"
      },
      {
        title: "Exp. Level",
        dataIndex: "expLevel",
        width: "1%"
      },
      {
        title: "Trophies",
        dataIndex: "trophiesContribution",
        width: "1%",
        sorter: (a, b) => a.trophies - b.trophies
      },
      {
        title: "Donations Recieved",
        dataIndex: "donationsReceived",
        width: "3%",
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

    const dataSource = [
      {
        key: "1",
        caKey: "Members",
        caValue: this.props.clan.memberCount + " / 50",
        ciKey: "Location",
        ciValue: this.props.clan.location.name
      },
      {
        key: "2",
        caKey: "Type",
        caValue: this.props.clan.type,
        ciKey: "Donations Per Week",
        ciValue: this.props.clan.donations
      },
      {
        key: "3",
        caKey: "Required Trophies",
        caValue: this.props.clan.requiredScore,
        ciKey: "Clan Chest Status",
        ciValue: this.props.clan.clanChest.status
      },
      {
        key: "4",
        caKey: "Clan Leader",
        caValue: "Sujen",
        ciKey: "Elders",
        ciValue: 25
      },
      {
        key: "5",
        caKey: "Trophy Range",
        caValue: "688 – 4 082",
        ciKey: "Co-leaders",
        ciValue: 18
      }
    ];

    return <Layout>
        <div className="clan-container">
          <Row>
            <Col span={8}>
              <img src={this.props.clan.badge.image} alt="" className="clanbadge rtl-mr-3 mt-3" />
              <div className="float-left">
                <h1 className="display-4 mb-0 pt-3">
                  {this.props.clan.name}
                </h1>
                <p className="small text-reverse text-muted">
                  #{this.props.clan.tag}
                </p>
              </div>
            </Col>
            <Col span={8} offset={8}>
              <div className="float-right py-3 media ml-md-4">
                <img src="https://spy.deckshop.pro/img/cr/trophies.png" alt="" className="trophyicon d-none d-sm-flex rtl-mr-2" />

                <div className="media-body">
                  <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
                    {this.props.clan.score}
                  </h4>
                  <p className="small text-muted text-reverse mb-0 text-danger">
                    <span dir="ltr">
                      {this.props.clan.memberCount} / 50
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="pb-2">
                <p className="text-white border p-3 py-2 border-dark mb-0">
                  {this.props.clan.description}
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="cr-clan">
          <div className="clan-stats">
            <CrClanStats clan={this.props.clan} />
          </div>
          <div className="clan-members">
            <Table bordered size="middle" dataSource={memberDataSource} columns={memberColumns} scroll={{ x: 1300 }} pagination={{ pageSize: 50, hideOnSinglePage: true }} />
          </div>
        </div>
      </Layout>;
  }
}
export default ClashRoyale;
