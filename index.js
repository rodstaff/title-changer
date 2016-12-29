import React from 'react'
import ReactDOM from 'react-dom'

class TestApp extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  name: this.props.initialName[0] + " a.k.a. \"" + this.props.initialName[1] + "\""
  	};
  }
  handleChange(e) {
  	const newName = e.target.value;
  	this.setState({
  		name: newName
  	});
  }
  render() {
  	return (
      <div>
        <h1>My name is {this.state.name} </h1>
        <label>
          Change Name: <br/>
          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </label>
      </div>
  	)
  }
}

TestApp.defaultProps = {
  initialName: [
    "Charlie",
    "Max",
    "Tyler"
  ]
};

ReactDOM.render(<TestApp />, document.getElementById('root'));