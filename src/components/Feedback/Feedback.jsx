import React from "react";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}</p>
    </>
  );
};
export default Feedback;
