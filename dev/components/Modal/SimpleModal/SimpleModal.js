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
        >
            <p className={'SimpleModalText'}>
                {this.props.text}
            </p>
        </Modal>
    )
}
}
export const sbros= <SimpleModal
title={'Восстановление пароля'}
text={'Пароль к твоему Личному кабинету отправленна указанный e-mail'}
btnText={'Восстановить'}
btnFull={true}
/>

export const verify= <SimpleModal
title={'Подтверждение данных'}
text={'На указанный E-mail отправлен пароль. Для завершения регистрации в Акции войди в личный кабинет, указав полученный в письме пароль. Если письмо с паролем так и не приходит, обратись в службу поддержки Акции.'}
btnText={'Зарегистрироваться'} 
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

