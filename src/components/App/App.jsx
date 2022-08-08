import { Component } from 'react';
import Section from '../Section/Section.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Notification from '../Notification/Notification.jsx';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalSum = this.countTotalFeedback();
    const positivePercentage = Math.round((this.state.good / totalSum) * 100);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = [
      { title: 'Good', name: 'good' },
      { title: 'Neutral', name: 'neutral' },
      { title: 'Bad', name: 'bad' },
    ];
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={options}
        />
        <h2>Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="Sorry, there is no feedback yet" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
