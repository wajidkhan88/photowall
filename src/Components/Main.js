import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Link, Route } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  state = {
    loading: true,
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  componentDidUpdate(previousProps, previousState) {}

  render() {
    return (
      <div>
        <h1>
          <Link to="/">PhotoWall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => <AddPhoto {...this.props} />}
        />

        <Route
          path="/single/:id"
          render={(params) => (
            <Single {...this.props} {...params} loading={this.state.loading} />
          )}
        />
      </div>
    );
  }
}

export default Main;
