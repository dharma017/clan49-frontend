import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Chief = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <div className="container">
      <div className="clearfix">
        <div className="clan_box d-flex d-md-none w-100">
          <div className="clearfix">
            <a className="text-white" href="#">
              <img
                src={props.show.clan.badgeUrls.small}
                alt={props.show.clan.badgeUrls.name}
                className="clanbadge rtl-mr-3"
              />
            </a>

            <h4 className="text-white pt-2 float-left">
              <a className="text-white" href="#">
                {props.show.clan.name}
              </a>
            </h4>
            <p className="small text-reverse text-muted">{props.show.tag}</p>

            <p className="text-muted mb-0">{props.show.role}</p>
          </div>
        </div>
      </div>

      <div className="clearfix">
        <div className="clan_box d-flex d-md-none w-100">
          <div className="clearfix">
            <a className="text-white" href="#">
              <img
                src={props.show.league.iconUrls.small}
                alt={props.show.league.iconUrls.name}
                className="clanbadge rtl-mr-3"
              />
            </a>
            <h4 className="text-white pt-2 float-left">
              <a className="text-white" href="#">
                {props.show.league.name}
              </a>
            </h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <table className="table table-inverse">
            <tbody>
              <tr>
                <th colSpan={"666"} className="bg-dark text-muted">
                  Player info
                </th>
              </tr>
              <tr>
                <th className="font-weight-normal">Town Hall Level</th>
                <td className="text-info">{props.show.townHallLevel}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Experience Level</th>
                <td className="text-info">{props.show.expLevel}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Current Trophies</th>
                <td className="text-warning">
                  <span dir="ltr">{props.show.trophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Best Trophies</th>
                <td className="text-muted">
                  <span dir="ltr">{props.show.bestTrophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">War Stars</th>
                <td className="text-info">{props.show.warStars}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Attack Wins</th>
                <td className="text-info">{props.show.warStars}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Defense Wins</th>
                <td className="text-info">{props.show.defenseWins}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Builder Hall Level</th>
                <td className="text-info">{props.show.builderHallLevel}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Versus Trophies</th>
                <td className="text-danger">
                  <span dir="ltr">{props.show.versusTrophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Best Versus Trophies</th>
                <td className="text-danger">
                  <span dir="ltr">{props.show.bestVersusTrophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Versus Battle Wins</th>
                <td>
                  <span dir="ltr">{props.show.versusBattleWins}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Donations</th>
                <td>
                  <span dir="ltr">{props.show.donations}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Donations Received</th>
                <td>
                  <span dir="ltr">{props.show.donationsReceived}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="col-md-6">
          <table className="table table-inverse">
            <tbody>
              <tr>
                <th colSpan={4} className="bg-dark text-muted">
                  Heroes
                </th>
              </tr>

              {props.show.heroes.map((hero, i) => (
                <tr key={i}>
                  <th className="font-weight-normal">{hero.name}</th>
                  <td className="text-success">
                    <span dir="ltr">Level: {hero.level}</span>
                    <br />
                    <small className="text-muted">
                      (<span dir="ltr">Max Level: {hero.maxLevel}</span>)
                    </small>
                    <br />
                    <small>
                      →<span dir="ltr">{hero.village} village</span>
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="col-md-6">
          <table className="table table-inverse">
            <tbody>
              <tr>
                <th colSpan={"666"} className="bg-dark text-muted">
                  Troops
                </th>
              </tr>

              {props.show.troops.map((troop, i) => (
                <tr key={i}>
                  <th className="font-weight-normal">{troop.name}</th>
                  <td className="text-success">
                    <span dir="ltr">Level: {troop.level}</span>
                    <br />
                    <small className="text-muted">
                      (<span dir="ltr">Max Level: {troop.maxLevel}</span>)
                    </small>
                    <br />
                    <small>
                      →<span dir="ltr">{troop.village} village</span>
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="col-md-6">
          <table className="table table-inverse">
            <tbody>
              <tr>
                <th colSpan={"666"} className="bg-dark text-muted">
                  Spells
                </th>
              </tr>

              {props.show.spells.map((spell, i) => (
                <tr key={i}>
                  <th className="font-weight-normal">{spell.name}</th>
                  <td className="text-success">
                    <span dir="ltr">Level: {spell.level}</span>
                    <br />
                    <small className="text-muted">
                      (<span dir="ltr">Max Level: {spell.maxLevel}</span>)
                    </small>
                    <br />
                    <small>
                      →<span dir="ltr">{spell.village} village</span>
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

Chief.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.clashofclans.com/v1/players/%23${id}`, {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNhZmZlNTA5LWM1YWItNGJlMC05M2JlLTQ4YWNjZWMxYjU4ZSIsImlhdCI6MTUxNjQzMjEzNywic3ViIjoiZGV2ZWxvcGVyLzRjODY5NGE4LTlmODctMzAzMy03YTUzLWMwODZjYTY4MGFlMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ5LjEyNi42MC4xODQiLCIxODQuNzMuMjIxLjUwIl0sInR5cGUiOiJjbGllbnQifV19.1_OYDESGQobFNKW-u2wfLeN27M_41n3DlVCSWZ5FCphW67ACt98Yw7x80CuK_Fm1db3IKFnBSsAheB1qiUDIMQ",
      "Content-Type": "application/json"
    }
  });
  const show = await res.json();

  console.log(`Fetched show: ${show}`);

  return { show };
}

export default Chief;