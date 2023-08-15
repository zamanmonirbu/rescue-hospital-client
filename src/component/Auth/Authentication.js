import React from 'react';
import ChildComponent from '../Login/Login';

function ParentComponent() {
  const handleClick = () => {
    // Do something when the button is clicked
    console.log("Button clicked in ParentComponent");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
