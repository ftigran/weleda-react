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
            <img src={promocodeImg} width='100%'/>
        </Modal>
    )
}
import { Field, reduxForm } from 'redux-form';
import {setResetEmailApproveModal} from '../../../store/actions'
export const Sbros = ()=>
{
    const dispatch = useDispatch()

    const handler=()=>{
        dispatch(setResetEmailApproveModal(true));
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
            <SbrosFormWrapped onSubmit={handler}/>
        </Modal>
    )
}
import {required, email} from '../../TextField/validation'
import {renderTextField} from '../../regForm/renderTextField'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Backdrop from '@material-ui/core/Backdrop';

const SbrosFrom= (props)=>{
//   const handleSubmit= (e)=>{
//     console.log(e)
//     }
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
    
        <form onSubmit={handleSubmit}>
            <Field
            name="email"
            component={renderTextField}
            type="email"
            label="Email"
            validate={[required, email]}
            />
            <Button type='submit' variant='contained' size='large'>Восстановить</Button>
            <SbrosSendMail/>
        </form>
)}
const SbrosFormWrapped = reduxForm({
    form: 'SbrosForm', // a unique identifier for this form
  })(SbrosFrom);

  import {Modal as MatModal} from '@material-ui/core'

const SbrosSendMail =()=>{
    const open = useSelector(state => state.data.ResetEmailApproveModalOpen)
    const dispatch = useDispatch()
console.log(open)
    const handleClose = () => {
        dispatch(setResetEmailApproveModal(false));
    };
    return(
        <MatModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={'modalWindow LoginModal SimpleModal'}>
            <h3 id="transition-modal-title">Восстановление пароля?</h3>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                <CloseIcon/>
                </IconButton>
                На указанный E-mail отправлен пароль. Для завершения регистрации в Акции войди в личный кабинет, указав полученный в письме пароль. Если письмо с паролем так и не приходит, обратись в службу поддержки Акции.
<Button  onClick={handleClose} variant='contained' size='large'>ОК
    </Button>          
    </div>
        </Fade>
      </MatModal>
    )
}
import {setSelectPrizModal, setPrizSuccessModal, setAdressModal} from '../../../store/actions'

export const SelectPriz =()=>{
    const open = useSelector(state => state.data.selectPrizModalOpen)
    const isDigital=true;
    const name='Промокод на доставку'
    const text=()=>{
        if(isDigital){
            return <>Спасибо!<br/>
            Вы выбрали приз {name}.<br/>
            Приз появится в вашем личном кабинете в таблице «Призы».</>
        }else{
            return <>Спасибо!<br/>
            Вы выбрали приз Косметичка.<br/>
            Для подтверждения приза заполните<br/>
            Адресную форму.</>
        }

    }
    const dispatch = useDispatch()
console.log(open)
    const handleClose = () => {
        dispatch(setSelectPrizModal(false));
    };
    const submitHandler=()=>{
        handleClose()
        if(isDigital){
            dispatch(setPrizSuccessModal(true));
        }else{

        }
    }
    return(
        <MatModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={'modalWindow LoginModal SimpleModal'}>
            <h3 id="transition-modal-title">Выбор приза</h3>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                <CloseIcon/>
                </IconButton>
                {text()}
            <Button  onClick={submitHandler} variant='contained' size='large'>
                Подтвердить
            </Button>
    </div>
        </Fade>
      </MatModal>
    )
}
const adressFrom= (props)=>{
    //   const handleSubmit= (e)=>{
    //     console.log(e)
    //     }
        const { handleSubmit, pristine, reset, submitting } = props;
        return (
        
            <form onSubmit={handleSubmit}>
                <Field
                name="email"
                component={renderTextField}
                type="email"
                label="Email"
                //validate={[required, email]}
                validate={[email]}
                
                />
                <Button type='submit' variant='contained' size='large'>Восстановить</Button>
            </form>
    )}
    const AdressFrom = reduxForm({
        form: 'AdressFrom', // a unique identifier for this form
      })(adressFrom);
export const AdressModal= ()=>{
    const open = useSelector(state => state.data.adressModalOpen)
    
    const dispatch = useDispatch()
console.log(open)
    const handleClose = () => {
        dispatch(setAdressModal(false));
    };
    const submitHandler=()=>{
        if(true){
        }
    }
    return(
        <MatModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={'modalWindow LoginModal SimpleModal'}>
            <h3 id="transition-modal-title">Выбор приза</h3>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                <CloseIcon/>
                </IconButton>
                Пожалуйста, введите информацию для доставки приза ниже:
                <AdressFrom onSubmit={handleClose}/>
    </div>
        </Fade>
      </MatModal>
    )
}
export const PrizSuccess= ()=>{
    const open = useSelector(state => state.data.prizSuccessModalOpen)
    
    const dispatch = useDispatch()
console.log(open)
    const handleClose = () => {
        dispatch(setPrizSuccessModal(false));
    };
    const submitHandler=()=>{
        if(true){
        }
    }
    return(
        <MatModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'modal'}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={'modalWindow LoginModal SimpleModal'}>
            <h3 id="transition-modal-title">Выбор приза</h3>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                <CloseIcon/>
                </IconButton>
                Спасибо!
                <br/>Информация о заказе была отправлена на ваш email.
            <Button  onClick={handleClose} variant='contained' size='large'>
                ОК
            </Button>          
    </div>
        </Fade>
      </MatModal>
    )
}

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

