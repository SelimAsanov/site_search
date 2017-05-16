import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import '../../public/style.css'

class App extends Component {
  state = {
    searchRequest: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      searchRequest: e.target.value
    })
  }

  render() {
    let filteredUsers

    let searchName = this.state.searchRequest.trim().toLowerCase()

    if(this.state.searchRequest.length > 0) {
      filteredUsers = this.props.users
        .filter(user => user.name.toLowerCase().startsWith(searchName))
    }

    return (
      <div id="page">
        <h1>Google Powered Site Search</h1>
        <SearchForm handleChange={this.handleChange} />
        <SearchResult filteredUsers={filteredUsers} />
      </div>
    );
  }
}

export default App
