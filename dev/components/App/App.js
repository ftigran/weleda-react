import React, { createContext, useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import useReactRouter from 'use-react-router'
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid';

// import Main from '../pages/main/main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import Registration from '../pages/Registration/Registration'
// import Cabinet from '../pages/Cabinet/Cabinet'

import './App.scss'
//import ScrollSection from './scroll-section/scroll-section'

//import FAQ from '../pages/faq/faq'
import CB from '../Checkbox/Checkbox'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from './pages/main/main'
import Cabinet from './pages/cabinet/cabinet'

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import '@brainhubeu/react-carousel/lib/style.css';
const DataContext = createContext()
import {store} from '../../store/store';
import {Provider, connect} from 'react-redux';
import ScrollSection from '../scroll-section/scroll-section'
import Winners from './pages/winners/winners'
import Reg from './pages/reg/reg'

const Registration = ()=>(<Provider store={store}>
  <Reg/>
  </Provider>)

const App = () => {
    //const { setValues, data } = useData();
  
  //const {location} = useReactRouter()
        return (
            <>  
            <Grid container className='appContainer' direction='column'>
            <Grid item className='appWrap' direction='column'>
                <Header/>
                <Switch location={location}>
                            {/* <Route key='faq' location={location} path={"/faq"}
                            render={() => 
                                <FAQ/>} 
                                exact
                                /> */}
                            <Route path={"/reg"} render={() => <Registration/>}/>
                            <Route path={"/winners"} render={() => <Winners/>}/>
                            <Route path={"/cabinet"} render={() => <Cabinet/>}/>
                            <Route key='index' location={location} path={"/"} render={() => 
                                <Main/>} exact/>
                            <Route path="*" render={() => <Cabinet/>} />
                            
                        </Switch>
                    <ScrollSection/>
            </Grid>
            <Footer/>
            
            </Grid>
                    
            </>
        );
}

export default App;

