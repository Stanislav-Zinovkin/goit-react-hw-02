import React, { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

import "./App.css";
function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  return (
    <>
      <div>
        <Description />
      </div>
      <div>
        <Options feedback={feedback} updateFeedback={updateFeedback} />
      </div>
    </>
  );
}

export default App;
