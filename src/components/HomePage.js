import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


class HomePage extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <text>Welcome!</text>
              <Link to="/LoginPage">
                <button type="button">
                  Login
                </button>
              </Link>
            </header>
          </div>
        )
    }
}
export default HomePage