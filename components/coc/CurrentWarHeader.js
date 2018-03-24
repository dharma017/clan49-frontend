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
                    <Col span={24}>
                        <div className="pb-2">
                            <p className="text-white border p-3 py-2 border-dark mb-0"> {war.teamSize}&nbsp;vs {war.teamSize}
                            </p>
                            <p className="text-white border p-3 py-2 border-dark mb-0">
                            <i className="material-icons">End time</i>
                                <span><Moment format="llll">{war.endTime}</Moment></span>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 8 }}>
                    <div className="float-left">
                        <img
                            src={war.clan.badgeUrls.small}
                            alt=""
                            style={{ "width": "70px", "height": "70px" }}
                            className="clanbadge rtl-mr-3 mt-3"
                        />
                            <h1 className="display-4 mb-0 pt-3">{war.clan.name}</h1>
                            <p className="small text-reverse text-muted">{war.clan.tag}</p>
                            <p className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
                                {war.clan.stars}
                            </p>
                            <p className="small text-muted text-reverse mb-0 text-danger">
                                <span dir="ltr">{war.clan.attacks} / {war.clan.stars * 3}</span>
                            </p>
                            <p className="small text-muted text-reverse mb-0 text-danger">
                                <span dir="ltr">{war.clan.destructionPercentage} Destroyed</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 8, offset: 8 }}>
                    <div className="float-right py-3 media ml-md-4">
                        <img
                            src={war.opponent.badgeUrls.small}
                            alt=""
                            style={{ "width": "70px", "height": "70px" }}
                            className="clanbadge rtl-mr-3 mt-3"
                        />
                            <h1 className="display-4 mb-0 pt-3">{war.opponent.name}</h1>
                            <p className="small text-reverse text-muted">{war.opponent.tag}</p>
                            <p className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
                                {war.opponent.stars}
                            </p>
                            <p className="small text-muted text-reverse mb-0 text-danger">
                                <span dir="ltr">{war.opponent.destructionPercentage} Destroyed</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
        
    }
}

export default CurrentWarHeader;
