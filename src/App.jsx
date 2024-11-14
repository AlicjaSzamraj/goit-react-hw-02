import React, { useState } from "react";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  return (
    <div>
      <Description />
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
