import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './Top.scss'
import logo from '../../img/100YearsB.png';
import top from '../../img/top.png';

export default class Main extends Component {
    render() {
        return (
            <div className='Top'>
                <img src={top} width='100%' className='TopImg' />
                <Grid container alignItems='flex-start' justify='center' className='TopContainer1'>
                    <Grid container alignItems='flex-start' justify='flex-end' className='TopContainer2'>
                        <Grid container justify='center' xs={6} className='TopContainer3'>
                            <Grid container alignItems='center' className='TopContainer4' direction='column'>
                            <img src={logo}/>
                            <h1>
                                Стань амбассадором бренда <br/>
                                и выиграй призы от Weleda
                            </h1>
                            <Button variant='contained'>
                                Выполнить задание
                            </Button>
                            <div id="cta">
                                <span className="arrow primera next "></span>
                                <span className="arrow segunda next "></span>
                            </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}