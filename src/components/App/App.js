import React, { createContext, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useReactRouter from "use-react-router";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// import Main from '../pages/main/main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import Registration from '../pages/Registration/Registration'
// import Cabinet from '../pages/Cabinet/Cabinet'

import "./App.scss";
//import ScrollSection from './scroll-section/scroll-section'

//import FAQ from '../pages/faq/faq'
import CB from "../Checkbox/Checkbox";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "./pages/main/main";
import Cabinet from "./pages/cabinet/cabinet";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const DataContext = createContext();
import { store } from "../../store/store";
import { Provider, useSelector } from "react-redux";
import ScrollSection from "../scroll-section/scroll-section";
import Winners from "./pages/winners/winners";
import Reg from "./pages/reg/reg";
import ApplyModal from "../Modal/ApplyModal/ApplyModal";

const App = ({ basename }) => {
  //const { setValues, data } = useData();

  //const {location} = useReactRouter()
  return (
    <>
      <Grid container className="appContainer" direction="column">
        <Grid item className="appWrap">
          <Header />
          <Provider store={store}>
            <ApplyModal />
            <Routes basename={basename} />
          </Provider>
          <ScrollSection />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};
const Routes = ({ basename }) => {
  const isLogged = useSelector((state) => state.data.isLogged);

  return (
    <Switch location={location}>
      {isLogged ? (
        <Route path={`${basename}/cabinet`} render={() => <Cabinet />} />
      ) : (
        <Route path={`${basename}/reg`} render={() => <Reg />} />
      )}
      <Route path={`${basename}/winners`} render={() => <Winners />} />
      <Route
        key="index"
        location={location}
        path={basename}
        render={() => <Main />}
        exact
      />
      <Route path="*" render={() => <Main />} />
    </Switch>
  );
};
export default App;
