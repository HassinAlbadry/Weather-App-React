import React from 'react';
import './SearchBar.css';






class SearchBar extends React.Component{
constructor(props){
  super(props);
  this.state={location:''};

  this.handleLocationChange=this.handleLocationChange.bind(this);
  this.handleSearch=this.handleSearch.bind(this);

}

handleLocationChange(e){
   const location=e.target.value;
  this.setState({location: location});
}


handleSearch(e){



 this.props.searchApi(this.state.location);
  e.preventDefault();


}


render(){

  return (


 <div className="hero" >
          <div className="container">
            <form action="#" className="find-location">
              <input type="text" placeholder="Find your location..."  onChange={this.handleLocationChange}/>
              <input type="submit" defaultValue="Find" onClick={this.handleSearch} />
            </form>
          </div>
 </div>


  	);
 


}


}


export default SearchBar;