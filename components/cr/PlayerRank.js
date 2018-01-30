import { Divider } from "antd";
const PlayerRank = (props) => (
    <span className="h4" dir="ltr">
        {props.record.rank}
        {props.record.rank < props.record.previousRank ? (
            <span className="text-success">
            <Divider type="horizontal" />
            ↑<span dir="ltr">{props.record.previousRank - props.record.rank}</span>
            </span>
        ) :

        props.record.rank != props.record.previousRank? (
            <span className="text-danger">
            <Divider type="horizontal" />
            ↓<span dir="ltr">{props.record.rank - props.record.previousRank}</span>
            </span>
        ) : ""}
    </span>
);
export default PlayerRank