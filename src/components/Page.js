import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

  displayCountry(code) {
      switch(code) {
        case 'gb':
          return 'United Kingdom';
        case 'us':
          return 'United States';
        case 'fr':
          return 'France';
        case 'au':
          return 'Australia';
        case 'in':
          return 'India';
        default:
          return 'United Kingdom';
      }
  }

  returnTitle() {
    return (
      <>
        Top 5 headlines for {this.displayCountry(this.props.country)} <br /><br />
        {this.props.countryNumber} page component <br />
        {this.props.country} page component <br />
        {this.props.countryUrl} <br />
      </>
    )

  }


  render() {

    return (
      <>
        {this.returnTitle()}
      </>
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
