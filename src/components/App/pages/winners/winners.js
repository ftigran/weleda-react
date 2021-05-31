import React from "react";
import SimpleForm from "../../../regForm/regForm";
import { Provider, connect } from "react-redux";
import { store } from "../../../../store/store";
import { Grid } from "@material-ui/core";
import "./winners.scss";
import { useSelector, useDispatch } from "react-redux";
import { setRegEmailApproveModal } from "../../../../store/actions";
import Button from "@material-ui/core/Button";
import RegEmailApproveModal from "../../../Modal/RegEmailApproveModal/RegEmailApproveModal";
import Top from "../../../Top/Top";
import Roadmap from "../../../Roadmap/Roadmap";
import winner from "../../../../img/winner.png";
import winnerNabor from "../../../../img/winnerNabor.png";

const main = () => {
  return (
    <>
      <Top btnText="Узнать победителей" toLink="/winners" toID="winners" />
      <Grid container justify="center" id="winners">
        <Grid item xs={12} className="winnersContainer">
          <Grid container direction="column" alignItems="center">
            <Grid container className="winnersCard">
              <Grid item xs={6} md={4} className="imgWrap"></Grid>
              <Grid item xs={6} md={8}>
                <Grid
                  container
                  justify="flex-start"
                  className="textWrap"
                  alignItems="flex-start"
                >
                  <Grid item component="p">
                    <b>
                      Победитель Главного приза
                      <br />- поездки в Германию в легендарные сады Weleda
                    </b>
                  </Grid>
                  <Grid item component="p">
                    Александра Константинова г. Москва
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              className="winnersCard winnersCard_bordered"
              direction="row-reverse"
            >
              <Grid item xs={6} className="imgWrap"></Grid>
              <Grid item xs={6}>
                <Grid
                  container
                  alignItems="center"
                  className="textWrap"
                  justify="center"
                >
                  <Grid item component="p">
                    Обладатели годового запаса косметики Weleda (pdf)
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default main;
