import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Ruff from '../components/Ruff';
class home extends Component {

  state = {
    ruffs: null
  };

  componentDidMount() {
    axios
      .get('/ruffs')
      .then((res) => {
        console.log(res.data);
        this.setState({
          ruffs: [res.data]
        });
      })
      .catch(err => console.log(err));
  }

  render() {

    // let recentRuffsMarkup = this.state.ruffs ? ( this.state.ruffs.map(ruff => <Ruff ruff={ruff} />)) : (
    //   <p>Loading...</p>
    // );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {/* {recentRuffsMarkup} */}
          <p>Loading...</p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Content...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home
