import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import useReactRouter from 'use-react-router'
  import Button from '@material-ui/core/Button';

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

const App = () => {
        const {location} = useReactRouter()
        console.log(location);
        console.log('location');

        return (
            <>  
                <Header/>
                <h1> HEllo</h1>
                <CB/>
                <Button variant='contained'>
                    Получить
                </Button>
                <Button disabled variant='contained'>
                    Получить
                </Button>
                <Button size='small'variant='contained'>
                    Войти
                </Button>
                <Button size='small' variant='outlined'>
                    Войти
                </Button>
                <Button size='large' variant='contained'>
                    Зарегистрироваться
                </Button>
                <Button >
                    Где найти промокод?
                </Button>
                {/* <Header/>
                    <Switch location={location}>
                        <Route key='faq' location={location} path={"/faq"}
                        render={() => 
                            <FAQ/>} 
                            exact
                            />
                        <Route path={"/reg"} render={() => <Registration/>}>
                        </Route>
                        <Route path={"/cabinet"} render={() => <Cabinet/>}>
                        </Route>
                        <Route key='index' location={location} path={"/"} render={() => 
                            <Main/>} exact/>
                        <Route path="*" component={<Cabinet/>} />
                        
                    </Switch>
                <Footer/>
                <ScrollSection/> */}
            </>
        );
    }

export default App;
