import React, { Component } from 'react';
import './style.scss';
import Home from '../../pages/Home/Home';


class App extends Component<any, any> {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <>
        <div className="main-logo">
          <div className="container">
            <div className="logo">
              <span>netflix</span>roulette
                    </div>
          </div>
        </div>
        <div className="page-wrapper">
          <Home />
        </div>
      </>
    )
  }



}
export default App;
