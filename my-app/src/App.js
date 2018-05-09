import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import data from './data.json';



class App extends Component {

    //state = {count : 10};
    constructor() {
        super();
        this.state = {count : 10};
    }

    getInitialState(){
    return {
        count: this.state.count
    }
}


    handleClick = (param) => (e) => {
        console.log('Event', e);
        console.log('Parameter', param);
        this.setState({
            count: this.state.count + 10
        });
    };



  render() {
      var count1 = this.state.count;
      console.log("Consss " + count1);
    return (
      <div className="App">
        <Header/>

          <ul>
              {

                  data.map(function(movie){
                      //console.log("log " + count1);
                      if( movie.id < count1 ) {
                          return <li>{movie.id} - {movie.title}</li>;
                      }
                  })
              }
          </ul>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div className="actions">

              <button onClick={this.handleClick(this.state.count)}>Swnd</button>
          </div>
      </div>
    );
  }
}

export default App;
