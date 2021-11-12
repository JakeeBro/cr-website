import { React, Component } from 'react';
import './App.css';
import './components/NavBar/NavBar.css';

import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
// import ImageSlider3 from './components/ImageSlider/ImageSlider3';
// import SliderData from './components/ImageSlider/SliderData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      largeView: true
    };

    // no idea what this line does
    // this.updatePredicate = this.updatePredicate.bind(this);
  }

  updateCurrent = ({value}) => {
    // this.setState({ current: value})
  }

  updatePredicate = () => {
    this.setState({ largeView: window.innerWidth > 800 }, () => {
      console.log('UP: ', this.state.largeView);
    });
  }

  componentDidMount = () => {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updatePredicate);
  }

  printView = () => {
    console.log(this.state.largeView);
  }

  render() {
    // const { current } = this.state;
    const largeView = this.state.largeView;

    return (
      <div className="App flex flex-column">
        <NavBar largeView={largeView}/>
        {/*<LandingPage />*/}
        {/*<ImageSlider className='' slides={SliderData}/>*/}
        {/*<ImageSlider2 />*/}
        {/*<ImageSlider3 slides={SliderData} current={current} update={this.updateCurrent}/>*/}
      </div>
    );
  }
}

export default App;
