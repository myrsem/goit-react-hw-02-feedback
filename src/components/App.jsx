import React, { Component } from 'react';

import { Feedback } from 'components/App.slyled';

import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import NotificationMessage from 'components/NotificationMessage/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = event => {
    const name = event.currentTarget.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;

    if (total === 0) {
      return 0;
    }
    const percentage = (good * 100) / total;

    return Math.round(percentage);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(total);

    return (
      <Feedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleAddFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <NotificationMessage message="No feedback given" />
          )}
        </Section>
      </Feedback>
    );
  }
}

export default App;