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
                <img src={top} width='100%'/>
                <Grid container justify='flex-end' className='TopContainer'>
                    <Grid container justify='center' xs={6}>
                        <img src={logo}/>
                        <h1>
                            Стань амбассадором бренда
                            и выиграй призы от Weleda
                        </h1>
                        <Button variant='contained'>
                            Выполнить задание
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}