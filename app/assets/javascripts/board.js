import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/root'
import App from './components/App'


const Board = ({boards, users}) => {
  return (
    <Provider store={createStore(rootReducer, {boards: boards, users: users})}>
      <App />
    </Provider>
  )
}

export default Board
