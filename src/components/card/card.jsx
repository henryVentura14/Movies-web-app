import React from 'react';
import "./card.css";
import { fetchMovieSeriesOne, modalAction } from "../../actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import Modal from '../modal/modal';


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
  return (
    <Modal>
      <div className="modalCard">
        <img className="posterModal" src={movieSeriesOne.moviesSeriesOne.Poster} alt="poster" />
        <div className="detailsCards">
          <span className="title">{movieSeriesOne.moviesSeriesOne.Title}</span>
        </div>
      </div>
    </Modal>
  )
}

export default Card;