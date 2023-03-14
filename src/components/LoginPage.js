import React, { Component } from 'react'
import styled from 'styled-components'

class LoginPage extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <text>Login</text>
              <div className = 'row1'>
                <text>Username:  </text>
                <input></input>
              </div>
              <div className = 'row2'>
                <text>Password:  </text>
                <input></input>
              </div>
              <button onClick={submitLogin}>Submit</button>
            </header>
          </div>
        )
    }
}

function submitLogin() {

}

export default LoginPage