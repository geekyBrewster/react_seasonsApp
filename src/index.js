import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './components/SeasonDisplay'

class App extends React.Component {
  constructor(props){
    super(props);

    //initialize state obj
    //This is the ONLY time we do a direct assignment to this.state!!
    this.state = { latitude: null, longitude: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //setState is always used to change state's value!!
        this.setState({ 
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude,
          errorMessage: ''
        }); 
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  };

  //Render gets called all the dang time, so don't add requests, calls, etc.
  render() {
      if (this.state.errorMessage && (!this.state.latitude && !this.state.longitude)){
        return <div>{this.state.errorMessage}</div>;
      }

      if (!this.state.errorMessage && (this.state.latitude && this.state.longitude)){
        return (
          <div>
            <div>Latitude: {this.state.latitude}</div>
            <div>Longitude: {this.state.longitude}</div>
          </div>
        );
      }

      return <div>Loading...</div>;
  };

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);