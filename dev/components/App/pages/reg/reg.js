import React from 'react'
import SimpleForm from "../../../regForm/regForm";
import {Provider, connect} from 'react-redux';

const Reg = () =>{
    return (
        <>
            <h3>Регистрация</h3>
            <Provider store={store}>
              <SimpleForm onSubmit={ (val)=>console.log(val)}/>
            </Provider>
        </>
    )
}
export default Reg