import React from "react";
import Layout from "../components/MyLayout.js";
import { Row, Col } from "antd";
import axios from "axios";
import MyLoader from "../components/MyLoader.js";
import { Timeline, Avatar } from 'antd';
import { Popover, Button ,Icon} from 'antd';
import Moment from 'react-moment';
import { Alert } from 'antd';

const RowStyle = {
  paddingTop: '10px'
};

class WarLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", loading: true };
  }

  componentDidMount() {
    // console.log(this.props.url.query);
    const { id } = this.props.url.query;
    // console.log({id});
    const url = `http://139.59.92.130:5000/clans/YPL9RJ2R/warlog`;

    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { data, loading } = this.state;

    if (this.state.loading) {
      return <Layout>
        <div className="loader">
          <MyLoader loading={this.state.loading} />
        </div>
      </Layout>;
    } else {

      if (data.error) {
        return <Layout>
          <div>
            <Alert message="War log not available to public" type="info" />
          </div>
        </Layout>
      } else {
          return <Layout>
            <div style={RowStyle}>
              <Timeline>
                {data.items.map((item, i) => (
                  <div key={i}>
                    <Timeline.Item color={(item.result == 'win') ? 'green' : 'red'}>
                      <p>
                        <Moment format="llll">
                          {item.endTime}
                        </Moment>&nbsp;(<Moment fromNow ago>{item.endTime}</Moment> ago)</p>
                      <p><Popover content={<div>
                        <p>Clan Tag {item.clan.tag}</p>
                        <p>Clan Level {item.clan.clanLevel}</p>
                        <p>Attacks {item.clan.attacks}</p>
                        <p>Stars {item.clan.stars}</p>
                        <p>Destruction Percentage {item.clan.destructionPercentage}</p>
                        <p>Experience Earned {item.clan.expEarned}</p>

                      </div>} title={item.clan.name} trigger="hover">
                        <Avatar src={item.clan.badgeUrls.small} />
                        <Button ghost={false} type="primary">{item.clan.name} <Icon spin={false} type="star" style={{ fontSize: 16, color: '#FFD700' }} />{item.clan.stars} <Icon type="info-circle-o" /></Button>
                      </Popover>

                        <span style={{ 'marginLeft': '20px', 'marginRight': '20px' }}> {item.teamSize} vs {item.teamSize} </span>
                        <Avatar src={item.opponent.badgeUrls.small} />

                        <Popover content={<div>
                          <p>Clan Tag {item.opponent.tag}</p>
                          <p>Clan Level {item.opponent.clanLevel}</p>
                          <p>Stars {item.opponent.stars}</p>
                          <p>Destruction Percentage {item.opponent.destructionPercentage}</p>
                          <p>Experience Earned {item.opponent.expEarned}</p>
                        </div>} title={item.opponent.name} trigger="hover">
                          <Button ghost={true} type="primary">{item.opponent.name} <Icon spin={false} type="star" style={{ fontSize: 16, color: '#08c' }} />{item.opponent.stars} <Icon type="info-circle-o" /></Button>
                        </Popover>
                      </p>
                    </Timeline.Item>
                  </div>
                ))}
              </Timeline>
            </div>
          </Layout>;

      }

      
    }
  }
}
export default WarLog;
