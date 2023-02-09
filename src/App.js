import './App.css';
import Rgs1_1 from './rgs1_1/rgs1_1';
import React from 'react';
import Rgs1_2 from './rgs1_2/rgs1_2';
import Rgs1_4 from 'rgs1_4/rgs1_4';
import Rgs1_5 from 'rgs1_5/rgs1_5';


const componentsProps = {
  "rgs1_1": Rgs1_1, // basic component using a function
  "rgs1_2": Rgs1_2, // basic use of hooks (useState)
  "rgs1_4": Rgs1_4, // passing props
  "rgs1_5": Rgs1_5, // passing function props with params (closure)
};


let selectedLesson = "rgs1_5";
const SelectedComponent = componentsProps[selectedLesson];

function App() {

  return (
    <div>
      <SelectedComponent />
    </div>
  );
}

export default App;

