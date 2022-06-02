import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  card: {
    textAlign: 'center',
    maxWidth:800,
    width: 7000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 420,
    width: 640,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actions: {
    display: 'flex',
  },
});

class Page extends React.Component {

  render() {
    const { classes, country } = this.props;

    return (
      country?.articles.map((article) =>
        <List component="nav" className={classes.root} aria-label="contacts">
          <ListItem button>
            <ListItemText primary={article.title} />
          </ListItem>
        </List>
      )
    )
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  article: PropTypes.object
};

Page.defaultProps = {
  classes: {},
  article: {}
}

export default withStyles(styles)(Page);
