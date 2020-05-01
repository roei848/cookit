import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends React.Component {
  renderTabs() {
    if (_.isEmpty(this.props.categories)) {
      return;
    } else {
      const categories = [...this.props.categories];
      categories.sort((a, b) => {
        return parseFloat(a.order) < parseFloat(b.order) ? -1 : 1;
      });
      const tabs = categories.map((category) => {
        return (
          <Tab
            key={category.order}
            className="tab"
            component={Link}
            to={`/${category.name}`}
            label={category.hebrew_name}
          ></Tab>
        );
      });
      return tabs;
    }
  }

  render() {
    return (
      <AppBar title="Cook-it" position="relative" className="app-bar-container">
        <Tabs value={false}>{this.renderTabs()}</Tabs>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Navbar);
