import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Chief = props => (
  <Layout>
    <h1>{data.name}</h1>
    <div className="container">
      <div className="clearfix">
        <div className="clan_box d-flex d-md-none w-100">
          <div className="clearfix">
            <a className="text-white" href="#">
              <img
                src={data.clan.badgeUrls.small}
                alt={data.clan.badgeUrls.name}
                className="clanbadge rtl-mr-3"
              />
            </a>

            <h4 className="text-white pt-2 float-left">
              <a className="text-white" href="#">
                {data.clan.name}
              </a>
            </h4>
            <p className="small text-reverse text-muted">{data.tag}</p>

            <p className="text-muted mb-0">{data.role}</p>
          </div>
        </div>
      </div>

      <div className="clearfix">
        <div className="clan_box d-flex d-md-none w-100">
          <div className="clearfix">
            <a className="text-white" href="#">
              <img
                src={data.league.iconUrls.small}
                alt={data.league.iconUrls.name}
                className="clanbadge rtl-mr-3"
              />
            </a>
            <h4 className="text-white pt-2 float-left">
              <a className="text-white" href="#">
                {data.league.name}
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
                <td className="text-info">{data.townHallLevel}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Experience Level</th>
                <td className="text-info">{data.expLevel}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Current Trophies</th>
                <td className="text-warning">
                  <span dir="ltr">{data.trophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Best Trophies</th>
                <td className="text-muted">
                  <span dir="ltr">{data.bestTrophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">War Stars</th>
                <td className="text-info">{data.warStars}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Attack Wins</th>
                <td className="text-info">{data.warStars}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Defense Wins</th>
                <td className="text-info">{data.defenseWins}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Builder Hall Level</th>
                <td className="text-info">{data.builderHallLevel}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Versus Trophies</th>
                <td className="text-danger">
                  <span dir="ltr">{data.versusTrophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Best Versus Trophies</th>
                <td className="text-danger">
                  <span dir="ltr">{data.bestVersusTrophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Versus Battle Wins</th>
                <td>
                  <span dir="ltr">{data.versusBattleWins}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Donations</th>
                <td>
                  <span dir="ltr">{data.donations}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Donations Received</th>
                <td>
                  <span dir="ltr">{data.donationsReceived}</span>
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

              {data.heroes.map((hero, i) => (
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

              {data.troops.map((troop, i) => (
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

              {data.spells.map((spell, i) => (
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

  const res = await fetch(`http://139.59.92.130:5000/players/${id}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const show = await res.json();

  console.log(`Fetched show: ${show}`);

  return { show };
}

export default Chief;
