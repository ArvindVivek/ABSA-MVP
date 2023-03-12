import React, { Component } from 'react'
import styled from 'styled-components'

class LoginPage extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <text>Login</text>
              <button onClick={submitLogin}>Submit</button>
            </header>
          </div>
        )
    }
}

function submitLogin() {

}

export default LoginPage