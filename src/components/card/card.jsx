import React from 'react';
import "./card.css";
import { fetchMovieSeriesOne, modalAction } from "../../actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import Modal from '../modal/modal';
import { BsStarFill, } from 'react-icons/bs';


const Card = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div
        id={card.imdbID}
        key={`${card.Type}_${card.imdbID}`}
        className="card"
        onClick={() => {
          dispatch(fetchMovieSeriesOne(card.imdbID))
          dispatch(modalAction(true))
        }}>
        <img className="poster" src={card.Poster} alt={card.Title} />
        <div className="footerCard">
          <span className="title">{card.Title}</span>
          <span className="year">{card.Year}</span>
        </div>
        <ModalCards />
      </div>
    </React.Fragment>
  )
}

const ModalCards = () => {
  const movieSeriesOne = useSelector((state) => state.movieSeriesReducer);

  let stars = [];

  // for-loop for number pages
  for (let i = 0; i < Math.round(movieSeriesOne.moviesSeriesOne.imdbRating); i++) {
    stars.push(
      <BsStarFill />
    )
  }


  return (
    <Modal>
      <div className="cardModal">
        <img className="posterModal" src={movieSeriesOne.moviesSeriesOne.Poster} alt="poster" />
        <div className="detailsModal">
          <span className="titleModal">{movieSeriesOne.moviesSeriesOne.Title}</span>
          <span className="yearModal">Year: {movieSeriesOne.moviesSeriesOne.Year}</span>
          <span className="ratingModal">
            Rating: {movieSeriesOne.moviesSeriesOne.imdbRating}
            {stars}

          </span>

          <span className="genreModal">Genre: {movieSeriesOne.moviesSeriesOne.Genre}</span>
          <span className="genreActor">Cast: {movieSeriesOne.moviesSeriesOne.Actors}</span>
          <p className="plotModal">Plot: {movieSeriesOne.moviesSeriesOne.Plot}</p>

        </div>
      </div>
    </Modal>
  )
}

export default Card;