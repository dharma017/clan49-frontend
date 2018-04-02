import React from "react";
import { Row, Col } from "antd";
import { Icon } from 'antd';
import Moment from 'react-moment';
import { Steps } from 'antd';
const Step = Steps.Step;

const RowStyle = {
    paddingTop: '20px',
};

class CurrentWarHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const war = this.props.currentwar;
        console.log(war);

        return (
            <div>
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={24}>
                        <h1>Clan War</h1>
                        <p><strong>War State</strong> {war.state}</p>
                        <p><strong>Start time</strong> <span><Moment format="llll">{war.startTime}</Moment></span></p>
                        <p><strong>Preparation Start time</strong> <span><Moment format="llll">{war.preparationStartTime}</Moment></span></p>
                        <p><strong>End time</strong> <span><Moment format="llll">{war.endTime}</Moment></span></p>
                    </Col>
                </Row>
                <Row gutter={16} type="flex" justify="center">
                    <Col xs={24} sm={24} md={12}>
                        <Steps progressDot current={2}>
                            <Step
                                // status="process"
                                // icon={<Icon type="loading" />}
                                title={war.clan.name}
                                description={(
                                    <div>
                                        <img
                                            src={war.clan.badgeUrls.small}
                                            alt=""
                                            style={{ "width": "70px", "height": "70px" }}
                                            className="clanbadge rtl-mr-3 mt-3"
                                        />
                                        <p>{war.clan.tag}</p>
                                        <p>{ war.teamSize } members</p>
                                        <p>{war.clan.stars} stars</p>
                                        <p>{war.clan.attacks} attacks out of total {war.teamSize * 2} attacks</p>
                                        <p>{parseFloat(war.clan.destructionPercentage).toFixed(2)}% Destroyed</p>
                                        {/* <p>Ending time <span><Moment format="llll">{war.endTime}</Moment></span></p> */}
                                    </div>
                                )
                                } />
                            <Step
                                // status="process"
                                // icon={<Icon type="loading" />}
                                title={war.opponent.name}
                                description={(
                                    <div>
                                        <img
                                            src={war.opponent.badgeUrls.small}
                                            alt=""
                                            style={{ "width": "70px", "height": "70px" }}
                                            className="clanbadge rtl-mr-3 mt-3"
                                        />
                                        <p>{war.opponent.tag}</p>
                                        <p>{war.teamSize} members</p>
                                        <p>{war.opponent.stars} stars</p>
                                        <p>{war.opponent.attacks} attacks out of total {war.teamSize * 2} attacks</p>
                                        <p>{parseFloat(war.opponent.destructionPercentage).toFixed(2)}% Destroyed</p>
                                        {/* <p>Ending time <span><Moment format="llll">{war.endTime}</Moment></span></p> */}
                                    </div>
                                )
                                } />
                        </Steps>
                    </Col>
                </Row>
            </div>
        );
        
    }
}

export default CurrentWarHeader;
