import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(({ title, name }) => {
        return (
          <li key={nanoid()} className={s.item}>
            <button
              type="button"
              className={s[`accent${title}`]}
              onClick={() => onLeaveFeedback(name)}
            >
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
