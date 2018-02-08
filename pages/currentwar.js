import React from "react";
import Layout from "../components/MyLayout.js";
import axios from "axios";
import MyLoader from "../components/MyLoader.js";
import CurrentWarStats from "../components/coc/CurrentWarStats.js";
import CurrentWarHeader from "../components/coc/CurrentWarHeader.js";

class WarLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", loading: true };
  }

  componentDidMount() {
    // console.log(this.props.url.query);
    const { id } = this.props.url.query;
    // console.log({id});
    const url = `http://localhost:5000/clans/YPL9RJ2R/currentwar`;

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

      return <Layout>
        <div>
          <CurrentWarHeader currentwar={data} />
          <CurrentWarStats members={data.clan.members} />
        </div>  
      </Layout>
    }
  }
}
export default WarLog;