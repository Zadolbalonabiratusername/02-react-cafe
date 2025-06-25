import css from "./VoteOptions.module.css";

const VoteOptions = ({ onVote, onReset, canReset }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onVote}>
        Good
      </button>
      <button className={css.button} onClick={onVote}>
        Neutral
      </button>
      <button className={css.button} onClick={onVote}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default VoteOptions;
