import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { fetchCategories } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Category from "./categories/Category";
import Logo from "./logo/Logo";
import SubCategoryPage from "./categories/SubCategoryPage";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderRouter() {
    if (_.isEmpty(this.props.categories)) {
      return;
    } else {
      return (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:category" exact component={Category} />
          <Route
            path="/:category/:subCategory"
            exact
            component={SubCategoryPage}
          />
        </Switch>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Navbar />
            {this.renderRouter()}
            <Logo />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { fetchCategories })(App);
