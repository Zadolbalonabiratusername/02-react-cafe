import { useState } from "react";
import css from "./App.module.css";
//import "./App.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { Votes, VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const votesTotal = votes.bad + votes.good + votes.neutral;

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
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
      {votesTotal > 0 ? <VoteStats /> : <Notification />}
    </div>
  );
};

export default App;
