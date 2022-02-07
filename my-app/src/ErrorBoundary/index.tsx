import { Component } from "react";
import styles from "./ErrorBoundary.module.css";

interface ErrorProps {}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.error}>
          <p>This is an error</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
