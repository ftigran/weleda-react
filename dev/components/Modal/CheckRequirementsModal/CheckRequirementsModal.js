import React from "react";

import Grid from '@material-ui/core/Grid';

import Modal from '../Modal'
import './CheckRequirementsModal.scss'
import check from '../../../img/check.png'

export default function (props){
    return (
        <Modal
        btnText='посмотреть требования к чеку'
        title='требования к чеку'
        className='CheckRequirementsModal'
        mainBtnClass={props.mainBtnClass}
        mainBtnVariant={props.mainBtnVariant}
        mainBtnColor={props.mainBtnColor}
        >
            <Grid container className='CheckRequirementsModalContainer'>
                <Grid item>
                    <img src={check}/>
                </Grid>
                <Grid item className='CheckRequirementsModalText'>
                    <h4>
                        На чеке должно быть:
                    </h4>
                    <ul>
                        <li>Наименование магазина</li>
                        <li>Номер чека</li>
                        <li>Дата и время покупки</li>
                        <li>Наличие минимум 2-х акционных продуктов</li>
                        <li>Итоговая сумма покупки</li>
                        <li>QR-код, а в его отсутствие - номера ФН, ФД, ФП/ФПД</li>
                        <p>
                            *При отсутствии в чеке любого из перечисленных пунктов чек будет отклонен
                        </p>
                    </ul>
                </Grid>
            </Grid>
        </Modal>
    )
}