import React from 'react';
import Weather from '../Weather/Weather';
import './WeatherTable.css';





class WeatherTable extends React.Component{


render(){

  return (


        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">

         {

        



          this.props.weatherList.map(weather => {

            return <Weather weather={weather}  />
          })
        }





            </div>
          </div>
        </div>

  	);
 


}


}


export default WeatherTable;