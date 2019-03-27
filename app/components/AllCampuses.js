import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampuses } from "../reducers/campusesReducer";

class AllCampuses extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("CDM campuses");
    await this.props.loadAllCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    console.log(this.props, "campusprops");
    return (
      <div id="all-campuses">
        <h1>All Campuses</h1>
        <ul>
          {campuses.map(campus => {
            return (
              <li key={campus.id}>
                <div>
                  <h2>{campus.name}</h2>
                  <div>
                    <img src={campus.imageUrl} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mstp campuses", state);
  return {
    campuses: state.campuses.campusList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllCampuses: () => dispatch(getCampuses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
