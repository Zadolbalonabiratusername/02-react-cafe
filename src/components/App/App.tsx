import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

import type { Votes, VoteType } from "../../types/votes";
import s from "./App.module.css";

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const votesTotal = votes.bad + votes.good + votes.neutral;
  const positiveRate = votesTotal
    ? Math.round((votes.good / votesTotal) * 100)
    : 0;

  const handleVote = (type: VoteType): void => {
    setVotes((prev: Votes) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={s.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={votesTotal > 0}
      />
      {votesTotal > 0 ? (
        <VoteStats
          votes={votes}
          votesTotal={votesTotal}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
