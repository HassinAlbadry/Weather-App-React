import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import WeatherTable from '../WeatherTable/WeatherTable';

const weatherObj ={

day:'wed',
date: 'Aug 18',
City: 'Detroit',
highdegree:'80F',

};



const weather = [
  weatherObj,
  weatherObj,
  weatherObj,
  weatherObj,
  weatherObj,
  weatherObj
];

class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <SearchBar />
        <WeatherTable  weatherList={weather}/>
      </div>
    );
  }
}

export default App;