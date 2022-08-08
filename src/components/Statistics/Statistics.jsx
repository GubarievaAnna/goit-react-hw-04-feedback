import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>
        <span className={s.accentTitle}>Good:</span> {good}
      </p>
      <p>
        <span className={s.accentTitle}>Neutral:</span> {neutral}
      </p>
      <p>
        <span className={s.accentTitle}>Bad:</span> {bad}
      </p>
      <p>
        <span className={s.accentTitle}>Total:</span> {total}
      </p>
      <p>
        <span className={s.accentTitle}>Positive feedback: </span>
        {positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
