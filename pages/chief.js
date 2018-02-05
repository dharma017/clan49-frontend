import React from "react";
import Layout from "../components/MyLayout.js";
import { Row, Col } from "antd";
import axios from "axios";
import MyLoader from "../components/MyLoader.js";
import PlayerStats from "../components/coc/PlayerStats.js";

class Chief extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", loading: true };
  }

  componentDidMount() {
    // console.log(this.props.url.query);
    const { id } = this.props.url.query;
     
    console.log({id});
    const url = `http://localhost:5000/players/${id}`;

    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const { data, loading } = this.state;

    if (this.state.loading) {
      return <Layout>
        <div className="loader">
          <MyLoader loading={this.state.loading} />
        </div>
      </Layout>;
    } else {
      
      return <Layout>
        <div className = "player-stats">
          <PlayerStats info={this.state.data} />
        </div>
      </Layout>;
    }
  }
}
export default Chief;
