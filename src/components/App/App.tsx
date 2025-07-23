import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

import type { Votes, VoteType } from "../../types/votes";
import s from "./App.module.css";

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes = votes.bad + votes.good + votes.neutral;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const handleVote = (type: VoteType): void => {
    setVotes((prev: Votes) => ({ ...prev, [type]: prev[type] + 1 }));
    // setVotes({ ...votes, [type]: votes[type] + 1 });
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
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
