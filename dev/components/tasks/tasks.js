import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid';

// import Main from '../pages/main/main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import Registration from '../pages/Registration/Registration'
// import Cabinet from '../pages/Cabinet/Cabinet'

import './tasks.scss'
//import ScrollSection from './scroll-section/scroll-section'

//import FAQ from '../pages/faq/faq'
import Slider from "../slider/slider";

//import Slider from "react-slick";
import arrow from  '../../img/sliderArrow.svg'
import PrizSelectModal from '../Modal/PrizSelectModal/PrizSelectModal'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import TextField from '../TextField/TextField'
import Tabs from './Tabs/Tabs'


const task = () => {
        return (
            <>
                    <h3>Задания</h3>
                    <PrizSelectModal/>
                    <Slider/>
                    <Grid container wrap='nowrap'>
                        <Grid item>
                            <TextField placeholder='Ссылка на пост в Instagram' type='instalink'/>
                            <p>Загрузите ссылку на пост в Instagram для проверки выполнения задания</p>
                        </Grid>
                        <Button className='taskBtn' variant='contained' size='large'>
                            Отправить задание
                        </Button>
                    </Grid>
                    <Tabs/>

                </>
        )
}
export default task;