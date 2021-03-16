import React, { Component } from "react";

import Lkinfo from '../../../lkInfo/lkInfo'
import Tasks from '../../../tasks/tasks'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PrizSelectModal from '../../../Modal/PrizSelectModal/PrizSelectModal'

import './cabinet.scss'

const main = () => {
    return (
        <>  
            <Grid className='pageBG' container justify='center' id='cabinet'>
                <Grid container  justify='center' className='pageWrapper'>
                    <Grid xs={11}item className='pageContainer' alignSelf='flex-end'>
                        <Lkinfo/>
                    </Grid>
                    <Grid xs={10}item className='pageContainer'>
                        <Tasks/>
                        <Grid container justify='space-between' alignItems='center' className='cabinetSelectPrizContainer'>
                            <p className='cabinetSelectPriz'>Общее количество баллов: <span>12</span></p>
                            <PrizSelectModal/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            

        </>
    )
}
export default main