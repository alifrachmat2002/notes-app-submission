import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

import {getInitialData, showFormattedDate } from './utils/index'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      title: '',
      body: '',
    }
  }

  render() {
    return (
    <>

      <h1>Take A Note</h1>
      <p className='read-the-docs'>Take your notes easily</p>
      <div className="card-container">
        {this.state.notes.map((notes) => {
          return (
              <div className="card" key={notes.id}>
                  <h5>{notes.title}</h5>
                  <p className="read-the-docs">{showFormattedDate(notes.createdAt)}</p>
                  <p>{notes.body}</p>
              </div>
          );
        })}
      </div>

      
    </>
  )
  }
  
}

export default App
