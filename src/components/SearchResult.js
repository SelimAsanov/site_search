import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({ filteredUsers }) => (
  <div id="resultsDiv">
    <ul className="search-results">
      {filteredUsers && filteredUsers.map(user =>
        <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      )}
    </ul>
  </div>
)

export default SearchResult
