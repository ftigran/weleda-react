import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CB from '../Checkbox/Checkbox'

const lkInfo = () => {
    return (
        <div className="lkInfo">
            <Grid container justify='space-between' className='lkInfoTitle'>
                <h3>Личный кабинет</h3>
                <Button color='primary'>Выйти</Button>
            </Grid>
            <Grid container className='lkInfoContainer' spacing={2}>
                
                <Grid item xs={6} className='lkInfoString'>
                    <span>Имя</span><span>Александра</span>
                </Grid>
                <Grid item xs={6} className='lkInfoString'>
                    <span>Телефон</span><span>+7 (909) 981-32-54</span>
                </Grid>
                <Grid item xs={6} className='lkInfoString'>
                    <span>Фамилия</span><span>Константинова</span>
                </Grid>
                <Grid item xs={6} className='lkInfoString'>
                    <span>Email</span><span>alexandra.konstantinova@mymail.com</span>
                </Grid>
                <Grid item xs={6} className='lkInfoString'>
                    <span>@Instagram</span><span>alexandra_konstantinova</span>
                </Grid>
                <Grid item xs={6} className='lkInfoString'>
                    <CB>
                        Я согласен(а) получать информацию об акции по Email
                    </CB>
                </Grid>
            </Grid>
        </div>
    )
}
export default lkInfo