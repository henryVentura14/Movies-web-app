import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { FiSearch } from 'react-icons/fi';
import { fetchMovieSeries } from "../../actions/searchAction";
import classNames from 'classnames';
import "./searchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [bar, setBar] = useState('')
  const [searchGroup, setSearchGroup] = useState('')

  const searchLength = (title, type) => {
    if (title.length >= 3) {
      dispatch(fetchMovieSeries(title, type))
      setBar('bar')
      setSearchGroup('searchGroup')
    }
  }
  const searchEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchMovieSeries(title, type))
    }
  }
  const search = (title, type) => {
    dispatch(fetchMovieSeries(title, type))
  }
  const handleClick = () => {
    setBar('')
    setTitle('')
    setType('')
    setSearchGroup('')
  }
  return (
    <React.Fragment>

      <div className={classNames("searchBar", bar)}>
        <div className="header">
          <h2 onClick={handleClick}>Movies & Series</h2>
        </div>
        <div className="content">
          <div className={classNames("inputGroup", searchGroup)}>
            <input type="text"
              onKeyPress={e => searchEnter(e)}
              onKeyDown={e => setTitle(e.target.value)}
              className="search"
              onChange={e => searchLength(e.target.value, type)}
              placeholder="Search"
            />
            <FiSearch className="iconSearch" onClick={() => search(title, type)} />
            <div className="radioContent">
              <input type="radio"
                id="option1"
                name="radio-group"
                defaultValue="movie"
                onChange={e => setType(e.target.value)}
                defaultChecked={true}
                onFocus={() => search(title, type)}
              />
              <label htmlFor="option1">Movies</label>
              <input type="radio"
                id="option2"
                name="radio-group"
                defaultValue="series"
                onChange={e => setType(e.target.value)}
                onFocus={() => search(title, type)}
              />
              <label htmlFor="option2">Series</label>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SearchBar;