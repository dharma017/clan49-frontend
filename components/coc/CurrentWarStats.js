import React from "react";
import { Row, Col } from "antd";
import { Popover, Icon } from 'antd';
import Moment from 'react-moment';
import Link from "next/link";
import { Steps } from 'antd';
import { Rate } from 'antd';

const Step = Steps.Step;

const RowStyle = {
    paddingTop: '20px',
    // marginTop: '20px'
};

class CurrentWarStats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const members = this.props.members;
        const listItems = members.map((member,i) =>

        <Row key={i.toString()} style={RowStyle}>
            <Col xs={24} sm={24} md={24}>
            <Steps current={member.attacks && member.attacks.length > 0 ? member.attacks.length :0 } >
                <Step 
                title={member.name} 
                status="finish"
                icon={< Icon type="user" />}
                description={(
                <div>
                    <p>Player Tag {member.tag}</p>
                    <p>Town Hall {member.townhallLevel}</p>
                    <p>Map Position {member.mapPosition}</p>
                </div>
                )} />

                        {members[i].attacks ?
                            <Step
                                title="First Attack"
                                status={members[i].attacks[0].stars === 3 ? 'finish' : 'error'}
                                description={(
                                    <div>

                                        <div><Rate disabled count={3} defaultValue={members[i].attacks[0].stars} /></div>
                                        <p>destructionPercentage {members[i].attacks[0].destructionPercentage}%</p>
                                        <p>defenderTag {members[i].attacks[0].defenderTag}</p>
                                    </div>
                                )
                                } />

                            : <Step status="process" title="First Attack" icon={<Icon type="loading" />} />
                        }

                        {(members[i].attacks && members[i].attacks.length == 2) ?
                            <Step
                                title="Second Attack"
                                status={members[i].attacks[1].stars === 3 ? 'finish' : 'error'}
                                description={(
                                    <div>
                                        <div><Rate disabled count={3} defaultValue={members[i].attacks[1].stars} /></div>
                                        <p>destructionPercentage {members[i].attacks[1].destructionPercentage}%</p>
                                        <p>defenderTag {members[i].attacks[1].defenderTag}</p>
                                    </div>
                                )
                                } />
                            : <Step status="process" title="Second Attack" icon={<Icon type="loading" />} />
                        }
                    </Steps>
                </Col>
            </Row>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default CurrentWarStats;
