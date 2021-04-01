import React, { PureComponent } from "react";
import ErrorPageBoundary from "../../pages/ErrorBoundaryPage";

// used class component as Hooks for ErrorBoundary are not available

export default class ErrorBoundary extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      error: "",
      eventId: "",
      errorInfo: "",
      hasError: false
    };
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      hasError: true
    })
  }

  render () {
    const { hasError, errorInfo, error, eventId } = this.state;
    if (hasError) {
      return <ErrorPageBoundary errorInfo={errorInfo} error={error} eventI={eventId}/>
    }
    return this.props.children;
  }
}