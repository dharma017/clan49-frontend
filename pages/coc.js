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
    const url = "https://api.clashofclans.com/v1/clans/"+encodeURIComponent('#YPL9RJ2R');

    // in axios access data with .data
    axios({
      method: "get",
      url: url,
      // withCredentials: true,
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRhMjAxMTY2LWJiNmItNDhjOS04MDI5LTQ4ZThjMDg0YmQ5OCIsImlhdCI6MTUxNjU5MzA0Niwic3ViIjoiZGV2ZWxvcGVyLzRjODY5NGE4LTlmODctMzAzMy03YTUzLWMwODZjYTY4MGFlMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjExMC40NC4xMTMuMTIwIl0sInR5cGUiOiJjbGllbnQifV19.5tdzm8EVhn9fCzWyw04vTxLk_pEdnzwCQbwNLDCcwwqszVk_cdz__9xAeeciKwKQlqRDOlp9UiJ7_laNycrPCQ",
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
