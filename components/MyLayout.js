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
    `}</style>

    <Header />

    {props.children}

    <footer>I`m here to stay</footer>
  </div>
);

export default Layout
