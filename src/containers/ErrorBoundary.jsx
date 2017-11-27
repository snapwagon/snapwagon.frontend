import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
     this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      error: error,
      errorInfo: info
    });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
