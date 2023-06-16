import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <button className="freeShipping-button">
      <div className='freeShipping-text'>
          Get FREE shipping on all orders when you join Beauty Insider. Exclusions/terms apply. <strong> LEARN MORE</strong>
      </div>
      </button>
      <Navigation />
        <Switch>
         
        </Switch>
    </>
  );
}

export default App;
