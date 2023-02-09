import React, { useState } from 'react'

// This is both Rgs1_2 and Rgs1_3
// video ends in a challenge to double the value.
// the code bellow is the answer to that challenge

function Rgs1_2() {
  // this returns an array with the elements counter, and setCounter
  const [counter, setCounter] = useState(5);

  return <button onClick={ () => setCounter(counter * 2) }>{counter}</button>;
}



export default Rgs1_2