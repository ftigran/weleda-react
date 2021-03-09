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

export const DataProvider = ({children}) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData(prevData => ({
      ...prevData,
      ...values
    }))
  }

  return <DataContext.Provider value={{data, setValues}}>
    {children}
  </DataContext.Provider>
}
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
const App = () => {
    const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { 
        firstName: data.firstName,
        lastName: data.lastName, 
        instagram: data.instagram, 
        PhoneNumber: data.PhoneNumber, 
        email: data.email, 
        promocode: data.promocode, 
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
        const {location} = useReactRouter()
        return (
            <>  
                <Header/>
                {/* <Cabinet/> */}
                <h3>Регистрация</h3>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
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
export default App;
