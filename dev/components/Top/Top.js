import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './Top.scss'
import logo from '../../img/100YearsB.png';
// import top from '../../img/top.png';
import { Link } from "react-router-dom";
import useReactRouter from 'use-react-router'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Main =()=> {
    const {history} = useReactRouter()
    const handleClick = () => {
        if (window.location.pathname !== '') {
            history.push(`/#c_rules`)
        }
    }
        return (
            <div className='Top' id='c_main'>
                <Grid container alignItems='flex-start' justify='center' className='TopContainer1'>
                    <Grid container alignItems='flex-start' justify='flex-end' className='TopContainer2'>
                        <Grid container justify='center' xs={6} className='TopContainer3'>
                            <Grid container alignItems='center' className='TopContainer4' direction='column'>
                            <img src={logo} className='TopImgLogo' />
                            <h1>
                                Стань<br/> амбассадором бренда <br/>
                                и выиграй призы<br/> от Weleda
                            </h1>
                            <Button variant='contained'>
                                Выполнить задание
                            </Button>
                            <ScrollLink
                                    onClick={handleClick}
                                    activeClass="active"
                                    to={'c_rules'}
                                    smooth
                                    duration={700}
                                    //ignoreCancelEvents
                                >
                                    <div id="cta">
                                        <span className="arrow primera next "></span>
                                        <span className="arrow segunda next "></span>
                                    </div>
                                </ScrollLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }

    export default Main