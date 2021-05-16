import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';


class App extends React.Component {

  // constructor(props){
  //   super(props);

  //   //initialize state obj -- This is the ONLY time we do a direct assignment to this.state!!
  //   this.state = { latitude: null, longitude: null, errorMessage: ''};
  // };

  //Equivalent to the constructor setup above, which is only initializing state
  state = { latitude: null, longitude: null, errorMessage: ''};

  componentDidMount() {
    //called once automatically after component is added to DOM
    //good place to do initial data loading
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //setState is always used to change state's value!!
        this.setState({ 
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude,
          errorMessage: ''
        }); 
      },
      err => this.setState({ errorMessage: err.message })
    );
  }
  
  componentDidUpdate(){
    //called automatically after component is updated
    //good place to do more data loading when state/props change
    console.log('Component was updated and re-rendered');
  }

  //Render gets called all the dang time, so don't add requests, calls, etc.
  //Ideally, render should only be used to return some JSX
  render() {
      if (this.state.errorMessage && !this.state.latitude){
        return <div>Error: {this.state.errorMessage}</div>;
      }

      if (!this.state.errorMessage && this.state.latitude){
        return <SeasonDisplay latitude = {this.state.latitude} />;
      }

      return <div>Loading...</div>;
  };

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);