import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Modal from '../Modal'
import { changeUser, toggleError} from "../../../store/actions";
import './LoginModal.scss'
//import {WrapedUserError} from '../UserLoginErrorModal/UserLoginErrorModal'
import {sbros} from '../SimpleModal/SimpleModal'
import { Field, reduxForm } from 'redux-form';
import { renderTextField as TextField } from '../../regForm/renderTextField'
import {required, phoneNumber, promoNumber, email, maxLength, minLength, kirilicName, instaUser, isTrue, pass} from '../../TextField/validation'
import { Grid } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'
import {Provider, connect} from 'react-redux';
import {store} from '../../../store/store';
import { useHistory } from 'react-router';
// import {RegEmailApproveModal} from '../Modal/RegEmailApproveModal/RegEmailApproveModal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export function LoginModal(){
    const dispatch = useDispatch();
    const users = [
        createUsers('1@Q.ru', 555555, 'Юлия','+7 999 333 2775', 4, 2),
        createUsers('2@Q.ru', 123456, 'Юрий','+7 999 695 5555',1,9),
        createUsers('3@Q.ru', 111111, 'Алексей','+7 999 690 0000',100,510)
      ]
    let SetEmail = setEmail.bind(this);
    let SetPass = setPass.bind(this);
    function setEmail(val){
        email=val
    }
    function setPass(val){
        pass=val
    }
    //let email;
    //let pass;
    let history = useHistory();

    function handleEnter(){
          let name;
          users.map((user)=>{
              if (user.email==email&&user.pass==pass){
                name = user;
                console.log(name)
              }
          })
        if(name){
          dispatch(changeUser({
              prizi: name.prizi,
              cheki:name.cheki,
              name: name.name,
              phone: name.phone
            }))
            //history.push('/cabinet');
        }else {
            dispatch(toggleError())
        }
      };
      
    function createUsers(email, pass, name,phone, cheki=0, prizi=0){
        return {
          email,
          pass,
          name,
          phone,
          cheki,
          prizi
        }
      }
        return (
            <Modal 
            className={' LoginModal'} 
            title='Авторизация' 
            btnText={'Войти'}
                    isOpen={true}
                    mainBtnVariant='outlined'
            >
              <form onSubmit={handleEnter} className='regForm'>
                <Grid container justify='space-between'>
                  <Grid item className='FormTextFieldContainer'>
                      <Field
                        name="email"
                        component={TextField}
                        type="email"
                        label="Email"
                        validate={[required, email]}
                      />
                      <Field
                        name="password"
                        component={TextField}
                        type="password"
                        label="Пароль"
                        validate={[required, pass]}
                      />
                  </Grid>
                </Grid>
      {/* <Grid container direction='column' className="regFormDown">
       <RegEmailApproveModal/>
      </Grid> */}
    </form>
            {/* <WrapedUserError/> */}

                {/* <TextField handler={SetEmail} className='LoginModalEmail' type='email' placeholder='E-mail'></TextField> */}
    
                {/* <TextField handler={SetPass} className='LoginModalPassword' type='password' placeholder='Пароль'></TextField> */}
                  {/* <Modal 
                    className={' LoginModalReset'} 
                    title='Восстановление пароля' 
                    btnText={'Забыл пароль?'}
                    mainBtnClass='sbrosButton'
                    >
                      <p>
                      Укажи E-mail, с которым ты зарегистрирован 
                      в Акции.
                      </p>
                      <p>
                      Пароль к твоему Личному кабинету будет отправлен на указанный E-mail.
                      </p>
                      <TextField handler={SetEmail} className='LoginModalEmail' type='email' placeholder='E-mail'></TextField>
                      {sbros}
                    </Modal>
                <Button 
                className='LoginModalEnter'
                fullWidth
                onClick={()=>{
                    handleEnter();
                    }}>
                        Войти
                </Button>
                <Button 
                className='LoginModalReg'
                fullWidth
                variant='outlined'
                onClick={()=>{
                    handleEnter();
                    }}>
                        Зарегестрироваться
                </Button> */}
                {/* <Modal 
                className={' LoginModal'} 
                title='Авторизация' 
                btnText={'Зарегистрироваться'}
                childBtnText={'OK'}
                > 
                </Modal>*/}
            </Modal>
        )
    }
    

// export default connect(
//     null,
//     {changeUser, toggleError}
//   )(LoginModal);
export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
})(LoginModal);