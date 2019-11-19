import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import VehiclesList from "./components/vehicles-list/VehiclesList";
import Vehicle from "./components/vehicle/Vehicle";
import NotFound from "./components/not-found/NotFound";
import Wrapper from "./common/components/wrapper/Wrapper";
import Header from "./components/header/Header";
import IsFetching from "./common/components/isfetching/IsFetching";
import AlertBox from "./common/components/alert-box/AlertBox";
import {
  selectIsFetching,
  selectErrorMessage
} from "./common/redux/selectors/commonSelectors";
import { hideErrorMessage } from "./common/redux/actions/commonActions";
import { GlobalStyles, Main } from "./App.styles";
import "react-toastify/dist/ReactToastify.min.css";

const App = ({ isFetching, errorMessage, onHideError }) => {
  const handleHideError = () => {
    onHideError();
  };

  return (
    <div data-test="AppComponent">
      <GlobalStyles />
      <ToastContainer />

      {isFetching && <IsFetching />}

      <Header />
      <Main>
        <Wrapper>
          {errorMessage && (
            <AlertBox variant="danger" onClose={handleHideError} dismissible>
              {errorMessage}
            </AlertBox>
          )}
          <Switch>
            <Route path="/car/:id" component={Vehicle} />
            <Route path="/cars" component={VehiclesList} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={VehiclesList} />
            <Redirect to="/not-found" />
          </Switch>
        </Wrapper>
      </Main>
    </div>
  );
};

const mapStateToProps = state => ({
  isFetching: selectIsFetching(state),
  errorMessage: selectErrorMessage(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onHideError: () => {
      dispatch(hideErrorMessage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
