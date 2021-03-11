import React, { createContext, useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import useReactRouter from 'use-react-router'
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid';

// import Main from '../pages/main/main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import Registration from '../pages/Registration/Registration'
// import Cabinet from '../pages/Cabinet/Cabinet'

import './App.scss'
//import ScrollSection from './scroll-section/scroll-section'

//import FAQ from '../pages/faq/faq'
import CB from '../Checkbox/Checkbox'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Top from '../Top/Top'
import Roadmap from '../Roadmap/Roadmap'
import Main from './pages/main/main'
import LkInfo from '../lkInfo/lkInfo'
import Carousel from '../carousel/carousel'
import PSM from '../lkInfo/lkInfo'
import Slider from "../slider/slider";
import Cabinet from './pages/cabinet/cabinet'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import '@brainhubeu/react-carousel/lib/style.css';
//import Slider from "react-slick";
import arrow from  '../../img/sliderArrow.svg'
import PrizSelectModal from '../Modal/PrizSelectModal/PrizSelectModal'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import TextField from '../TextField/TextField'
import Task from '../tasks/tasks'
import {Input} from '../Input/Input'
import * as yup from "yup";
const DataContext = createContext()
import { yupResolver } from "@hookform/resolvers";
import {store} from '../../store/store';

// export const DataProvider = ({children}) => {
//   const [data, setData] = useState({});

//   const setValues = (values) => {
//     setData(prevData => ({
//       ...prevData,
//       ...values
//     }))
//   }

//   return <DataContext.Provider value={{data, setValues}}>
//     {children}
//   </DataContext.Provider>
// }
//const useData = () => useContext(DataContext)

const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required("First name is a required field"),
    lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
    instagram: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
    PhoneNumber: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
    email: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
    promocode: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
  });
  import { Field, reduxForm } from 'redux-form'

  import {regUser, setPopup} from '../../store/actions'

  import {useDispatch, useSelector} from "react-redux";
//   const Reg = ()=>{
//     const dispatch = useDispatch()
//     //console.log('props')

//     const user = useSelector(state => state.user)

//     //const { setValues, data } = useData();
//     const history = useHistory();
//     //const { register, handleSubmit, errors } = useForm({
//       // defaultValues: {
//       //   firstName: user.firstName,
//       //   lastName: user.lastName 
//       // },
//     //   mode: "onBlur",
//     //   resolver: yupResolver(schema),
//     // });
//     const handleSubmit = (data) => {
//       //history.push("./step2");
//       dispatch(regUser(data));
//       console.log(user)
//       console.log(data)
//     };

// return(
// <>
//   <h3>{user.firstName}</h3>
//          <form noValidate onSubmit={handleSubmit}>
//          <Field
//          name='firstName'
//          type="text"
//          component='input'
//           ></Field>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//           >
//             children
//           </Button>
//       </form>
// </>

// )
// }

import Reg from './pages/reg/reg'

class App extends React.Component{
  render(){
    //const { setValues, data } = useData();
  
  //const {location} = useReactRouter()
        return (
            <>  
                    <Provider store={store}>

              <Reg/>
              </Provider>


                {/* <Header/> */}
                {/* <Cabinet/> */}
                
                {/* <LkInfo/>
                <div className='qq'>

                <Button> Где найти промокод?</Button>
                </div>
                <Task/> */}
                {/* <Grid className='tasks'>
                <Carousel
                    plugins={[
                        'arrows',
                        'infinite',
                    // {
                    //     resolve: arrowsPlugin,
                    //     options: {
                    //     arrowLeft: <Button><img src={arrow}/></Button>,
                    //     arrowLeftDisabled:<button>qqds</button>,
                    //     arrowRight: <Button><img src={arrow}/></Button>,
                    //     arrowRightDisabled: <button>qq</button>,
                    //     addArrowClickHandler: true,
                    //     }
                    // }
                    ]}
                    
                >
                    <h1>dasd</h1>
                    <h1>dasd</h1>
                    <h2>qq dsaaaa</h2>

                </Carousel>
                
                
                </Grid> */}
                {/* <Main/> */}
                
                {/* <div className={'aas'}/>
                <h1> HEllo</h1>
                <CB/>
                <Button variant='contained'>
                    Получить
                </Button>
                <Button disabled variant='contained'>
                    Получить
                </Button>
                <Button size='small'variant='contained'>
                    Войти
                </Button>
                <Button size='small' variant='outlined'>
                    Войти
                </Button>
                <Button size='large' variant='contained'>
                    Зарегистрироваться
                </Button>
                <Button >
                    Где найти промокод?
                </Button> */}
                <Footer/>
                {/* <Header/>
                    <Switch location={location}>
                        <Route key='faq' location={location} path={"/faq"}
                        render={() => 
                            <FAQ/>} 
                            exact
                            />
                        <Route path={"/reg"} render={() => <Registration/>}>
                        </Route>
                        <Route path={"/cabinet"} render={() => <Cabinet/>}>
                        </Route>
                        <Route key='index' location={location} path={"/"} render={() => 
                            <Main/>} exact/>
                        <Route path="*" component={<Cabinet/>} />
                        
                    </Switch>
                <Footer/>
                <ScrollSection/> */}
            </>
        );
}
}
export default App;
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);

import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux'

// const mapStateToProps=(state)=>{
//   return {
//       user: state.user,
//       popupOpen: state.popupOpen
//   }
// };
// const putActionsToProps=(dispatch)=>{
//   return {
//       regUser: bindActionCreators(regUser, dispatch),
//       setPopup: bindActionCreators(setPopup, dispatch),
//   }
// }

// const WrapedUser = connect(({ firstName, lastName }) => ({ firstName, lastName }), regUser)(Reg)

// export default class UserWithStore extends React.Component{
//   render(){
//   return (
//       <Provider store={store}>
//           <Reg/>
//       </Provider>
//   )
// }
// }
