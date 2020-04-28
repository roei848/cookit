import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { fetchCategories } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Category from "./categories/Category";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderRouter() {
    if (_.isEmpty(this.props.categories)) {
      return;
    } else {
      const routes = this.props.categories.map((category) => {
        return (
          <Route
            key={category.order}
            path={`/${category.name}`}
            exact
            component={React.forwardRef(() => (
              <Category name={category.hebrew_name} />
            ))}
          />
        );
      });

      return (
        <Switch>
          <Route path="/" exact component={Home} />
          {routes}
        </Switch>
      );
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Navbar />
            {this.renderRouter()}
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
