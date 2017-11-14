import React, { Component } from 'react';
import './App.css';
import DashboardController from './components/dashboard.controller.js';
//////////////////////////////////////////////////
///////////// Dependencies

//////////////////////////////////////////////////
///////////// Styling for the component

/* Class App, the root component for the whole app
 * 
 *
 * Exported as App
 *
 */
class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h2 className="App">BabyMac Notebook</h2>
          <DashboardController />
        </div>
      </div>
    );
  }
}

export default App;
