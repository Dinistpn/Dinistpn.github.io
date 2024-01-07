import React, { Component } from 'react';


class App extends Component {
  constructor(props: any) {
      super(props);
      this.state = {
        tasks: [],
        open: true
      }
    }
  render() {
      return (
        <>
        <p>Hello world!</p><div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text" id="btnGroupAddon">Introduce a Task</div>
            </div>
            <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2"></input>
            <button type="button" className="btn btn-secondary" onClick={addtask}>Submit</button>
            <div className="containerA"></div>
          </div>
        </>
      );
    }
  }
  function addtask(){
    
  }

export default App;
