import React, { useState, useEffect } from "react";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import {Link} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import List from './List/List';
import SlideList from './SlideList';
import logo from '../../img/logo.svg'
import './Header.scss'
//import {route} from '../App'
import NavLink from './List/NavLink/NavLink'

const Header = () => {
  const trigger = useScrollTrigger({target: window})
  const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 150);
  //   });
  //}, []);
    return(
      <>
      <Slide appear={false} direction="down" in={true}>
          <AppBar className={"header"}>
              <Grid className={'headerContainer'}
              //height={{md: 50, lg: 70}}
              container
              justify={'space-between'}
              alignItems={'flex-end'}>
                <Link component={NavLink} className={'menu_item_in'} to="/">
                  <img src={logo}/>
                </Link>
                            <List/>
                            {/* <SlideList/> */}
            </Grid>
            </AppBar>
      </Slide>
      </>
    )
}

export default Header