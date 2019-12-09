import React, { Component } from "react";
import monitoring from "../../../services/monitoringService";
import {
  ErrorContainer,
  Error,
  Header,
  Message
} from "./GeneralErrorBoundary.styles";

class GeneralErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });

    monitoring.logError(error, errorInfo);
  }

  render() {
    const { errorInfo, error } = this.state;

    if (errorInfo) {
      return (
        <ErrorContainer>
          <Error>
            <Header>Something went wrong!</Header>
            <Message>{error && error.toString()}</Message>
          </Error>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default GeneralErrorBoundary;
