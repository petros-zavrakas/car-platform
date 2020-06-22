import React, { useState } from "react";
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
import GeneralErrorBoundary from "./components/errors/error-boundary/GeneralErrorBoundary";
import { ThemeProvider } from "styled-components";
import themes from "./assets/css/themes";

const App = ({ isFetching, errors, onHideErrors }) => {
  const handleHideError = () => {
    onHideErrors();
  };

  const [darkTheme, setDarkTheme] = useState(false);
  const handleSwitchTheme = () => setDarkTheme(!darkTheme);

  return (
    <ThemeProvider theme={darkTheme ? themes.dark : themes.light}>
      <div data-test="AppComponent">
        <GeneralErrorBoundary>
          <GlobalStyles />
          <ToastContainer />

          {isFetching && <IsFetching />}

          <Header onSwitchTheme={handleSwitchTheme} />
          <Main>
            <Wrapper>
              {errors.length > 0 && (
                <AlertBox
                  variant="danger"
                  onClose={handleHideError}
                  dismissible
                >
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
        </GeneralErrorBoundary>
      </div>
    </ThemeProvider>
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
