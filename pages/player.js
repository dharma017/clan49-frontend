import React from "react";
import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Table, Icon, Divider } from "antd";
import { Row, Col } from "antd";
import ChestCycle from "../components/cr/ChestCycle.js";
import PlayerStats from "../components/cr/PlayerStats.js";

class RoyalePlayer extends React.Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    console.log({id})
    const resp = await fetch(`https://api.cr-api.com/player/${id}`, {
        headers: {
          Authorization:
            "Bearer b8a24f73d4dd45909e8dc97a6e1a8ee89f7072acc2e9418189a8a47b57c1ad77",
          "Content-Type": "application/json"
        }
      })
  
    console.log("detail page api hit");
    const data = await resp.json();
    return { show : data};
  }

  render() {
    // console.log(this.props.show);
    return <Layout>
        <Row>
          <Col span={8}>
            <img src={this.props.show.clan.badge.image} alt="" className="clanbadge rtl-mr-3 mt-3" />
            <div className="float-left">
              <h1 className="display-4 mb-0 pt-3">
                {this.props.show.name}
              </h1>
              <p className="small text-reverse text-muted">
                #{this.props.show.tag}
              </p>
            </div>
          </Col>
          <Col span={8} offset={8}>
            <div className="float-right py-3 media ml-md-4">
              <img src="https://spy.deckshop.pro/img/cr/trophies.png" alt="" className="trophyicon d-none d-sm-flex rtl-mr-2" />

              <div className="media-body">
                <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
                  {this.props.show.trophies}
                </h4>
                <p className="small text-muted text-reverse mb-0">
                  <span dir="ltr">{this.props.show.stats.maxTrophies}</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div className="upcoming-container">
              <ChestCycle chestCycle={this.props.show.chestCycle} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div className="upcoming-container">
              <PlayerStats player={this.props.show} />
            </div>
          </Col>
        </Row>

      </Layout>;
  }
}
export default RoyalePlayer;
