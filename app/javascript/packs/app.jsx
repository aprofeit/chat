import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

const App = props => (
  <div>Hello react!</div>
)

const HotApp = hot(module)(App)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HotApp />,
    document.body.appendChild(document.createElement('div')),
  )
})
