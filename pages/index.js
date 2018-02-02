import React from "react";
import Layout from "../components/MyLayout.js";
import axios from "axios";
import Home from "../components/cr/Home.js";
import MyLoader from "../components/MyLoader.js";


class ClashRoyale extends React.Component {
  constructor() {
    super();
    this.state = { data: "", loading: true };
  }

  componentDidMount() {
    const url = "https://api.cr-api.com/clan/2GPUC2";

    // in axios access data with .data
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

    if (this.state.loading) {
      return <Layout>
          <div className="loader">
            <MyLoader loading={this.state.loading} />
          </div>
        </Layout>;
    } else {
       return <Layout>
           <div>
             <Home clan={this.state.data} />
           </div>
         </Layout>;
    }
  }
}
export default ClashRoyale;
