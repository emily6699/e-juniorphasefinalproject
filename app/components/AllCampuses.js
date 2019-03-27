import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AllCampuses extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { campuses } = this.props;
    return (
      <div className="all-campuses">
        {campuses.map(campus => {
          return (
            <div key={campus.id}>
              {campus.name}
              <img src={campus.imageUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses
  };
};

export default connect(mapState)(AllCampuses);
