import React from 'react';
import './css/App.css';
import Form from './form';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    fetch('https://academlo-api-users.herokuapp.com/users')
    .then(e=> e.json())
    .then(e => {
      this.setState({
        users: e.data
      })
    })
  }

  inputData = (e) => {
    this.setState({
      user: {...this.state.user,[e.target.name]:e.target.value}
    })
  }

  formData = (e) => {
    e.preventDefault()
    fetch('https://academlo-api-users.herokuapp.com/users',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify(this.state.user)
    })
    .then(e => e.json())
    .then(e => console.log(e))
  }

  render(){
    return (
      <div className="App">
        <Form  formData={this.formData} inputData={this.inputData}/>
      </div>
    );
  }
}