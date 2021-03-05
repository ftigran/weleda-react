import React, { Component } from "react";

import Lkinfo from '../../../lkInfo/lkInfo'
import Tasks from '../../../tasks/tasks'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './cabinet.scss'

const main = () => {
    return (
        <>  
            <Grid className='pageBG' container justify='center'>
                <Grid container  justify='center' className='pageWrapper'>
                        <Grid item className='pageContainer'>
                        <Lkinfo/>
                        <Tasks/>
                        <Grid container justify='space-between' alignItems='center' className='cabinetSelectPrizContainer'>
                            <p className='cabinetSelectPriz'>Общее количество баллов: <span>12</span></p>
                            <Button variant='contained' size='large'>Выбрать приз</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            

        </>
    )
}
export default main