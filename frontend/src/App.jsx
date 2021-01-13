import React from 'react';
import axios from 'axios';

const App = () => {
  const handleClick = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Hosted By Service</h1>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default App;
