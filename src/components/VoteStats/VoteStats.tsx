import type { Votes } from "../../types/votes";
import s from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  votesTotal: number;
  positiveRate: number;
}

const VoteStats = ({
  votes: { good, neutral, bad },
  votesTotal,
  positiveRate,
}: VoteStatsProps) => {
  return (
    <div className={s.container}>
      <p className={s.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={s.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={s.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={s.stat}>
        Total: <strong>{votesTotal}</strong>
      </p>
      <p className={s.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
