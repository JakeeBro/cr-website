import { React, Component } from 'react';
import './App.css';
import './components/NavBar/NavBar.css';

import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import ImageSlider3 from './components/ImageSlider/ImageSlider3';
import SliderData from './components/ImageSlider/SliderData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 0
    }
  }

  updateCurrent = ({value}) => {
    this.setState({ current: value})
  }

  render() {
    const { current } = this.state;
    return (
      <div className="App flex flex-column">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <NavBar />
        <LandingPage />
        {/*<ImageSlider className='' slides={SliderData}/>*/}
        {/*<ImageSlider2 />*/}
        {/*<ImageSlider3 slides={SliderData} current={current} update={this.updateCurrent}/>*/}
      </div>
    );
  }
}

export default App;
