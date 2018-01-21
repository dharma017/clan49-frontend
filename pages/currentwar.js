import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Chief = props => (
  <Layout>
    <div className="jumbotron jumbotron-fluid bg-dark py-0 mb-0">
      <div className="container clearfix">
        <div className="media-body">
          <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
            War Status <small>{props.currentwar.state}</small>
          </h4>
          <p className="small text-muted text-reverse mb-0 text-danger">
            <span dir="ltr">
              {props.currentwar.teamSize} vs {props.currentwar.teamSize}
            </span>
          </p>
          <p className="small text-muted text-reverse mb-0 text-danger">
            Preparation Start Time{" "}
            <span dir="ltr">{props.currentwar.preparationStartTime}</span>
          </p>
          <p className="small text-muted text-reverse mb-0 text-danger">
            <span dir="ltr">
              Start time [{props.currentwar.startTime}] - End Time [{
                props.currentwar.endTime
              }]
            </span>
          </p>
        </div>
        <div className="container clearfix">
          <img
            src={props.currentwar.clan.badgeUrls.small}
            alt=""
            className="clanbadge rtl-mr-3 mt-3"
          />
          <div className="float-left">
            <h1 className="text-white display-4 mb-0 pt-3">
              {props.currentwar.clan.name}
            </h1>
            <p className="small text-reverse text-muted">
              {props.currentwar.clan.tag}
            </p>
          </div>

          <div className="float-right py-3 media ml-md-4">
            <p className="small text-muted text-reverse mb-0 text-danger">
              Attacks <span dir="ltr">{props.currentwar.clan.attacks}</span>
            </p>
            <p className="small text-muted text-reverse mb-0 text-danger">
              Stars <span dir="ltr">{props.currentwar.clan.stars}</span>
            </p>
            <p className="small text-muted text-reverse mb-0 text-danger">
              Destruction Percentage
              <span dir="ltr">
                &nbsp;{props.currentwar.clan.destructionPercentage}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="jumbotron jumbotron-fluid bg-dark py-0 mb-0">
      <div className="container clearfix">
        <img
          src={props.currentwar.opponent.badgeUrls.small}
          alt=""
          className="clanbadge rtl-mr-3 mt-3"
        />
        <div className="float-left">
          <h1 className="text-white display-4 mb-0 pt-3">
            {props.currentwar.opponent.name}
          </h1>
          <p className="small text-reverse text-muted">
            {props.currentwar.opponent.tag}
          </p>
        </div>

        <div className="float-right py-3 media ml-md-4">
          <div className="media-body">
            <p className="small text-muted text-reverse mb-0 text-danger">
              Attacks <span dir="ltr">{props.currentwar.opponent.attacks}</span>
            </p>
            <p className="small text-muted text-reverse mb-0 text-danger">
              Stars <span dir="ltr">{props.currentwar.opponent.stars}</span>
            </p>
            <p className="small text-muted text-reverse mb-0 text-danger">
              Destruction Percentage
              <span dir="ltr">
                &nbsp;{props.currentwar.opponent.destructionPercentage}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <table className="table table-inverse table-complex">
        <thead>
          <tr className="font-weight-normal text-muted">
            <th className="font-weight-normal">Clan</th>
          </tr>
        </thead>
        <tbody>
          {props.currentwar.clan.members.map((item, i) => (
            <tr key={i} className="tr-hilite">
              <td className="text-info d-none d-md-table-cell">
                {item.name}
                <br />
                <span className="text-success" dir="ltr">
                  Tag : {item.tag}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Name : {item.name}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  TownHall Level : {item.townhallLevel}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Map Position : {item.mapPosition}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Attacks :{" "}
                  {item.attacks ? item.attacks.length : "No attack yet"}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Opponent Attacks : {item.opponentAttacks}
                </span>
                <br />
                <br />
                <br />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="container">
      <table className="table table-inverse table-complex">
        <thead>
          <tr className="font-weight-normal text-muted">
            <th className="font-weight-normal">Opponent</th>
          </tr>
        </thead>
        <tbody>
          {props.currentwar.opponent.members.map((item, i) => (
            <tr key={i} className="tr-hilite">
              <td className="text-info d-none d-md-table-cell">
                {item.name}
                <br />
                <span className="text-success" dir="ltr">
                  Tag : {item.tag}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Name : {item.name}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  TownHall Level : {item.townhallLevel}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Map Position : {item.mapPosition}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Attacks :{" "}
                  {item.attacks ? item.attacks.length : "No attack yet"}
                </span>
                <br />
                <span className="text-success" dir="ltr">
                  Opponent Attacks : {item.opponentAttacks}
                </span>
                <br />
                <br />
                <br />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
);

Chief.getInitialProps = async function(context) {

  const res = await fetch("https://api.clashofclans.com/v1/clans/"+encodeURIComponent('#YPL9RJ2R')+"/currentwar", {
 
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg5MTQxODAxLTA0YjUtNDMzZi1iMDY5LTNmNDMwYTk4ZWNkNiIsImlhdCI6MTUxNjUyMDIzMywic3ViIjoiZGV2ZWxvcGVyLzRjODY5NGE4LTlmODctMzAzMy03YTUzLWMwODZjYTY4MGFlMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM2LjI1Mi4xNjQuMjQ3Il0sInR5cGUiOiJjbGllbnQifV19.GHWqw0feyfKNJfrLszx9Ora_pbqwcC0vaGiW6z_GCxrRpb8neGW6YCgGoF0AGPxdG9DVSpZ4-qeDduv8xXwYhw",
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  console.log(data);

  console.log(`Show data fetched. Count: ${data}`)

  return {
    currentwar: data
  };
};

export default Chief;