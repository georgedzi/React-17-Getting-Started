import React, { useState } from 'react'
//import PropTypes from 'prop-types';

function Button(props) {

  //const handleClick = () => setCounter(counter + 1);

  return (
    <div>
      <button onClick={props.onClickFunction}>
        +{props.increment}
      </button>
    </div>
  );

}

// if not ignoring prop validation this is needed

// Display.propTypes = {
//   message: PropTypes.number.isRequired
// }

function Display(props) {
  console.log(props);
  return (
    <div>{props.message}</div>
  )
}

function Rgs1_4() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
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


export default Rgs1_4