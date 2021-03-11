import React from 'react'
import SimpleForm from "../../../regForm/regForm";
import {Provider, connect} from 'react-redux';
import {store} from '../../../../store/store';
import { Grid } from '@material-ui/core';
import './reg.scss'
import { useSelector, useDispatch } from 'react-redux'
import {setRegEmailApproveModal} from '../../../../store/actions'
import Button from '@material-ui/core/Button';
import RegEmailApproveModal from '../../../Modal/RegEmailApproveModal/RegEmailApproveModal'
function showResults() {
}
const Reg = () =>{
  const [open, setOpen] = React.useState();
  const dispatch = useDispatch()

    const handler=()=>{
        dispatch(setRegEmailApproveModal(true));
        //setOpen(true);//dispatch(setRegEmailApproveModal(true))
        ///console.log(store.getState)

        //store.dispatch()
        //console.log(store.getState)

    }
    return (
        <>
            <Grid container justify='center'>
                <Grid container justify='center' className='backgroundContainer'>
                    <Grid container className='pageContainer'>
                    <h3>Регистрация</h3>
                        <Button onClick={handler}>qq</Button>
                        <Provider store={store}>
                            <SimpleForm onSubmit={handler} />
                        </Provider>
                        
                        {/* onSubmit={handler} */}
                    </Grid>

                </Grid>
            </Grid>
            
        </>
    )
}
export default Reg