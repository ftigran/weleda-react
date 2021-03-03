import React, { Component } from "react";

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Checkbox.scss'
import check from '../../img/checkbox.svg'
import checked from '../../img/checkboxChecked.svg'

export default function (props){
    return(
        <FormControlLabel
                control={
                    <Checkbox
                    className="checkbox"
                    name="checkedB"
                    color="primary"
                    checkedIcon={<img src={checked}/>}
                    icon={<img src={check}/>}
                    />
                }
                className
                ='checkboxContainer'
                label={props.children}
                />
    )
}


