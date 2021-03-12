import React, { Component } from "react";
import {FormGroup, FormControlLabel, Checkbox, FormControl, FormHelperText} from '@material-ui/core'

import './Checkbox.scss'
import check from '../../img/checkbox.svg'
import checked from '../../img/checkboxChecked.svg'

export default function ({label, input, meta: {touched, invalid, error}, disabled, ...props}){
    return(
        <FormControl className={'checkboxFormControl'}>
      <FormGroup row>
      <FormControlLabel
                control={
                    <Checkbox
                    className="checkbox"
                    name="checkedB"
                    color="primary"
                disabled={disabled}
                    onChange={(event) => {
                        input.onChange(event)
                      }}
                      checked={!!input.value}
                    checkedIcon={<img src={checked}/>}
                    icon={<img src={check}/>}
                    />
                }
                className
                ='checkboxContainer'
                label={label}
                />
      </FormGroup>
      <FormHelperText>{touched && invalid && <>{error}</>}</FormHelperText>
    </FormControl>
        
    )
}


