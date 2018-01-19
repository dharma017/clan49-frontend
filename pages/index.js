import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <div className="jumbotron jumbotron-fluid bg-dark py-0 mb-0">
      <div className="container clearfix">
        <img
          src={props.clan.badge.image}
          alt=""
          className="clanbadge rtl-mr-3 mt-3"
        />
        <div className="float-left">
          <h1 className="text-white display-4 mb-0 pt-3">{props.clan.name}</h1>
          <p className="small text-reverse text-muted">#{props.clan.tag}</p>
        </div>

        <div className="float-right py-3 media ml-md-4">
          <img
            src="https://spy.deckshop.pro/img/cr/trophies.png"
            alt=""
            className="trophyicon d-none d-sm-flex rtl-mr-2"
          />

          <div className="media-body">
            <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
              {props.clan.score}
            </h4>
            <p className="small text-muted text-reverse mb-0 text-danger">
              <span dir="ltr">{props.clan.memberCount} / 50</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-2">
        <p className="text-white border p-3 py-2 border-dark mb-0">
          {props.clan.description}
        </p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <table className="table table-inverse">
            <tbody>
              <tr>
                <th colSpan={666} className="bg-dark text-muted">
                  Clan Admission
                </th>
              </tr>
              <tr>
                <th className="font-weight-normal">Members</th>
                <td className="text-danger">
                  <span dir="ltr">{props.clan.memberCount} / 50</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Type</th>
                <td>
                  <span className="badge badge-dark">{props.clan.type}</span>
                </td>
              </tr>
              <tr className="d-xs-none">
                <th className="font-weight-normal">Clan Score</th>
                <td className="text-warning">
                  <span dir="ltr">{props.clan.score}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Required Trophies</th>
                <td className="text-info">
                  <span dir="ltr">{props.clan.requiredScore}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Clan Leader</th>
                <td>
                  <a href="#RCCV8C2">Sujendra shrest</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-inverse">
            <tbody>
              <tr>
                <th colSpan={666} className="bg-dark text-muted">
                  Clan Info
                </th>
              </tr>
              <tr>
                <th className="font-weight-normal">Location</th>
                <td>{props.clan.location.name}</td>
              </tr>

              <tr>
                <th className="font-weight-normal">Donations Per Week</th>
                <td className="text-success">
                  <span dir="ltr">{props.clan.donations}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Clan Chest Status</th>
                <td>
                  <span className="text-muted">
                    {props.clan.clanChest.status}
                  </span>
                </td>
              </tr>
              <tr className="text-muted">
                <th className="font-weight-normal">Elders</th>
                <td>
                  <span dir="ltr">19</span>
                </td>
              </tr>
              <tr className="text-muted">
                <th className="font-weight-normal">Co-leaders</th>
                <td className="text-info">
                  <span dir="ltr">17</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <table className="table table-inverse table-complex">
        <thead>
          <tr className="font-weight-normal text-muted">
            <th className="font-weight-normal">
              <span className="d-sm-none">#</span>
              <span className="d-none d-sm-inline">Rank</span>
            </th>
            <th className="font-weight-normal d-none d-xs-table-cell">Arena</th>
            <th className="font-weight-normal">
              Player <br /> <small>Tag</small>
            </th>
            <th className="font-weight-normal d-none d-md-table-cell">
              Exp. Level
            </th>
            <th className="font-weight-normal">Trophies</th>
            <th className="font-weight-normal d-none d-sm-table-cell">
              Donations <br /> <small>Received</small>
            </th>
            <th className="font-weight-normal d-none d-sm-table-cell">
              Clan Chest
            </th>
          </tr>
        </thead>
        <tbody>
          {props.clan.members.map(member => (
            <tr key={member.tag} className="tr-hilite">
              <td className="text-muted">
                <span className="h4" dir="ltr">
                  {member.rank}
                </span>

                {member.rank < member.previousRank ? (
                  <span className="text-success">
                    ↑<span dir="ltr">1</span>
                  </span>
                ) : (
                  member.rank !=
                  member.previousRank ? (
                    <span className="text-danger">
                      ↓<span dir="ltr">2</span>
                    </span>
                  ) : ''
                )}
              </td>
              <td className="d-none d-xs-table-cell">
                {/* <img
                  src="/img/league/Challenger-1.png"
                  alt=""
                  className="hidden-xxs-down"
                /> */}
                {member.arena.name}
              </td>
              <td>
                <span className="badge badge-info text-dark">
                  {member.role}
                </span>
                <br className="mb-2" />
                <a className="h4" href={"/player/" + member.tag}>
                  {member.name}
                </a>
                <br />
                <small className="text-muted">#{member.tag}</small>
              </td>
              <td className="text-info d-none d-md-table-cell">
                {member.expLevel}
              </td>
              <td className="text-warning">
                <strong dir="ltr">{member.trophies}</strong> <br />
                <small className="text-muted" dir="ltr">
                  2 046
                </small>
              </td>
              <td className="text-muted d-none d-sm-table-cell">
                <span className="text-success" dir="ltr">
                  {member.donations}
                </span>
                <br />
                <small>
                  →<span dir="ltr">{member.donationsReceived}</span>
                </small>
              </td>
              <td className="text-muted d-none d-sm-table-cell">
                <span className="text-white" dir="ltr">
                  {member.clanChestCrowns}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://api.cr-api.com/clan/2GPUC2", {
    headers: {
      Authorization:
        "Bearer b8a24f73d4dd45909e8dc97a6e1a8ee89f7072acc2e9418189a8a47b57c1ad77",
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`)
  console.log(`Show data fetched. Count: ${data}`);

  return {
    clan: data
  };
};

export default Index;
