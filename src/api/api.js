const apiKey='';

const unit="imperial";

const api = {
  search(location) {


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    return fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${unit}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.list) {
       
        return jsonResponse.list.slice(0,5).map(weatherr => ({
         
          icon: weatherr.weather[0].icon,
          desc: weatherr.weather[0].description,
          degreeLow: weatherr.main.temp_min,
          degreeHigh: weatherr.main.temp_max
         
        }));
      }
    });
  }
};

export default api;


