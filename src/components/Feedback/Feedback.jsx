import React from "react";

const Feedback = ({ totalFeedback, positiveFeedback }) => {
  return (
    <>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}</p>
    </>
  );
};
export default Feedback;
