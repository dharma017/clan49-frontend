import React from "react";
import { Table, Card } from "antd";
import { Row, Col } from "antd";

const RowStyle = {
    paddingTop: '10px'
};

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const clan = this.props.clan;

        return (
            <div>
                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 8 }}>
                        <img
                            src={clan.badgeUrls.small}
                            alt=""
                            style={{ "width": "70px","height": "70px" }}
                            className="clanbadge rtl-mr-3 mt-3"
                        />
                        <div className="float-left">
                            <h1 className="display-4 mb-0 pt-3">{clan.name}</h1>
                            <p className="small text-reverse text-muted">{clan.tag}</p>
                        </div>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 8, offset: 8 }}>
                        <div className="float-right py-3 media ml-md-4">
                            {/* <img
                                src="https://spy.deckshop.pro/img/cr/trophies.png"
                                alt=""
                                className="trophyicon d-none d-sm-flex rtl-mr-2"
                            /> */}

                            <div className="media-body">
                                <h4 className="text-warning pt-2 pt-sm-3 mb-0" dir="ltr">
                                    {clan.clanLevel} Level
                                </h4>
                                <p className="small text-muted text-reverse mb-0 text-danger">
                                    <span dir="ltr">{clan.members} / 50 members</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="pb-2">
                            <p className="text-white border p-3 py-2 border-dark mb-0"> {clan.description}
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TopBar;
