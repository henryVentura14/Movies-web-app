import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { FiSearch } from 'react-icons/fi';
import classNames from 'classnames';
import fetchMovieSeries from "../../actions/searchAction";
import "./searchBar.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [bar, setBar] = useState('')
  const [searchGroup, setSearchGroup] = useState('')

  const search = (title, type) => {
    if (title.length >= 3) {
      dispatch(fetchMovieSeries(title, type))
      setBar('bar')
      setSearchGroup('searchGroup')
    }
  }
  return (
    <div className={classNames("searchBar", bar)}>
      <div className="header">
        <h2>Movies & Series</h2>
      </div>
      <div className="content">
        <div className={classNames("inputGroup", searchGroup)}>
          <input type="text"
            onChange={e => setTitle(e.target.value)}
            className="search"
            onChange={e => search(e.target.value, type)}
          />
          <FiSearch className="iconSearch" onClick={() => search(title, type)} />
          <div className="radioContent">
            <input type="radio"
              id="option1"
              name="radio-group"
              defaultValue="movie"
              onFocus={(e) => search(title, 'movie')}
              onChange={e => setType(e.target.value)}
            />
            <label htmlFor="option1">Movies</label>
            <input type="radio"
              id="option2"
              name="radio-group"
              defaultValue="series"
              onFocus={(e) => search(title, 'series')}
              onChange={e => setType(e.target.value)}
            />
            <label htmlFor="option2">Series</label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchBar;