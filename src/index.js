import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import UserInfo from './components/UserInfo'
import data from '../data/data.json'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" render={() => <App users={data.users} />} />
      <Route path="/user/:id" render={({match}) => <UserInfo data={data} match={match} />} />
    </div>
  </Router>,
  document.getElementById('root')
)
