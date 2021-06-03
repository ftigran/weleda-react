import React, { createContext, Suspense, useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
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

const Main = React.lazy(() => import("./pages/main/main"));
const Cabinet = React.lazy(() => import("./pages/cabinet/cabinet"));
const Winners = React.lazy(() => import("./pages/winners/winners"));
const Reg = React.lazy(() => import("./pages/reg/reg"));

const DataContext = createContext();
import { store } from "../../store/store";
import { Provider, useSelector } from "react-redux";
import ScrollSection from "../scroll-section/scroll-section";
import ApplyModal from "../Modal/ApplyModal/ApplyModal";

const App = () => {
  //const { setValues, data } = useData();

  return (
    <>
      <Grid container className="appContainer" direction="column">
        <Grid item className="appWrap">
          <Header />
          <Provider store={store}>
            <ApplyModal />
            <Routes />
          </Provider>
          <ScrollSection />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};
const Routes = () => {
  // const isLogged = useSelector((state) => state.data.isLogged);
  const { location } = useReactRouter();

  return (
    <Suspense fallback={<div id="pre-loader">Загрузка...</div>}>
      <Switch location={location}>
        {/* {isLogged ? ( */}
        <Route path={`/cabinet`} component={Cabinet} />
        {/* ) : ( */}
        <Route path={`/reg`} component={Reg} />
        {/* )} */}
        <Route path={`/winners`} component={Winners} />
        <Route
          key="index"
          location={location}
          path={"/"}
          component={Main}
          exact
        />
        <Route path="*" component={Main} />
      </Switch>
    </Suspense>
  );
};
export default App;
