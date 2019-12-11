import React, { Component } from "react";
import monitoring from "../../../services/monitoringService";
import {
  ErrorContainer,
  Error,
  Header,
  Message
} from "./GeneralErrorBoundary.styles";

class GeneralErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });

    monitoring.logError(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
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
