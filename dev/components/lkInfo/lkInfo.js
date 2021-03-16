import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CB from '../Checkbox/Checkbox'
import {useDispatch} from 'react-redux'
import {FormGroup, FormControlLabel, Checkbox, FormControl, FormHelperText} from '@material-ui/core'
import './lkInfo.scss'
const lkInfo = () => {
    // const dispatch = useDispatch()
    // const handlerCB=()=>{   
    //     dispatch()
    // }
    return (
        <div className="lkInfo">
            <Grid container justify='space-between' className='lkInfoTitle'>
                <h3>Личный кабинет</h3>
                <Button color='primary'>Выйти</Button>
            </Grid>
            <Grid container className='lkInfoContainer' spacing={2}>
                
                <Grid item md={6} xs={12} className='lkInfoString'>
                    <p>Имя</p><p>Александра</p>
                </Grid>
                <Grid item md={6} xs={12} className='lkInfoString'>
                    <p>Фамилия</p><p>Константинова</p>
                </Grid>
                <Grid item md={6} xs={12} className='lkInfoString'>
                    <p>Телефон</p><p>+7 (909) 981-32-54</p>
                </Grid>
                
                <Grid item md={6} xs={12} className='lkInfoString'>
                    <p>Email</p><p>alexandra.konstantinova@mymail.com</p>
                </Grid>
                <Grid item md={6} xs={12} className='lkInfoString'>
                    <p>@Instagram</p><p>alexandra_konstantinova</p>
                </Grid>
                <Grid item md={6} xs={12} className='lkInfoString'>
                <FormControlLabel
    control={
        <Checkbox
        className="checkbox"
        name="checkedB"
        color="primary"
        // onChange={handler}
        checkedIcon={<img src={checked}/>}
        icon={<img src={check}/>}
        />
    }
    className
    ='checkboxContainer'
    label={
        'Я согласен(а) получать информацию об акции по Email'

    }
    />
                </Grid>
            </Grid>
        </div>
    )
}
export default lkInfo

import '../Checkbox/Checkbox.scss'
import check from '../../img/checkbox.svg'
import checked from '../../img/checkboxChecked.svg'