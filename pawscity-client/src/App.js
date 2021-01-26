import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components
import Navbar from './components/Navbar';
import themeObject from './util/theme';

// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const customtheme = createMuiTheme(themeObject);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={customtheme}>
        <div className="App">
          <Router>
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/" component={home}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/signup" component={signup}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
