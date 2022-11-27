import React, { useState } from "react";

const Home = () => {
  const [number, setNumber] = useState(50);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+ 1</button>
    </div>
  );
};

export default Home;
