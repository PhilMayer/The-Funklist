import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "", 
      password: "",
      confirmPassword: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // componentDidMount() {
  //   axios.get('http://localhost:8080')
  //     .then(response => {
  //       console.log(response);
  //     });
  // }

  handleChange(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/signup', this.state)
      .then(response => {
        console.log(response.data);
      });
  }

  render () {
    return (
      <div style={{maxWidth: "58.33333%"}}>
        <div className="pb-2 mt-2 mb-4 border-bottom">
          <h3>Sign up</h3>
        </div>
        <Form id="signup-form" method="POST">
          <div className="form-group row">
            <label className="col-md-3 col-form-label font-weight-bold text-right">Email</label>
            <div className="col-md-7">
              <Form.Control value={this.state.email} onChange={this.handleChange} className="form-control" type="email" name="email" id="email" placeholder="Email" autoFocus="autofocus" autoComplete="email" required="required" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label font-weight-bold text-right">Password</label>
            <div className="col-md-7">
              <input value={this.state.password} onChange={this.handleChange} className="form-control" type="password" name="password" id="password" placeholder="Password" autoComplete="new-password" minLength="8" required="required" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label font-weight-bold text-right">Confirm Password</label>
            <div className="col-md-7">
              <input value={this.state.confirmPassword} onChange={this.handleChange} className="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" autoComplete="new-password" minLength="8" required="required" />
            </div>
          </div>
          <div className="form-group offset-sm-3 col-md-7 pl-2">
            <button onClick={this.handleSubmit} className="btn btn-success" type="submit"><i className="fas fa-user-plus fa-sm"></i>Signup</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default App;
