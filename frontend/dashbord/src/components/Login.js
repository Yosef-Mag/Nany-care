import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



class SignInForm extends Component {
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
          email: this.state.email,
          password: this.state.password
        }
    
        
    }

    render() {
        return (
          <>
        <div className="form">
            <form onSubmit={this.handleSubmit}  onSubmit={this.handleSubmit}>
            <div>
                <InputLabel id='emLog'>E-Mail Address</InputLabel>
<br></br>
                <Input type="email" id="emailLog"placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
<br></br>
              <div>
                <InputLabel id='pLog'>Password</InputLabel>
<br></br>
                <Input type="password" id="passwordLog" placeholder="Enter your password" autoComplete="off" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
<br></br>
              <div>
                <Button variant="contained" color="primary"> LogIn </Button>
                    <Button href="AddAdmin" color="primary"> Add Admin </Button>

              </div>
            </form>
          </div>
          </>
        );
    }
}

export default SignInForm;
