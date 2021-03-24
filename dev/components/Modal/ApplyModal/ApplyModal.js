import React, { Component } from "react";

import {FormControl, InputLabel, List, ListItem, ListItemIcon,InsertDriveFile,ListItemText, Select, MenuItem, TextField as MatTextField} from '@material-ui/core';
import Modal from '@material-ui/core/Modal'
import { changeUser, toggleError} from "../../../store/actions";
import './ApplyModal.scss'
import { renderTextField as TextField } from '../../regForm/renderTextField'
//import {WrapedUserError} from '../UserLoginErrorModal/UserLoginErrorModal'
import {Sbros} from '../SimpleModal/SimpleModal'
import { Field, reduxForm } from 'redux-form';
import { renderTextField} from '../../regForm/renderTextField'
import {required, phoneNumber, promoNumber, email, maxLength, minLength, kirilicName, instaUser, isTrue, pass} from '../../TextField/validation'
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {Provider, connect} from 'react-redux';
import {store} from '../../../store/store';
import {selectCity} from '../../../store/actions';

import { useHistory } from 'react-router';
// import {RegEmailApproveModal} from '../Modal/RegEmailApproveModal/RegEmailApproveModal'

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {

  return(
  <FormControl error={touched && error}>
    <InputLabel htmlFor="city-native-simple">Age</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'city',
        id: 'city-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)}
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}
const renderSelect=({
  label,
  input,
  className='',
  meta: { touched, invalid, error },
  ...custom
})=>{
  const city = useSelector(state => state.data.selectCity)
  const dispatch= useDispatch()
  const handleChange = (event) => {
    dispatch(selectCity(event.target.value));
  };
  return(
    <FormControl variant="outlined" fullWidth {...input}
    {...custom}>
    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={city}
      onChange={handleChange}
    >
      <MenuItem value={1}>Санкт-Петербург</MenuItem>
      <MenuItem value={2}>Краснодар</MenuItem>
      <MenuItem value={3}>Новосибирск</MenuItem>
      <MenuItem value={4}>Екатеримбдург</MenuItem>
      <MenuItem value={5}>Красноярск</MenuItem>
      <MenuItem value={6}>Другой</MenuItem>
    </Select>
  </FormControl>
  )
}
import { AddressSuggestions } from 'react-dadata';

const GetForm=()=>{
  const city = useSelector(state => state.data.selectCity)
  console.log('city')
  console.log(city)
  const AdressField=({city})=>{
    const [address, setAddress] = React.useState();
    const [error, setError] = React.useState();
    const [str, setStr] = React.useState();
    const hand = (e)=>{
      console.log(e)
    }
    const sub = (e)=>{
      e.preventDefault();
      if(address){
          if (!address.data.city && !address.data.settlement) {
              setError("Укажите населённый пункт");
            } else if (!address.data.settlement && !address.data.street) {
              setError("Укажите улицу");
            } else if (!address.data.house) {
              setError("Укажите дом");
            }else{
              handleSubmit(e)
            }
      } else{
          setError('Введите адрес')
      }
  }
    const kladrs=['7800000000000', '2300000100000', '5400000100000', '6600000100000', '2400000100000'];
    return(
    <AddressSuggestions
                    token={"50af94962e7d986c060a7e79e512b90550b87c77"}
                    value={address}
                    onChange={(e)=>{
                        setError();
                        setAddress(e)}}
                        filterLocations={city?[{kladr_id: kladrs[city]}]:null}
                    customInput={(props)=>(
                        <MatTextField
                        onChange={hand}
              label="Адрес"
              variant="outlined"
              error={error}
              helperText={error}
              fullWidth
              {...props}
            />
            )}
                />
  )}
  if (city==6){
    return null
  }else if (city>-2){
    console.log('aaaq')
    return(<AdressField city={1}/>);
  }else{
    return null;
  }
}
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DropZone from "react-dropzone";
// const DropZoneField = ({
//   handleOnDrop,
//   input,
//   imagefile,
//   label,
//   meta: { error, touched }
// }) => (
//   <div className="preview-container">
//     <DropZone
//       accept="image/jpeg, image/png, image/gif, image/bmp"
//       className="upload-container"
//       onDrop={handleOnDrop}
//       onChange={file => input.onChange(file)}
//     >
//       {imagefile && imagefile.length > 0 ?
//         imagefile.map(({ name, preview, size }) => (
//     <div key={name} className="render-preview">
//       <div className="image-container">
//         <img src={preview} alt={name} />
//       </div>
//       <div className="details">
//         {name} - {(size / 1024000).toFixed(2)}MB
//       </div>
//     </div>
//   ))
//       : (
//         <div className={`placeholder-preview ${error && touched ? "has-error" : ""}`}>
//     <CloudUploadIcon style={{ fontSize: 100, paddingTop: 70 }} />
//     <p>Click or drag image file to this area to upload.</p>
//   </div>
//       )}
//     </DropZone>
//     {touched && error && <ShowError error={error} />}
//   </div>
// );
const LogForm=(props)=>{
  const { handleSubmit, pristine, reset, submitting } = props;
  const dispatch = useDispatch()
  const handleCitySelect = (event) => {
    dispatch(selectCity(event.target.options.selectedIndex));
  };
  const state = { imageFile: [] };
  const handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });
  const imageIsRequired = value => (!value ? "Required" : undefined);
  const DropZoneFields = ({
    handleOnDrop,
    input,
    imagefile,
    label,
    meta: { error, touched }
  }) => (
    <div className="preview-container">
      <DropZone
        // accept="image/jpeg, image/png, image/gif, image/bmp"
        // className="upload-container"
        // onDrop={handleOnDrop}
        // onChange={file => input.onChange(file)}
      >
        {/* {imagefile && imagefile.length > 0 ? (
          <ImagePreview imagefile={imagefile} />
        ) : (
          <Placeholder error={error} touched={touched} />
        )} */}
      </DropZone>
      {touched && error && <ShowError error={error} />}
    </div>
  );
  return(
<form onSubmit={handleSubmit} className='regForm'>
      <Grid spacing={2} container justify='center' className='regFormContainer'>
        <Grid sm={6} item className='FormTextFieldContainer'>
          <Field
              name="firstName"
              component={TextField}
              type="text"
              label="Имя"
              validate={[required, maxLength(20, 'Имя должно'), minLength(2, 'Имя должно'), kirilicName]}
            />
            <Field
              name="fatherName"
              component={TextField}
              type="text"
              label="Отчество"
              validate={[required, maxLength(20, 'Отчество должно'), minLength(2, 'Отчество должно'), kirilicName]}

            />
            <Field
              name="email"
              component={TextField}
              type="email"
              label="Email"
              validate={[required, email]}
            />
        </Grid>
        <Grid sm={6} item className='FormTextFieldContainer'>
          <Field
              name="lastName"
              component={TextField}
              type="text"
              label="Фамилия"
              validate={[required, maxLength(20, 'Фамилия должна'), minLength(2, 'Фамилия должна'), kirilicName]}

            />
          <Field
              name="city"
              component={renderSelectField}
              validate={[required]}
              label="Город"
              variant="outlined"
              fullWidth
              onChange={handleCitySelect}
            >
            <option value={0}></option>
            <option value={1}>Санкт-Петербург</option>
            <option value={2}>Краснодар</option>
            <option value={3}>Новосибирск</option>
            <option value={4}>Екатеримбдург</option>
            <option value={5}>Красноярск</option>
            <option value={6}>Другой</option>
          </Field>
           <Field
              name="phone"
              component={TextField}
              type="tel"
              label="Телефон"
              validate={[required, phoneNumber]}
            />
        </Grid>
      </Grid>
      <Field
              name="about"
              component={TextField}
              type="text"
              label="Расскажите о себе"
              validate={[required, maxLength(600, 'Сообщение должно'), minLength(2, 'Сообщение должно'), kirilicName]}
            />
            <GetForm/>
            <Field
          name="imageToUpload"
          component={DropZoneFields}
          type="file"
          imagefile={state.imageFile}
          handleOnDrop={handleOnDrop}
          validate={[imageIsRequired]}
        />

    </form>
)
}
// export default connect(
//     null,
//     {changeUser, toggleError}
//   )(LoginModal);
const LoginForm = reduxForm({
  form: 'applyForm', // a unique identifier for this form
})(LogForm);
import {setLoginModal, userLog} from '../../../store/actions'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default function LoginModal(){
    const users = [
        createUsers('1@Q.ru', 555555, 'Юлия','+7 999 333 2775', 4, 2),
        createUsers('2@Q.ru', 123456, 'Юрий','+7 999 695 5555',1,9),
        createUsers('3@Q.ru', 111111, 'Алексей','+7 999 690 0000',100,510)
      ]
      let history = useHistory();

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
    const open =true//useSelector(state => state.data.LoginModalOpen)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setLoginModal(false));
    };
    const handleEnter=()=>{
      dispatch(userLog(true));
      dispatch(setLoginModal(false));
      history.push('/cabinet')
      console.log('enter')
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
            <h3 id="transition-modal-title" className='regFormTitle'>Авторизация</h3>
                <IconButton
                aria-label="Закрыть окно"
                className={'modalWindowClose'}
                onClick={handleClose}
                >
                    <CloseIcon/>
                </IconButton>
                <LoginForm onSubmit={handleEnter}/>            
          </div>
        </Fade>
      </Modal>
        )
    }
    
