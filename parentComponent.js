import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello from Parent!');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>{message}</p>
      <ChildComponent message={message} onUpdateMessage={updateMessage} />
    </div>
  );
};

export default ParentComponent;
