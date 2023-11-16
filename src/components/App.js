import { Component } from "react";
import { Statistics } from "./Feedback/Statistics/Statistics";
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Section } from "./Feedback/Section/Section";
import { NotificationMessage } from "./Feedback/NotificationMessage/NotificationMessage";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    countTotalFeedback() {
        const { good, neutral, bad } = this.state
        const total = good + neutral + bad
        return total
    }

    countPositiveFeedbackPercentage() {
        const { good, neutral, bad } = this.state
        const prs = good / (good + neutral + bad) * 100
        if (prs) {
            return `${Math.round(prs)}%`
        }
        return  'No positive feedbacks'
    }
  
    handleFeedback = (evt) => {
      this.setState(prevState => ({
        [evt.target.id]: prevState[evt.target.id] +1
      }))
    }
  
  render() {
    const { good, neutral, bad } = this.state

    return (
      <>
        <Section title='Leave feedback'>
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
          {Boolean(good + neutral + bad) ?
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> :
            <NotificationMessage message={'There is no feedback'} />}
        </Section>
        
      </>
  )}
}

export default App;
