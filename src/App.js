import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import VehiclesList from "./components/vehicles-list/VehiclesList";
import Vehicle from "./components/vehicle/Vehicle";
import NotFound from "./components/not-found/NotFound";
import Wrapper from "./components/wrapper/Wrapper";
import Header from "./components/header/Header";
import List from "./components/list/List";
import IsFetching from "./components/isfetching/IsFetching";
import AlertBox from "./components/alert-box/AlertBox";
import ErrorItem from "./components/errors/error-item/ErrorItem";
import {
  selectIsFetching,
  selectErrors
} from "./redux/selectors/commonSelectors";
import { hideErrors } from "./redux/actions/commonActions";
import { GlobalStyles, Main } from "./App.styles";
import "react-toastify/dist/ReactToastify.min.css";

const App = ({ isFetching, errors, onHideErrors }) => {
  const handleHideError = () => {
    onHideErrors();
  };

  return (
    <div data-test="AppComponent">
      <GlobalStyles />
      <ToastContainer />

      {isFetching && <IsFetching />}

      <Header />
      <Main>
        <Wrapper>
          {errors.length > 0 && (
            <AlertBox variant="danger" onClose={handleHideError} dismissible>
              <List items={errors} Component={ErrorItem} />
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
  errors: selectErrors(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onHideErrors: () => {
      dispatch(hideErrors());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
