import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { COLORS, FONT_SIZES } from '../../core/constants';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar_markup.png';

const topBarStyles = makeStyles((theme) => ({
  root: {
    offset: theme.mixins.toolbar,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifContent: 'center',
  },
  companyName: {
    fontWeight: 'bold',
    color: COLORS.headerTable,
    fontSize: FONT_SIZES.logo,
  },
  backToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = topBarStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar className={classes.root} id='back-to-top-anchor'>
          <div className={classes.left}>
            <img src={logo} alt='logo' width='60' />
            <Typography variant='h4' className={classes.companyName}>
              Pharma Inc
            </Typography>
          </div>

          <img src={avatar} alt='avatar' width='40' />
        </Toolbar>
      </AppBar>
    </>
  );
}
