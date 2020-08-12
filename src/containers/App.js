import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Home from '../components/Home';
import   AddArtist   from '../components/AddArtist';
import  EditArtist  from '../components/EditArtist';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {

    return (
      <div className="app">
        <Router>
          <Header  />
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddArtist} />
          <Route path="/edit/:id" component={EditArtist} />
        </Router>
      </div>
    );
  }
// }
// const mapStateToProps = (state) => ({
//   artists: state.artists,
//   selectedPlayerIndex: state.selectedPlayerIndex,
// });
export default App;

