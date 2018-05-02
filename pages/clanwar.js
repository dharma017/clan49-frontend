import React from "react";
import Layout from "../components/MyLayout.js";
import axios from "axios";
import Home from "../components/cr/Home.js";
import MyLoader from "../components/MyLoader.js";
import ResponsiveEmbed from "react-responsive-embed";


class ClanWar extends React.Component {
  constructor() {
    super();
  }

  render() {

    return <Layout>
        <div className="clan-container">
          <ResponsiveEmbed src='https://docs.google.com/spreadsheets/d/e/2PACX-1vQu8gBfOgPteHFR3Xerj17JaHNDRxpyEUqt1cMS8h6N-h3LdqDaSKoXSoRW8XzImKX_fa0VMuwa2IQM/pubhtml?gid=0&single=true' allowfullscreen />
      </div>
    </Layout>;
  }
}
export default ClanWar;
