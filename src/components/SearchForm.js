import React from 'react'

const SearchForm = ({ handleChange }) => (
  <form id="searchForm">
    <fieldset>
      <input id="s" type="text" onChange={handleChange} />
      <input type="submit" value="Submit" id="submitButton" />
      <div id="searchInContainer">
        <input type="radio" name="check" value="site" id="searchSite" />
        <label id="siteNameLabel">Search</label>
        <input type="radio" name="check" value="web" id="searchWeb" />
        <label>Search The Web</label>
      </div>
      <ul className="icons">
        <li className="web active" title="Web Search" data-searchType="web">Web</li>
        <li className="images" title="Image Search" data-searchType="images">Images</li>
        <li className="news" title="News Search" data-searchType="news">News</li>
        <li className="videos" title="Video Search" data-searchType="video">Videos</li>
        <span className="arrow" style={{left: 0, marginLeft: '3.5px'}}></span>
      </ul>
    </fieldset>
  </form>
)

export default SearchForm
