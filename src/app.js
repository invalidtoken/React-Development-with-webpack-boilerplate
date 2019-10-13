
import React,{Component} from "react";
import ReactDOM from "react-dom";

class StateFullApp extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <App body="This is the body."/>
      </div>
    );
  }
}

function App(props){
  return (
    <div>
      <h1>Complete React-Webpack Setup</h1>
      <p>{props.body}</p>
    </div>
  );
}

let element = React.createElement(StateFullApp);

ReactDOM.render(element, document.getElementById("add"));

















