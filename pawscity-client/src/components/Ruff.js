import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
// import PropTypes from 'prop-types';
// import MyButton from '../../util/MyButton';
// import DeleteScream from './DeleteScream';
// import ScreamDialog from './ScreamDialog';
// import LikeButton from './LikeButton';

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Icons
// import ChatIcon from '@material-ui/icons/Chat';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
};

class Ruff extends Component {
  render() {
    const {
      classes,
      ruff: {
        body,
        createdAt,
        pawImage,
        pawHandle,
        ruffId,
        reactionCount,
        commentCount
      },
     } = this.props
    return (
      <Card>
        <CardMedia
          image={pawImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent>
          <Typography variant="h5">
            {pawHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Ruff)

