import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid';

// import Main from '../pages/main/main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import Registration from '../pages/Registration/Registration'
// import Cabinet from '../pages/Cabinet/Cabinet'

import './tasks.scss'
//import ScrollSection from './scroll-section/scroll-section'

//import FAQ from '../pages/faq/faq'
import Slider from "../slider/slider";

//import Slider from "react-slick";
import arrow from  '../../img/sliderArrow.svg'
import PrizSelectModal from '../Modal/PrizSelectModal/PrizSelectModal'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import TextField from '../TextField/TextField'
import Tabs from './Tabs/Tabs'
import {TaskSend, Sbros} from '../Modal/SimpleModal/SimpleModal'
import { Provider } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import {store} from '../../store/store'
import {required, instaPost} from '../TextField/validation'
import {renderTextField} from '../regForm/renderTextField'
import { useSelector, useDispatch } from 'react-redux'
import {setInstaPostModal, setTaskRow} from '../../store/actions'
const taskFrom= (props)=>{
        const { handleSubmit, pristine, reset, submitting } = props;
        return (
        
            <form onSubmit={handleSubmit}>
                <Grid container wrap='nowrap' justify='space-between' className='instaContainer'>
                        <Grid item className='taskInput'>
                            <Field
                                name="instalink"
                                component={renderTextField}
                                type="text"
                                label="Ссылка на пост в Instagram"
                                validate={[required, instaPost]}
                                />
                            <p className='taskInputLegend'>Загрузите ссылку на пост в Instagram для проверки выполнения задания</p>
                        </Grid>
                        <Button type='submit' variant='contained' size='large'>Отправить задание</Button>
                        <TaskSend/>
                    </Grid>
                
            </form>
    )}
    const TaskFrom = reduxForm({
        form: 'TaskFrom', // a unique identifier for this form
      })(taskFrom);


const task = () => {
    const dispatch = useDispatch()
    const task = useSelector(state => state.data.task)
    const handler = ()=>{
        dispatch(setInstaPostModal(true));
        dispatch(setTaskRow(task))
    }
        return (
            <div className='tasksContainer'>
                    <h3>Задания</h3>
                    <Slider/>
                    <TaskFrom onSubmit={handler}/>
                    
                        <Tabs/>
            </div>
        )
}
export default task;