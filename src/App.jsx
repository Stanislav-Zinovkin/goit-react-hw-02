import React, { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import EmptyState from "./components/Notification/EmptyState";

function App() {
  const savedInfo = JSON.parse(localStorage.getItem("feedback"));
  const initialFeedback = savedInfo || { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initialFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <div>
        <Description />
      </div>
      <div>
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={resetFeedback}
        />
      </div>
      <div>
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </>
  );
}

export default App;
