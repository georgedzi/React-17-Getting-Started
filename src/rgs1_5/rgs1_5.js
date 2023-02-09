import React, { useState } from 'react'
//import PropTypes from 'prop-types';

function Button(props) {

  const handleClick = () => props.onClickFunction(props.increment);

  return (
    <div>
      <button onClick={handleClick}>
        +{props.increment}
      </button>
    </div>
  );

}

function Display(props) {
  console.log(props);
  return (
    <div>{props.message}</div>
  )
}

function Rgs1_5() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  )
}


export default Rgs1_5