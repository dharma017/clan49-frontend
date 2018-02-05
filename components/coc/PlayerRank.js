import { Divider } from "antd";
const PlayerRank = (props) => (
    <span className="h4" dir="ltr">
        {props.record.clanRank}
        {props.record.clanRank < props.record.previousClanRank ? (
            <span className="text-success">
                <Divider type="horizontal" />
                ↑<span dir="ltr">{props.record.previousClanRank - props.record.clanRank}</span>
            </span>
        ) :

            props.record.clanRank != props.record.previousClanRank ? (
                <span className="text-danger">
                    <Divider type="horizontal" />
                    ↓<span dir="ltr">{props.record.clanRank - props.record.previousClanRank}</span>
                </span>
            ) : ""}
    </span>
);
export default PlayerRank