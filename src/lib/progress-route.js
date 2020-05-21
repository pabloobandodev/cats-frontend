import React from "react";
import { Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

class ProgressRoute extends React.PureComponent {
  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return <Route {...this.props} />;
  }
}

export default ProgressRoute;
