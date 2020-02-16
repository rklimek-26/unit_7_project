import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import apiKey from "./config";
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Gallery from './Components/Gallery';



class App extends Component {

  constructor() {
      super();
      this.state = {
        photos: [],
        loading: true,
        title: '',

        home: {
          photos: [],
          loading: true
        },
        cats: {
          photos: [],
          loading: true
        },
        dogs: {
          photos: [],
          loading: true
        },
        sunset: {
          photos: [],
          loading: true
        }
      };
    }
    componentDidMount() {
    this.performSearch('people');
//Fetch the data from the Flickr API using Axios
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'people'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
      .then(response => {
        let home = {...this.state.home};
                    home.photos = response.data.photos.photo;
                    home.loading = false;
                    home.title = 'people';
                this.setState({ home })
      })

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'cats'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
        .then(response => {
          let cats = {...this.state.cats};
                      cats.photos = response.data.photos.photo;
                      cats.loading = false;
                      cats.title = 'cats';
                  this.setState({ cats })
        })

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'dogs'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
        .then(response => {
          let dogs = {...this.state.dogs};
                      dogs.photos = response.data.photos.photo;
                      dogs.loading = false;
                      dogs.title = 'dogs';
                  this.setState({ dogs })
        })

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${'sunset'}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
          .then(response => {
            let sunset = {...this.state.sunset};
                        sunset.photos = response.data.photos.photo;
                        sunset.loading = false;
                        sunset.title = 'sunset';
                    this.setState({ sunset })
          })

}
      //retrieve photos after search
      performSearch = (query) => {
          axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&safe_search=1`)
          .then(response => {
               this.setState({
               photos: response.data.photos.photo,
               loading: false,
               title: query
             })
          })

      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  //Install React Router and set up your <Route> and <Link> or <NavLink> elements
  render() {
    return(
      <BrowserRouter>
        <div className="container">
            <Navigation
              onSearch={ this.performSearch }
            />
            <Header />
          <Switch>
           {/*The current route should be reflected in the URL*/}
            <Route exact path="/" render={ () => <Gallery loading={ this.state.home.loading }
                                                          title={ this.state.home.title }
                                                          data={this.state.home.photos } /> } />
            <Route path="/cats" render={ () => <Gallery loading={ this.state.cats.loading }
                                                        title={ this.state.cats.title }
                                                        data={this.state.cats.photos } /> } />
            <Route path="/dogs" render={ () => <Gallery loading={ this.state.dogs.loading }
                                                        title={ this.state.dogs.title }
                                                        data={this.state.dogs.photos } /> } />
            <Route path="/sunset" render={ () => <Gallery loading={ this.state.sunset.loading }
                                                        title={ this.state.sunset.title }
                                                        data={this.state.sunset.photos } /> } />
            <Route path="/search"  render={ () => <Gallery loading={ this.state.loading }
                                                        title={ this.state.title }
                                                        data={this.state.photos } /> } />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }


}
export default App;
