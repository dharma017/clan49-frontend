import Head from 'next/head'
import Header from './Header'
import { loadProgressBar } from "axios-progress-bar";

const layoutStyle = {
  // margin: 20,
  padding: 24,
  // border: '1px solid #DDD'
}

const Layout = props => (
  <div id="container" style={layoutStyle}>
    <Head>
      <title>--49 Clan Statistics</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/antd@3/dist/antd.min.css"
      />
    </Head>
    <style jsx global>{`
      body {
        // background-color: red;
      }
      .ant-menu li:nth-child(1):hover{
            background-color: #488af4;
          }
      .ant-menu > li:nth-child(2):hover{
            background-color: rgb(255, 190, 49);
      }
      .ant-menu > li:nth-child(3):hover{
            background-color: #488af4;
      }
      .ant-menu li a:hover{
            color: #fff !important;
      }
      .cr-admission,
      .cr-info,
      .cr-members {
        padding: 10px;
      }
      .thead th {
        font-weight: bold;
      }
      .footer {
        margin-top: 10px;
        font-size : 16px;
        padding: 10px;
      }
      .main {
        padding: 10px;
      }
      .clanbadge {
        width: 64px;
        height: 76px;
        float: left;
      }
      .float-left {
        float: left !important;
      }
      .float-left h1 {
        padding: 0px;
        margin: 0px;
        margin-left: 10px;
      }
      .float-right {
        float: right !important;
      }
      .text-reverse {
        text-align: right;
      }
      .text-white {
        font-weight: bold;
        font-size: large;
      }
      .display-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.1;
      }
      .media {
        display: flex;
        align-items: flex-start;
      }
      .media h4 {
        padding-top: 17px;
      }
      .trophyicon {
        max-height: 50px;
        margin-top: 12px;
        margin-right: 8px;
      }
      .text-danger {
        color: #dc3545 !important;
      }
      .text-muted {
        color: #7a858c !important;
      }
      .text-reverse {
        text-align: right;
      }
      .text-success {
        color: #28a745 !important;
      }
      .text-warning {
        color: #ffc107 !important;
      }
      .h4,
      h4 {
        font-size: 1.5rem;
      }
      .upcoming-container img {
        width: 50px;
        height: 50 px;
      }
      .clan-members {
        margin-top: 20px;
      }
      table tr,
      table th {
        text-align: center !important;
        
      }
      .ant-table-thead th{
        color: #ffffff;
        background : #ffab18 !important;
      }
      .ant-table-title,.ant-card-head {
        color: #ffffff;
          background: #4549a8 !important;
      }
      .ant-card-head-title{
        color: #ffffff !important;
      }
      tr:nth-child(odd)		{ background-color:#f8f6ff; }
      tr:nth-child(even)		{ background-color:#fff; }
    `}</style>

    <Header />
    <div className="main">{props.children}</div>
    <div className="footer">
      <footer>Made with passion and ♥ by drt from --49 Clan.</footer>
    </div>
  </div>
);

export default Layout
