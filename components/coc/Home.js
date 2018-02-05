import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { Table, Icon, Divider } from "antd";
import TopBar from "./TopBar.js";
import ClanStats from "./ClanStats.js";
import MemberStats from "./MemberStats.js";

const RowStyle = {
  paddingTop: "10px"
};

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const clan = this.props.clan;

    return <div>
      <TopBar clan={clan} />
      
      <ClanStats clan={clan} />
      
      <MemberStats clan={clan} />
    </div>
  }
}

export default Home;
