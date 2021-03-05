import React, { Component } from "react";
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
import Top from '../Top/Top'
import Roadmap from '../Roadmap/Roadmap'
import Main from './pages/main/main'
import LkInfo from '../lkInfo/lkInfo'
import Carousel from '../carousel/carousel'
import PSM from '../lkInfo/lkInfo'

import '@brainhubeu/react-carousel/lib/style.css';
//import Slider from "react-slick";
import arrow from  '../../img/sliderArrow.svg'
import PrizSelectModal from '../Modal/PrizSelectModal/PrizSelectModal'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";



const App = () => {
        const {location} = useReactRouter()
        return (
            <>  
                <Header/>
                <LkInfo/>
                <Carousel/>
                <PrizSelectModal/>
                {/* <Grid className='tasks'>
                <Carousel
                    plugins={[
                        'arrows',
                        'infinite',
                    // {
                    //     resolve: arrowsPlugin,
                    //     options: {
                    //     arrowLeft: <Button><img src={arrow}/></Button>,
                    //     arrowLeftDisabled:<button>qqds</button>,
                    //     arrowRight: <Button><img src={arrow}/></Button>,
                    //     arrowRightDisabled: <button>qq</button>,
                    //     addArrowClickHandler: true,
                    //     }
                    // }
                    ]}
                    
                >
                    <h1>dasd</h1>
                    <h1>dasd</h1>
                    <h2>qq dsaaaa</h2>

                </Carousel>
                
                
                </Grid> */}
                {/* <Main/> */}
                
                {/* <div className={'aas'}/>
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
                </Button> */}
                <Footer/>
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

// const GetItems=(){
//     let
// return(
    
// )
// }

export default App;
