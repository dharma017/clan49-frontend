import React from "react";
import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Table, Icon, Divider } from "antd";
import { Row, Col } from "antd";
import ChestCycle from "../components/cr/ChestCycle.js";
import PlayerStats from "../components/cr/PlayerStats.js";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

class RoyalePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", loading: true };
  }

  componentDidMount() {
    // console.log(this.props.url.query);
    const { id } = this.props.url.query;
    // console.log({id});
    const url = `https://api.cr-api.com/player/${id}`;

    axios({
      method: "get",
      url: url,
      headers: {
        "Authorization": "Bearer b8a24f73d4dd45909e8dc97a6e1a8ee89f7072acc2e9418189a8a47b57c1ad77",
        "Content-Type": "application/json"} 
      })
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.data);
    const { data, loading } = this.state;
    
    if (this.state.loading) {
      return <Layout>
          {/* <div>Loading...</div> */}
          <div>
            <ScaleLoader color={"#123abc"} loading={this.state.loading} />
          </div>
        </Layout>;
    } else {
      console.log(data.clan)
      return <Layout>
        <Row>
          <Col span={8}>
            <img
              src={data.clan.badge.image}
              alt=""
              className="clanbadge rtl-mr-3 mt-3"
            />
            <div className="float-left">
              <h1 className="display-4 mb-0 pt-3">{data.name}</h1>
              <p className="small text-reverse text-muted">
                #{data.tag}
              </p>
            </div>
          </Col>
          <Col span={8} offset={8}>
            <div className="float-right py-3 media ml-md-4">
              <img
                src="https://spy.deckshop.pro/img/cr/trophies.png"
                alt=""
                className="trophyicon d-none d-sm-flex rtl-mr-2"
              />

              <div className="media-body">
                <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
                  {data.trophies}
                </h4>
                <p className="small text-muted text-reverse mb-0">
                  <span dir="ltr">{data.stats.maxTrophies}</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div className="upcoming-container">
              <ChestCycle chestCycle={data.chestCycle} />
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div className="upcoming-container">
              <PlayerStats player={this.state.data} />
            </div>
          </Col>
        </Row>
      </Layout>;
    }
  }
}
export default RoyalePlayer;
