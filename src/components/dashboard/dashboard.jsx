import React from "react"
import {useSelector } from "react-redux";
import "./dashboard.css"
import Card from '../card/card';

const Dashboard = () => {
  const movieSeries = useSelector((state) => state.movieSeriesReducer);
  return (
    <React.Fragment>
    <div className="dashboard">
      <div className="content">
        {movieSeries.moviesSeries.length > 0 &&
          <div className="contentCard">
            {movieSeries.moviesSeries.map((card, i) =>
              <Card key={`${i}_${card.imdbID}`} card={card} />
            )}
          </div>
        }
      </div>
    </div>
    </React.Fragment>
  )
}
export default Dashboard;