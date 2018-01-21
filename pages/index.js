import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Table, Icon, Divider } from "antd";
import { Row, Col } from "antd";

const Index = props => (
  <Layout>
    <div className="cr-clan">
      <Row className="cr-row">
        <Col className="cr-admission" span={12}>
          <Table
            size="small"
            columns={props.columns_a}
            dataSource={props.dataSource}
            pagination={{ pageSize: 50, hideOnSinglePage: true }}
          />
        </Col>
        <Col className="cr-info" span={12}>
          <Table
            size="small"
            columns={props.columns_b}
            dataSource={props.dataSource}
            pagination={{ pageSize: 50, hideOnSinglePage: true }}
          />
        </Col>
      </Row>
      <Row className="cr-members">
        <Col span={24}>
          <Table
            dataSource={props.memberDataSource}
            columns={props.memberColumns}
            pagination={{ pageSize: 50, hideOnSinglePage: true }}
            scroll={{ y: 1240 }}
          />
        </Col>
      </Row>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.cr-api.com/clan/2GPUC2", {
    headers: {
      Authorization:
        "Bearer b8a24f73d4dd45909e8dc97a6e1a8ee89f7072acc2e9418189a8a47b57c1ad77",
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();

const memberDataSource = data.members.map((member, index) => ({
  key: index,
  rank: member.rank,
  arena: member.arena.name,
  expLevel: member.expLevel,
  role: member.role,
  tag: member.tag,
  name: member.name,
  trophiesContribution: member.trophies,
  donations: member.donations,
  donationsReceived: member.donationsReceived,
  clanChestCrowns: member.clanChestCrowns
}));

const memberColumns = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    width: "10%",
    sorter: (a, b) => a.rank - b.rank
  },
  {
    title: "Arena",
    dataIndex: "arena",
    key: "arena",
    width: "20%"
  },
  {
    title: "Player Tag",
    dataIndex: "name",
    key: "name",
    width: "20%",
    render: (text, record) => (
      <span>
        {record.role}
        <Divider type="horizontal" />
        <Link as={`/p/${record.tag}`} href={`/player?id=${record.tag}`}>
          <a>{record.name}</a>
        </Link>
        <Divider type="horizontal" />
        #{record.tag}
      </span>
    ),
    filters: [
      {
        text: "Leader",
        value: "leader"
      },
      {
        text: "Coleader",
        value: "coLeader"
      },
      {
        text: "Elder",
        value: "elder"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.role.indexOf(value) === 0
    // sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Exp. Level",
    dataIndex: "expLevel",
    key: "expLevel",
    width: "10%"
  },
  {
    title: "Trophies Contribution",
    dataIndex: "trophiesContribution",
    key: "trophiesContribution",
    width: "20%",
    sorter: (a, b) => a.trophies - b.trophies
  },
  {
    title: "Donations Recieved",
    dataIndex: "donationsReceived",
    key: "donationsReceived",
    width: "10%",
    render: (text, record) => (
      <span>
        {record.donations}
        <Divider type="horizontal" />
        → {record.donationsReceived}
      </span>
    ),
    sorter: (a, b) => a.donationsReceived - b.donationsReceived
  },
  {
    title: "Clan Chest",
    dataIndex: "clanChestCrowns",
    key: "clanChestCrowns",
    width: "10%",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.clanChestCrowns - b.clanChestCrowns
  }
];

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  // console.log(value,row,index);
  // if (index === 0) {
  //   obj.children = obj.children + ' / 50';
  // }
  return obj;
};

const columns_a = [
  {
    title: "Clan Admission",
    colSpan: 2,
    dataIndex: "caKey",
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      return obj;
    }
  },
  {
    title: "Clan Admission",
    colSpan: 0,
    dataIndex: "caValue",
    render: renderContent
  }
];

const columns_b = [
  {
    title: "Clan Info",
    colSpan: 2,
    dataIndex: "ciKey",
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      return obj;
    }
  },
  {
    title: "Clan Info",
    colSpan: 0,
    dataIndex: "ciValue",
    render: renderContent
  }
];

const dataSource = [
  {
    key: "1",
    caKey: "Members",
    caValue: data.memberCount + " / 50",
    ciKey: "Location",
    ciValue: data.location.name
  },
  {
    key: "2",
    caKey: "Type",
    caValue: data.type,
    ciKey: "Donations Per Week",
    ciValue: data.donations 
  },
  {
    key: "3",
    caKey: "Required Trophies",
    caValue: data.requiredScore,
    ciKey: "Clan Chest Status",
    ciValue: data.clanChest.status
  },
  {
    key: "4",
    caKey: "Clan Leader",
    caValue: "Sujen",
    ciKey: "Elders",
    ciValue: 25
  },
  {
    key: "5",
    caKey: "Trophy Range",
    caValue: '688 – 4 082',
    ciKey: "Co-leaders",
    ciValue: 18
  }
];


  // console.log(`Show data fetched. Count: ${data.length}`)
  // console.log(`Show data fetched. Count: ${data}`);

  return { 
     clan: data,
     dataSource : dataSource,
     columns_a : columns_a,
     columns_b : columns_b,
     memberDataSource: memberDataSource, 
     memberColumns: memberColumns
     };
};

export default Index;
