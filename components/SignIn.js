import React from 'react';
import { Header, Grid, Button, Checkbox, Form } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import AllCoins from './CryptoList'
import '../App.css'

class SignIn extends React.Component {


   render() {
     return (
    <div className="signin">
    <h1 textAlign="center" className="login">Crypto-Viz</h1>
    <div className="newform">
    <h1 className="whitefont">Log In</h1>
    <Form class="whitefont">
    <Form.Group>
    <Form.Field class="whitefont" width={3}>  <input placeholder='UserName' />
      </Form.Field>
      <Form.Field class="whitefont" width={3}>
        <input type="password" placeholder='Password' />
      </Form.Field>
      <Link to="/allcoins"><Button type='submit'>Submit</Button></Link>
      </Form.Group>
    </Form>

    </div>
    </div>
   );
  }
};

export default SignIn;
