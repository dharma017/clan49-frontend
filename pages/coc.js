import React from "react";
import Layout from "../components/MyLayout.js";
import axios from "axios";
import Home from "../components/coc/Home.js";
import MyLoader from "../components/MyLoader.js";

class Coc extends React.Component {
  constructor() {
    super();
    this.state = { data: "", loading: true };
  }

  componentDidMount() {
    const url = "http://localhost:5000/clans/YPL9RJ2R";

    // in axios access data with .data
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
    if (this.state.loading) {
      return (
        <Layout>
          <div className="loader">
            <MyLoader loading={this.state.loading} />
          </div>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <div>
            <Home clan={this.state.data} />
          </div>
        </Layout>
      );
    }
  }
}
export default Coc;
