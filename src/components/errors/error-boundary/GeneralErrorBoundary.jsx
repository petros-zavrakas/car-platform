import React, { Component } from "react";
import monitoring from "../../../services/monitoringService";
import AlertBox from "../../alert-box/AlertBox.test";

class GeneralErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    monitoring.addError(error, errorInfo);
  }

  render() {
    const { errorInfo, error } = this.state;

    if (errorInfo) {
      return (
        <AlertBox variant="danger">
          <p>
            <h4>Something went wrong! </h4>
            <span>{error && error.toString()}</span>
          </p>
        </AlertBox>
      );
    }

    return this.props.children;
  }
}

export default GeneralErrorBoundary;
