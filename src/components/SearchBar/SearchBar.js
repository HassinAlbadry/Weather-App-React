import React from 'react';
import './SearchBar.css';






class SearchBar extends React.Component{



render(){

  return (


 <div className="hero" >
          <div className="container">
            <form action="#" className="find-location">
              <input type="text" placeholder="Find your location..." />
              <input type="submit" defaultValue="Find" />
            </form>
          </div>
 </div>


  	);
 


}


}


export default SearchBar;