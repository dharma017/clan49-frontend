import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Player = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <div className="container">
      <div className="card bg-dark mb-3">
        <div className="card-body">
          <h3 className="card-title text-white">Upcoming chests </h3>

          {props.show.chestCycle.upcoming.map((chest, i) => (
            <div className={"chest-container chest-container-" + chest} key={i}>
              <img
                src={"https://spy.deckshop.pro/img/chests/" + chest + ".png"}
                alt=""
                className={"chest chest-" + chest}
              />

              <span className="text-white h4 text-reverse" dir="ltr">
                +{i}
              </span>
            </div>
          ))}

          <div className="chest-container">
            <img
              src="https://spy.deckshop.pro/img/chests/magical.png"
              alt=""
              className="chest chest-magical"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.show.chestCycle.magical}
            </span>
          </div>

          <div className="chest-container">
            <img
              src="https://spy.deckshop.pro/img/chests/epic.png"
              alt=""
              className="chest chest-epic"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.show.chestCycle.epic}
            </span>
          </div>

          <div className="chest-container">
            <img
              src="https://spy.deckshop.pro/img/chests/giant.png"
              alt=""
              className="chest chest-giant"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.show.chestCycle.giant}
            </span>
          </div>

          <div className="chest-container">
            <img
              src="https://spy.deckshop.pro/img/chests/legendary.png"
              alt=""
              className="chest chest-legendary"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.show.chestCycle.legendary}
            </span>
          </div>

          <div className="chest-container">
            <img
              src="https://spy.deckshop.pro/img/chests/smc.png"
              alt=""
              className="chest chest-smc"
            />

            <span className="text-white h4 text-reverse" dir="ltr">
              +{props.show.chestCycle.superMagical}
            </span>
          </div>
        </div>
      </div>

      <div className="clearfix">
        <div className="clan_box d-flex d-md-none w-100">
          <div className="clearfix">
            <a className="text-white" href={"/clan/2GPUC2#" + props.show.tag}>
              <img
                src={props.show.clan.badge.image}
                alt={props.show.clan.badge.name}
                className="clanbadge rtl-mr-3"
              />
            </a>

            <h4 className="text-white pt-2 float-left">
              <a className="text-white" href={"/clan/2GPUC2#" + props.show.tag}>
                {props.show.clan.name}
              </a>
            </h4>

            <p className="text-muted mb-0">{props.show.clan.role}</p>
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
                <th className="font-weight-normal">Level</th>
                <td className="text-info">{props.show.stats.level}</td>
              </tr>
              <tr>
                <th className="font-weight-normal">Current Trophies</th>
                <td className="text-warning">
                  <span dir="ltr">{props.show.trophies}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Personal Best</th>
                <td className="text-muted">
                  <span dir="ltr">{props.show.stats.maxTrophies}</span>
                </td>
              </tr>

              <tr>
                <th className="font-weight-normal">Arena</th>
                <td className="text-white">{props.show.arena.arena}</td>
              </tr>
              <tr>
                <th colSpan={"666"} className="bg-dark text-muted">
                  Ladder + Challenges
                </th>
              </tr>
              <tr>
                <th className="font-weight-normal">Wins</th>
                <td className="text-success">
                  <span dir="ltr">{props.show.games.win}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Three Crown Wins</th>
                <td>
                  <span dir="ltr">{props.show.stats.threeCrownWins}</span>{" "}
                  <small className="text-muted">
                    (<span dir="ltr">67.5%</span>)
                  </small>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Losses</th>
                <td className="text-danger">
                  <span dir="ltr">{props.show.games.losses}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Battle Count</th>
                <td>
                  <span dir="ltr">{props.show.games.total}</span>
                </td>
              </tr>
              <tr>
                <th className="text-muted font-weight-normal">Draws</th>
                <td className="text-muted">
                  <span dir="ltr">{props.show.games.draws}</span>{" "}
                  <small>
                    (<span dir="ltr">52.3%</span>)
                  </small>
                </td>
              </tr>
              <tr>
                <th className="text-muted font-weight-normal">Win Rate</th>
                <td className="text-muted">
                  <span dir="ltr">53.9%</span>
                </td>
              </tr>
              <tr>
                <th className="text-muted font-weight-normal">
                  Days Spent Playing
                </th>
                <td className="text-muted">
                  <a
                    href="#"
                    className="spoiler-btn"
                    data-target="daysSpentPlaying"
                  >
                    <span className="d-none d-sm-inline d-md-none d-lg-inline">
                      Click to reveal
                    </span>
                    <span className="d-sm-none d-md-inline d-lg-none">
                      Reveal
                    </span>
                  </a>
                  <div
                    className="spoiler-reveal"
                    data-spoiler-id="daysSpentPlaying"
                  >
                    <span dir="ltr">~9.9</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-inverse">
            <tbody>
              <tr>
                <th colSpan={"666"} className="bg-dark text-muted">
                  Challenge
                </th>
              </tr>
              <tr>
                <th className="font-weight-normal">Max Wins</th>
                <td>
                  <span dir="ltr">{props.show.stats.challengeMaxWins}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Cards won</th>
                <td className="text-success">
                  <span dir="ltr">{props.show.stats.challengeCardsWon}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal text-muted">
                  As If Played At Least
                </th>
                <td className="text-muted">
                  <span dir="ltr">2+</span> GCs
                </td>
              </tr>
              <tr>
                <th colSpan={"666"} className="bg-dark text-muted">
                  Tournament
                </th>
              </tr>
              <tr>
                <th className="font-weight-normal">Cards Won</th>
                <td className="text-success">
                  <span dir="ltr">{props.show.stats.tournamentCardsWon}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal">Battle Count</th>
                <td>
                  <span dir="ltr">{props.show.games.tournamentGames}</span>
                </td>
              </tr>
              <tr>
                <th colSpan={"666"} className="bg-dark text-muted">
                  Clan + Donations
                </th>
              </tr>
              <tr>
                <th className="font-weight-normal">Total Donations</th>
                <td className="text-success">
                  <span dir="ltr">{props.show.stats.totalDonations}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal text-muted">Donations</th>
                <td className="text-muted">
                  <span dir="ltr">{props.show.stats.donations}</span>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal text-muted">
                  Donations Received
                </th>
                <td className="text-muted">
                  <span dir="ltr">{props.show.stats.donationsReceived}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

Player.getInitialProps = async function (context) {
  const { id } = context.query
  
const res = await fetch(`http://api.cr-api.com/player/${id}`, {
    headers: {
      Authorization:
        "Bearer b8a24f73d4dd45909e8dc97a6e1a8ee89f7072acc2e9418189a8a47b57c1ad77",
      "Content-Type": "application/json"
    }
  })
  const show = await res.json()

  console.log(`Fetched show: ${show}`)

  return { show }
}

export default Player;