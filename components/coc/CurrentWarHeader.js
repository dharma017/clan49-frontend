import React from "react";
import { Row, Col } from "antd";
import Moment from 'react-moment';

const RowStyle = {
    paddingTop: '20px',
};

class CurrentWarHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const war = this.props.currentwar;

        return (
            <div>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }}>
                        <div className="row title">
                            <div className="col s12">
                                <div className="end-time">
                                    <i className="material-icons">End time</i>
                                    <span><Moment format="llll">{war.endTime}</Moment></span>
                                </div>
                                <div className="left-info">
                                    <div className="war-size">
                                        <span className="team-size">{war.teamSize}</span>
                                        <span className="vs">&nbsp;VS&nbsp;</span>
                                        <span className="team-size">{war.teamSize}</span>
                                    </div>
                                </div>
                                <div className="clan-tag">{war.clan.tag}</div>
                                <div className="result" data-war-result="win"></div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                        <div className="col s6">
                            <div className="row main-clan">
                                <div className="col s12 m4 l5 badge-container">
                                    <img className="badge" src={war.clan.badgeUrls.small} />
                                    </div>
                                    <div className="col s12 m8 l7">
                                        <div className="row stars right-on-medium-and-up">
                                            <div className="col s12 reverse-on-small-only">
                                                <span className="block-on-small-only">
                                                    <span className="sprites-war-stars sprites"></span>
                                                </span>
                                                <span className="block-on-small-only stars-count">{war.clan.stars}</span>
                                            </div>
                                        </div>
                                        <h5 className="right-on-medium-and-up">{war.clan.name}</h5>
                                        <div className="row values">
                                            <div className="col s6 attacks">
                                                <div className="value">
                                                    <span className="attacks-done">{war.clan.attacks}</span>
                                                    <span className="attacks-possible">&nbsp;/&nbsp;{war.clan.stars * 3}</span>
                                                </div>
                                                <div className="text">Attacks</div>
                                            </div>
                                            <div className="col s6 destruction">
                                            <div className="value destruction-percentage">{war.clan.destructionPercentage}</div>
                                                <div className="text">Destroyed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }}>
                        <div className="col s6">
                            <a className="row opponent-clan hoverable reverse-on-small-only" href="/clans/battle-manipur-89CP808C/war-log#tabs" data-tooltip="View this Clan"
                                data-tooltip-id="97feff15-f79a-4bd3-f45c-02458a393d8e">
                                <div className="col s12 m8 l7">
                                    <div className="row stars left-on-medium-and-up">
                                        <div className="col s12">
                                            <span className="block-on-small-only stars-count">{war.opponent.stars}</span>
                                            <span className="block-on-small-only">
                                                <span className="sprites-war-stars sprites"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <h5 className="left-on-medium-and-up">{war.opponent.name}</h5>
                                    <div className="row values">
                                        <div className="col s12 m6 destruction">
                                            <div className="value destruction-percentage">{war.opponent.destructionPercentage}</div>
                                            <div className="text">Destroyed</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m4 l5 badge-container">
                                    <img className="badge" src={war.opponent.badgeUrls.small} />
                                    </div>
                                </a>
                            </div>
                    </Col>
                </Row>
            </div>
        );
        
    }
}

export default CurrentWarHeader;
