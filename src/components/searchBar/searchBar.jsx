import React from "react"
import "./searchBar.css"
import { FiSearch } from 'react-icons/fi';


//import { useSelector } from 'react-redux'

const SearchBar = () => {
  //const games = useSelector((state) => state.gamesReducer);
  return (
    <div className="searchBar">
      <div className="header">
        <h2>Movies & Series</h2>
      </div>
      <div className="content">
        <div className="inputGroup">
          <input type="text"
            className="search"
          />
          <FiSearch className="iconSearch"/>
          <div className="radioContent">
            <input type="radio" id="test1" name="radio-group" checked />
            <label htmlFor="test1">Movies</label>

            <input type="radio" id="test2" name="radio-group" />
            <label htmlFor="test2">Series</label>
          </div>
        </div>

      </div>
    </div>
  )
}
export default SearchBar;