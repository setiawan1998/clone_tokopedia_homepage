import React from 'react';
import ReactDOM from 'react-dom';
import { RouterGuard } from 'react-router-guard';
import config from './config';
 
function App() {
  return (
    <div className="App">
      <RouterGuard config={config} loading hashMode={false}  />
    </div>
  );
}

export default App;
