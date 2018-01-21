import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Coc = props => (
  <Layout>
    <div className="jumbotron jumbotron-fluid bg-dark py-0 mb-0">
      <div className="container clearfix">
        <img
          src={props.clan.badgeUrls.small}
          alt=""
          className="clanbadge rtl-mr-3 mt-3"
        />
        <div className="float-left">
          <h1 className="text-white display-4 mb-0 pt-3">{props.clan.name}</h1>
          <p className="small text-reverse text-muted">{props.clan.tag}</p>
        </div>

        <div className="float-right py-3 media ml-md-4">
          {/* <img
            src="https://spy.deckshop.pro/img/cr/trophies.png"
            alt=""
            className="trophyicon d-none d-sm-flex rtl-mr-2"
          /> */}

          <div className="media-body">
            <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
              Clan Level {props.clan.clanLevel}
            </h4>
            <p className="small text-muted text-reverse mb-0 text-danger">
              <span dir="ltr">{props.clan.members} / 50 Members</span>
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
                  <span dir="ltr">{props.clan.members} / 50</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Type</th>
                <td>
                  <span className="badge badge-dark">{props.clan.type}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Required Trophies</th>
                <td className="text-info">
                  <span dir="ltr">{props.clan.requiredTrophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Clan Leader</th>
                <td>
                  <Link as={`/c/Y82P99CR`} href={`/chief?id=Y82P99CR`}>
                    <a>Mesub</a>
                  </Link>
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
                <th className="font-weight-normal">War Wins</th>
                <td className="text-success">
                  <span dir="ltr">{props.clan.warWins}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">War Frequency</th>
                <td>
                  <span className="text-muted">{props.clan.warFrequency}</span>
                </td>
              </tr>
              <tr className="text-muted">
                <th className="font-weight-normal">Elders</th>
                <td>
                  <span dir="ltr">N/a</span>
                </td>
              </tr>
              <tr className="text-muted">
                <th className="font-weight-normal">Co-leaders</th>
                <td className="text-info">
                  <span dir="ltr">N/a</span>
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
            <th className="font-weight-normal d-none d-xs-table-cell">
              League
            </th>
            <th className="font-weight-normal">
              Player <br /> <small>Tag</small>
            </th>
            <th className="font-weight-normal d-none d-md-table-cell">
              Exp. Level
            </th>
            <th className="font-weight-normal">Trophies</th>
            <th className="font-weight-normal">Versus Trophies</th>
            <th className="font-weight-normal d-none d-sm-table-cell">
              Donations <br /> <small>Received</small>
            </th>
            {/* <th className="font-weight-normal d-none d-sm-table-cell">
              Clan Chest
            </th> */}
          </tr>
        </thead>
        <tbody>
          {props.clan.memberList.map(member => (
            <tr key={member.tag} className="tr-hilite">
              <td className="text-muted">
                <span className="h4" dir="ltr">
                  {member.clanRank}
                </span>

                {member.clanRank < member.previousClanRank ? (
                  <span className="text-success">
                    ↑<span dir="ltr">&nbsp;</span>
                  </span>
                ) : member.clanRank != member.previousClanRank ? (
                  <span className="text-danger">
                    ↓<span dir="ltr">&nbsp;</span>
                  </span>
                ) : (
                  ""
                )}
              </td>
              <td className="d-none d-xs-table-cell">
                <img
                  src={member.league.iconUrls.tiny}
                  alt=""
                  className="hidden-xxs-down"
                />
                <br />
                {member.league.name}
              </td>
              <td>
                <span className="badge badge-info text-dark">
                  {member.role}
                </span>
                <br className="mb-2" />
                <Link
                  as={`/c/${member.tag.replace('#','')}`}
                  href={`/chief?id=${member.tag.replace('#','')}`}
                >
                  <a>{member.name}</a>
                </Link>
                <br />
                <small className="text-muted">{member.tag}</small>
              </td>
              <td className="text-info d-none d-md-table-cell">
                {member.expLevel}
              </td>
              <td className="text-warning">
                <strong dir="ltr">{member.trophies}</strong>
              </td>
              <td className="text-muted d-none d-sm-table-cell">
                <span className="text-white" dir="ltr">
                  {member.versusTrophies}
                </span>
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

Coc.getInitialProps = async function() {
  const res = await fetch("https://api.clashofclans.com/v1/clans/"+encodeURIComponent('#YPL9RJ2R'), {
     
    headers: {
    'Accept': 'application/json',
    'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg5MTQxODAxLTA0YjUtNDMzZi1iMDY5LTNmNDMwYTk4ZWNkNiIsImlhdCI6MTUxNjUyMDIzMywic3ViIjoiZGV2ZWxvcGVyLzRjODY5NGE4LTlmODctMzAzMy03YTUzLWMwODZjYTY4MGFlMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM2LjI1Mi4xNjQuMjQ3Il0sInR5cGUiOiJjbGllbnQifV19.GHWqw0feyfKNJfrLszx9Ora_pbqwcC0vaGiW6z_GCxrRpb8neGW6YCgGoF0AGPxdG9DVSpZ4-qeDduv8xXwYhw',
        }
  });
  const data = await res.json();
  console.log(data);

//   console.log(`Show data fetched. Count: ${data.length}`)
//   console.log(`Show data fetched. : ${data}`);

  return {
    clan: data
  };
};

export default Coc;
