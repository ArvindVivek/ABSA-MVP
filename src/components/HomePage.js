import React, { Component } from 'react'
import styled from 'styled-components'

class HomePage extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <text>Welcome!</text>
              <button onClick={toLoginPage}>Login</button>
              <button onClick={toRegisterPage}>Register</button>
            </header>
          </div>
        )
    }
}

function toLoginPage() {

}

function toRegisterPage() {

}

export default HomePage