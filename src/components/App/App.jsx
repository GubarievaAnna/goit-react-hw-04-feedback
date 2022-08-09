import { useState } from 'react';
import Section from '../Section/Section.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Notification from '../Notification/Notification.jsx';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();
  const positivePercentage = Math.round((good / total) * 100);
  const options = [
    { title: 'Good', name: 'good' },
    { title: 'Neutral', name: 'neutral' },
    { title: 'Bad', name: 'bad' },
  ];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      <h2>Statistics</h2>
      {total === 0 ? (
        <Notification message="Sorry, there is no feedback yet" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </Section>
  );
};

export default App;
