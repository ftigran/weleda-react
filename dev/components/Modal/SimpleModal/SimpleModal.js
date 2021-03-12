import React from 'react';
import Modal from '../Modal'

import './SimpleModal.scss'
export class SimpleModal extends React.Component{
    render(){
    return(
        <Modal 
        className={' SimpleModal'} 
        title={this.props.title} 
        btnText={this.props.btnText}
        childBtnText={'OK'}
        isOpen={this.props.isOpen}
        mainBtnFull={this.props.mainBtnFull}
        btnFull={this.props.btnFull}
        mainBtnVariant='contained'
        mainBtnSize='large'
        btnSize='large'
        >
            <p className={'SimpleModalText'}>
                {this.props.text}
            </p>
        </Modal>
    )
}
}


export const TaskSend = ()=>
{
    return (
        <Modal 
        className={'ModalInsta SimpleModal'} 
        title={'Загрузка работы'} 
        btnText={'Отправить задание'}
        childBtnText={'OK'}
        mainBtnVariant='contained'
        mainBtnSize='large'
        btnSize='large'
        //mainBtnFull={this.props.mainBtnFull}
        //btnFull={this.props.btnFull}
        >
            <p className={'SimpleModalText'}>
                Спасибо, ссылка принята для проверки.
            </p>
            <p className={'SimpleModalText'}>
                Результат проверки станет доступен в твоем Личном кабинете в течение ближайших 3-х рабочих дней.
            </p>
        </Modal>
    )
}
import promocodeImg from '../../../img/wherePromocode.png'
export const WherePromocode = ()=>
{
    return (
        <Modal 
        className={'ModalInsta SimpleModal'} 
        title={'Где найти промокод?'} 
        btnText={'Где найти промокод?'}
        //mainBtnFull={this.props.mainBtnFull}
        //btnFull={this.props.btnFull}
        >
            <p className={'SimpleModalText'}>
            Ваш уникальный промокод расположен на листовке, лежащей внутри подарочного набора
            «100 лет экспертизы Weleda», под QR-кодом.</p>
            <img src={promocodeImg}/>
        </Modal>
    )
}
import { Field, reduxForm } from 'redux-form';
import {setRegEmailApproveModal} from '../../../store/actions'
export const Sbros = ()=>
{
    const dispatch = useDispatch()

    const handler=()=>{
        dispatch(setRegEmailApproveModal(true));
    }

    return (
        <Modal 
        className={'ModalInsta SimpleModal'} 
        title={'Восстановление пароля?'} 
        btnText={'Забыли пароль?'}
        //mainBtnFull={this.props.mainBtnFull}
        //btnFull={this.props.btnFull}
        >
            <p className={'SimpleModalText'}>
                Укажи E-mail, с которым ты зарегистрирован в Акции.
                Пароль к твоему Личqqному кабинету будет отправлен на указанный E-mail.
            </p>
            
            {/* <SbrosFormWrapped/> */}
        </Modal>
    )
}
import {required, email} from '../../TextField/validation'
import TextField from '../../regForm/renderTextField'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';


  
const SbrosFrom= (props)=>{
//   const handleSubmit= (e)=>{
//     console.log(e)
//     }
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
    
        <form onSubmit={handleSubmit} className='regForm'>
            <Field
            name="email"
            component={TextField}
            type="email"
            label="Email"
            validate={[required, email]}
            />
            {/* <Button type='submit'>Восстановить</Button> */}
        </form>
)}
const SbrosFormWrapped = reduxForm({
    form: 'SbrosForm', // a unique identifier for this form
  })(SbrosFrom);
const SbrosSendMail =()=><SimpleModal
title={'Восстановление пароля?'}
text={'На указанный E-mail отправлен пароль. Для завершения регистрации в Акции войди в личный кабинет, указав полученный в письме пароль. Если письмо с паролем так и не приходит, обратись в службу поддержки Акции.'}
btnText={'Зарегистрироваться'} 
/>
export const verify= <SimpleModal
title={'Подтверждение данных'}
text={'Пароль к твоему Личному кабинету отправлен на указанный e-mail.'}
btnText={'ОК'} 
/>


export const regCheck= <SimpleModal
title={'Регистрация чека'}
text={'Спасибо, чек принят для проверки. Результат проверки станет доступен в твоем Личном кабинете в течение ближайших 3-х рабочих дней.'}
btnText={'3'} 
/>

export const question= <SimpleModal
title={'Ваш вопрос отправлен'}
text={'Ответ поступин в ближайшее время на указанную почту'}
btnText={'Задать вопрос'}
mainBtnFull={true}
/>

export class UserError extends React.Component{
    render(){
        console.log('this')
        console.log(this.props)
        console.log(this.props.error)
    return <SimpleModal
title={'Пользователь не найден'}
text={'Проверьте поля'}
isOpen= {this.props.error}
/>
}
}

