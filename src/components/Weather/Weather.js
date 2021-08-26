import React from 'react';
import './Weather.css';







class Weather extends React.Component{



render(){

  return (



<div className="forecast">
                <div className="forecast-header">

               
                <div className="day"> {this.props.weather.day} </div>
                <small>{this.props.weather.city}</small>

                </div> {/* .forecast-header */}

                <div className="forecast-content">

                <small>{this.props.weather.desc}</small>

                  <div className="forecast-icon">

                    <img src={'http://openweathermap.org/img/wn/' + this.props.weather.icon +'.png'} alt="" width={48} />

                  </div>
                  <div className="degree">{this.props.weather.degreeHigh}</div>
                  <small>{this.props.weather.degreeLow}</small>
                </div>
              </div>





    );
 


}


}


export default Weather;