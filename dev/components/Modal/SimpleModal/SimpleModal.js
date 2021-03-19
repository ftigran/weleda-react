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
    const open = useSelector(state => state.data.instaPostModalOpen)
    const dispatch = useDispatch()
console.log(open)
    const handleClose = () => {
        dispatch(setInstaPostModal(false));
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
            <h3 id="transition-modal-title">Загрузка работы</h3>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                <CloseIcon/>
                </IconButton>
                <p className={'SimpleModalText'}>
                Спасибо, ссылка принята для проверки.
            </p>
            <p className={'SimpleModalText'}>
                Результат проверки станет доступен в твоем Личном кабинете в течение ближайших 3-х рабочих дней.
            </p>
    <Button  onClick={handleClose} variant='contained' size='large'>ОК
    </Button>          
    </div>
        </Fade>
      </MatModal>
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
import {setSelectPrizModal, setInstaPostModal,setDecrementScore,setPrizSuccessModal, setAdressModal, setPrizRow} from '../../../store/actions'

export const SelectPriz =()=>{
    const open = useSelector(state => state.data.selectPrizModalOpen)
    const priz = useSelector(state => state.data.priz)
    const score = useSelector(state => state.data.score)
    const name=priz.title
    const text=()=>{
        if(priz.isDigital){
            return <>Спасибо!<br/>
            Вы выбрали приз {name}.<br/>
            Приз появится в вашем личном кабинете в таблице «Призы».</>
        }else{
            return <>Спасибо!<br/>
            Вы выбрали приз {name}.<br/>
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
        if(priz.cost<=score){
            if(priz.isDigital){
                dispatch(setPrizSuccessModal(true));
                dispatch(setPrizRow(priz.title, priz.cost))
                dispatch(setDecrementScore(priz.cost));
            }else{
                dispatch(setAdressModal(true));
            }
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
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
const adressFrom= (props)=>{
    //   const handleSubmit= (e)=>{
    //     console.log(e)
    //     }
    const [region, setRegion] = React.useState();
    const [city, setCity] = React.useState();
    const [street, setStreet] = React.useState();
    const [house, setHouse] = React.useState();
    console.log(region)
    const { handleSubmit, pristine, reset, submitting } = props;
    const token = "50af94962e7d986c060a7e79e512b90550b87c77"
    const setReg=(val)=>{
        setRegion(val.data.kladr_id)
}
function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

function formatCity(suggestion) {
  var address = suggestion.data;
  if (address.city_with_type === address.region_with_type) {
      return address.settlement_with_type || "";
    } else {
      return join([
        address.city_with_type,
        address.settlement_with_type]);
    }
}

var type  = "ADDRESS";

// // регион и район
// $region.suggestions({
//   token: token,
//   type: type,
//   hint: false,
//   bounds: "region-area"
// });

// // город и населенный пункт
// $city.suggestions({
//   token: token,
//   type: type,
//   hint: false,
//   bounds: "city-settlement",
//   constraints: $region,
//   formatSelected: formatCity
// });

// // улица
// $street.suggestions({
//   token: token,
//   type: type,
//   hint: false,
//   bounds: "street",
//   constraints: $city,
//   count: 15
// });

// // дом
// $house.suggestions({
//   token: token,
//   type: type,
//   hint: false,
//   noSuggestionsHint: false,
//   bounds: "house",
//   constraints: $street
// });
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
                <AddressSuggestions 
                    token={token}
                    value={region}
                    onChange={setReg} 
                    hint={false}
                    bounds="region-area"
                    />
                <AddressSuggestions 
                    token={token}
                    value={city}
                    onChange={setCity} 
                    hint={false}
                    bounds="city-settlement"
                    filterLocations={[
                        {kladr_id:region}]}
                    formatSelected={formatCity}
                    />
                <Button type='submit' variant='contained' size='large'>Подтвердить</Button>
            </form>
    )}
    const AdressFrom = reduxForm({
        form: 'AdressFrom', // a unique identifier for this form
      })(adressFrom);
export const AdressModal= ()=>{
    const open = useSelector(state => state.data.adressModalOpen)
    const priz = useSelector(state => state.data.priz)
    const score = useSelector(state => state.data.score)
    const dispatch = useDispatch()
console.log(open)
    const handleClose = () => {
        dispatch(setAdressModal(false));
    };
    const submitHandler=()=>{
        dispatch(setPrizSuccessModal(true));
        dispatch(setPrizRow(priz.title, priz.cost))
        dispatch(setDecrementScore(priz.cost));
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
                <AdressFrom onSubmit={submitHandler}/>
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

