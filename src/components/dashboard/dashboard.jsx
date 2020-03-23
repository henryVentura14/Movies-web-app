import React from "react"
import "./dashboard.css"
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const movieSeries = useSelector((state) => state.movieSeriesReducer);
  return (
    <div className="dashboard">
      <div className="content">
        {movieSeries.moviesSeries.length > 0 &&
          <div className="contentCard">
            {movieSeries.moviesSeries.map((card, i) =>
              <div key={`${card.Type}_${card.imdbID}`} className="card">
                <img className="poster" src={card.Poster} alt={card.Title} />
                <div className="footerCard">
                  <span className="title">{card.Title}</span>
                  <span className="year">{card.Year}</span>
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  )
}
export default Dashboard;