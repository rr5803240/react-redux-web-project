import './App.css';
import { Component } from 'react';

import Carousel from '../../components/Carousel/Carousel';
import { connect } from "react-redux";
import Header from '../../components/Header/Header';
import Row from '../../components/Row/Row';
import { getTrendingMovies, getTopRatedMovies, getPopularMovies} from '../../redux/actions';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
       this.props.getTrendingMovies();
       this.props.getTopRatedMovies();
       this.props.getPopularMovies();

  }
  render() {
    return (
      <div className="App"> 
          <Header/>
          <section className="top_section">
               <div >
                <h4>Latest Movies</h4>
               <Row  movies={this.props.topRatedMovies}  /> </div> 
               <div>
               <h4>Upcoming Movies</h4> 
               <Row  movies={this.props.trendingMovies} /> </div> 
               <div>
               <h4>Popular Movies</h4>
               <Row  movies={this.props.popularMovies}  /> </div> 
          </section>
         <Carousel movies={this.props.trendingMovies}  /> 
        
          <Row  movies={this.props.popularMovies} isLargeRow="true" showButton="true"/> 
      </div>
      );
  }

}

const mapStateToProps = (state) => (
{
  trendingMovies: state.trendingMovies,
  topRatedMovies: state.topRatedMovies,
  popularMovies: state.popularMovies,

})


const mapDispatchToProps = {
  getTrendingMovies: getTrendingMovies,
  getTopRatedMovies: getTopRatedMovies,
  getPopularMovies: getPopularMovies,
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
