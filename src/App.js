import * as RC from 'react';

import './App.css';

function App() {

  const element = <div onClick={() => { }}>Hello</div>
  console.log(element, "elemtn------")
  return (
    <RC.Fragment>
      <h1>HEY</h1>
  </RC.Fragment>
  );
}

export default App;
