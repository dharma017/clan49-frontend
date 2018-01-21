import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Chief = props => (
  <Layout>
    <div className="jumbotron jumbotron-fluid bg-dark py-0 mb-0">
      <div className="container clearfix">
        <div className="float-left">
          <h1 className="text-white display-4 mb-0 pt-3">War Log</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <table className="table table-inverse table-complex">
        <thead>
          <tr className="font-weight-normal text-muted">
            <th className="font-weight-normal">
              <span className="d-sm-none">Result</span>
            </th>
            <th className="font-weight-normal d-none d-xs-table-cell">
              End Time
            </th>
            <th className="font-weight-normal">
              Team <br /> <small>size</small>
            </th>
            <th className="font-weight-normal d-none d-md-table-cell">Clan</th>
            <th className="font-weight-normal">Opponent</th>
          </tr>
        </thead>
        <tbody>
          {props.warlog.items.map((item, i) => (
            <tr key={i} className="tr-hilite">
              
              <td className="text-muted">
                <span className="h4" dir="ltr">
                  {item.result}
                </span>
              </td>
              <td className="d-none d-xs-table-cell">{item.endTime}</td>
              <td>
                <span className="badge badge-info text-dark">
                  {item.teamSize}
                </span>
              </td>
              <td className="text-info d-none d-md-table-cell">
                {item.clan.name}
                <br />
                <span className="text-success" dir="ltr">
                  Clan Tag : {item.clan.tag}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Clan Level : {item.clan.clanLevel}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Attacks : {item.clan.attacks}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Attacks : {item.clan.stars}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Destruction Percentage : {item.clan.destructionPercentage}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Experience Earned : {item.clan.expEarned}
                </span>
              </td>
              
              <td className="text-info d-none d-md-table-cell">
                {item.opponent.name}
                <br />
                <span className="text-success" dir="ltr">
                  Clan Tag : {item.opponent.tag}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Clan Level : {item.opponent.clanLevel}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Stars : {item.opponent.stars}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Destruction Percentage : {item.opponent.destructionPercentage}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Experience Earned : {item.opponent.expEarned}
                </span>
              </td>
            </tr>
            
            
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
);

Chief.getInitialProps = async function(context) {

  const res = await fetch("https://api.clashofclans.com/v1/clans/"+encodeURIComponent('#YPL9RJ2R')+"/warlog", {
 
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg5MTQxODAxLTA0YjUtNDMzZi1iMDY5LTNmNDMwYTk4ZWNkNiIsImlhdCI6MTUxNjUyMDIzMywic3ViIjoiZGV2ZWxvcGVyLzRjODY5NGE4LTlmODctMzAzMy03YTUzLWMwODZjYTY4MGFlMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM2LjI1Mi4xNjQuMjQ3Il0sInR5cGUiOiJjbGllbnQifV19.GHWqw0feyfKNJfrLszx9Ora_pbqwcC0vaGiW6z_GCxrRpb8neGW6YCgGoF0AGPxdG9DVSpZ4-qeDduv8xXwYhw",
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  console.log(data);

  console.log(`Show data fetched. Count: ${data.items.length}`)

  return {
    warlog: data
  };
};

export default Chief;