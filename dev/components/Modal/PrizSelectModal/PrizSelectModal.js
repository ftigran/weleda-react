import React, { Component } from "react";
import Modal from '../Modal'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './PrizSelectModal.scss'

import i1 from '../../../img/items/1.png'
import i2 from '../../../img/items/2.png'
import i3 from '../../../img/items/3.png'
import i4 from '../../../img/items/4.png'
import i5 from '../../../img/items/5.png'
import i6 from '../../../img/items/6.png'
import i7 from '../../../img/items/7.png'
import i8 from '../../../img/items/8.png'
import i9 from '../../../img/items/9.png'
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
const PSM = () => {
    return(
        <Modal 
            btnText='Выбрать приз'
            isOpen={false}
            title='Витрина призов'
            mainBtnVariant='contained'
            mainBtnSize='large'
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
    )
}
export default PSM;

const ball=12;
const Item = ({img, title, subtitle, cost}) => {

    return (
        <Grid item xs={4} className='priziItemGrid'>
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
