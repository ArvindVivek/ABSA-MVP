import React, { Component } from 'react'
import styled from 'styled-components'

class RegisterPage extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <text>Register</text>
              <button onClick={submitReg}>Submit</button>
            </header>
          </div>
        )
    }
}

function submitReg() {
    
}

export default RegisterPage