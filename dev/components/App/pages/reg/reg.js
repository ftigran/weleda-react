import React from 'react'
import SimpleForm from "../../../regForm/regForm";
import {Provider, connect} from 'react-redux';
import {store} from '../../../../store/store';
import { Grid } from '@material-ui/core';
import './reg.scss'
const Reg = () =>{
    return (
        <>
            <Grid container justify='center'>
                <Grid container justify='center' className='backgroundContainer'>
                    <Grid container className='pageContainer'>
                    <h3>Регистрация</h3>

                    <Provider store={store}>
                        <SimpleForm onSubmit={ (val)=>console.log(val)}/>
                    </Provider>
                    </Grid>

                </Grid>
            </Grid>
            
        </>
    )
}
export default Reg