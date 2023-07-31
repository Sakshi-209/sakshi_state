import React from 'react';

const ChildComponent = ({ message, onUpdateMessage }) => {
  const handleButtonClick = () => {
    onUpdateMessage('Hello from Child!');
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
      <button onClick={handleButtonClick}>Update Message</button>
    </div>
  );
};

export default ChildComponent;
