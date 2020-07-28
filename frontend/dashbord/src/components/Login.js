import React, { useState } from 'react';
import { adminlogin } from './AdminMethods'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';




export default function LoginAdmin(props) { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const admin = {
        username : username,
        password : password
      }
  
      adminlogin(admin).then(res => {
        if (res) {
        props.history.push('/Admin')
        }
      })
  }

        return (
          <>
        <div className="logForm" style={{marginLeft : "210px"}}>
            <form onSubmit={handleSubmit}>
            <div>
                <InputLabel id='usLog'> Admin Username </InputLabel>
<br></br>
                <Input type="text" id="usernLog"placeholder="Enter the Admin username" name="username"  value={username} onChange={e => setUsername(e.target.value)} > 
                    
                </Input>
                
              </div>
<br></br>
              <div>
                <InputLabel id='pLog'>Password</InputLabel>
<br></br>
                <Input type="password" id="passwordLog" placeholder="Enter your password" autoComplete="off" name="password"  value={password} onChange={e => setPassword(e.target.value)} />
              </div>
<br></br>
              <div>
                <Button color="primary" disabled={!validateForm()} type="submit"> Login </Button>
                    <Button href="AddAdmin" color="primary"> Add new admin </Button>
              </div>
            </form>
          </div>
          </>
        );
}

