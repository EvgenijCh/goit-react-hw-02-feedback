import PropTypes from 'prop-types'
import s from './Statistics.module.css'


const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.feedbackList}>
          <li className={s.feedbackList_item}>Good: {good}</li>
          <li className={s.feedbackList_item}>Neutral: {neutral}</li>
          <li className={s.feedbackList_item}>Bad: {bad} </li>
          <li className={s.feedbackList_item}>Total: {total} </li>
          <li className={s.feedbackList_item}>Positive feedback: {positivePercantage}% </li>
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral:PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total:PropTypes.string.isRequired,
  positivePercantage: PropTypes.string.isRequired,
}
export default Statistics;

