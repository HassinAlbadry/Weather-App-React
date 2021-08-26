import React from 'react';
import './App.css';
import imgsource from './images/icons/icon-3.svg';
import SearchBar from '../SearchBar/SearchBar';
import WeatherTable from '../WeatherTable/WeatherTable';
import api from '../../api/api';


class App extends React.Component {
  
   constructor(props) {
    super(props);

    this.state = {
      weatherList: []
    };

    this.searchApi = this.searchApi.bind(this);
    this.addDays = this.addDays.bind(this);
  }

  searchApi(location) {
     
    api.search(location).then(weatherList => {
      this.addDays(weatherList);

       for(let k=0;k<weatherList.length;k++){
           weatherList[k].city=location;
      }

      this.setState({weatherList: weatherList});
      
    });
  }

  addDays(weatherList){
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];

      let i=0;

      for(let k=0;k<weatherList.length;k++){
      weatherList[k].day=days[k];
      console.log(weatherList);

      }
    }


  

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <SearchBar searchApi={this.searchApi}   />

        
        <WeatherTable  weatherList={this.state.weatherList}  />
      </div>
    );
  }
}

export default App;