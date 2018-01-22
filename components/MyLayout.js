import Head from 'next/head'
import Header from './Header'

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
      }
      .clan-container {
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
      .clan-members{
        margin-top : 20px;
      }
      table tr, table th {
        text-align: center !important;
      }
    `}</style>

    <Header />

    {props.children}

    <div className="footer">
      <footer>Made with passion and ♥ by drt from --49 Clan.</footer>
    </div>
  </div>
);

export default Layout
