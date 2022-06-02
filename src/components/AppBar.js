import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuOptions from './MenuOptions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const displayCountry = (countryCode) => {
    switch(countryCode) {
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {`News for ${displayCountry(props.code)}`}
          </Typography>
          <div edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuOptions updateCountry={props.updateCountry}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
