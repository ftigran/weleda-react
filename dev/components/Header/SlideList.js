import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import List from './List/List'
import CloseIcon from '@material-ui/icons/Close';
import './SlideList.scss'
import logo from '../../img/logo.svg'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <div
      className={'sliderList'}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{height:'100%'}}
    > 
      <Grid container justify={'space-between'} className={'sliderListHeader'}>
        <img src={logo} />
        <CloseIcon className={'sliderListClose'}/>
      </Grid>
      <List/>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)} className={'headerMenu'}>
            <MenuIcon/>
          </Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
