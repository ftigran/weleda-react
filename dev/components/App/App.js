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

import '@brainhubeu/react-carousel/lib/style.css';
//import Slider from "react-slick";
import arrow from  '../../img/sliderArrow.svg'
import Modal from '../Modal/Modal'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import i1 from '../../img/items/1.png'
import i2 from '../../img/items/2.png'
import i3 from '../../img/items/3.png'
import i4 from '../../img/items/4.png'
import i5 from '../../img/items/5.png'
import i6 from '../../img/items/6.png'
import i7 from '../../img/items/7.png'
import i8 from '../../img/items/8.png'
import i9 from '../../img/items/9.png'
const itemsArr=[
    {
        title:'Набор из 4-х мини-продуктов*',
        subtitle:'*набор составляется из продуктов в наличии',
        img: i1,
        cost: 5,
    },
    {
        title:'Промокод на бесплатную доставку',
        img: i2,
        cost: 10,
    },{
        title:'Косметичка из органического хлопка',
        img: i3,
        cost: 10,
    },{
        title:'Промокод на покупку в интернет-магазине*',
        subtitle:'*скидка 30%',
        img: i4,
        cost: 15,
    },{
        title:'Сумка из органического хлопка',
        img: i5,
        cost: 15,
    },{
        title:'Набор из 3-х продуктов *',
        subtitle:'*набор составляется из продуктов в наличии',
        img: i6,
        cost: 20,
    },{
        title:'Набор для спорта: бутылка для воды + массажное масло с арникой',
        img: i7,
        cost: 25,
    },{
        title:'Толстовка',
        img: i8,
        cost: 30,
    },{
        title:'Рюкзак',
        img: i9,
        cost: 40,
    },

]

const App = () => {
        const {location} = useReactRouter()
        return (
            <>  
                <Header/>
                <LkInfo/>
                <Carousel/>
                <Modal 
                brnText='Выбрать приз'
                isOpen={true}
                title='Витрина призов'
                >
                    <Grid container justify='space-between' className='priziContainer'>
                        {itemsArr.map((item, id)=>{
                            return <Item
                            {...item}
                            key={id}
                            />
                        })}
                    </Grid>
                    
                </Modal>
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
const ball=12;
const Item = ({img, title, subtitle, cost}) => {

    return (
        <Grid item xs={4}>
            <Grid container direction='column' alignItems='center' justify='space-between' className='priziItemContainer'>
                <Grid item className='priziItemWrap'>
                    <img src={img}/>
                    <p className='priziItemTitle'>{title}</p>
                    <p className='priziItemSubtitle'>{subtitle}</p>
                </Grid>
                <Grid item className='priziItemWrap'>
                    <p className='priziItemCost'>{cost} баллов</p>
                    <Button variant='contained' disabled={cost>ball}>Получить</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}