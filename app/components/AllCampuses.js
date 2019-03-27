/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampuses, removeCampusThunk } from "../reducers/campusesReducer";
import AddCampus from "./AddCampus";

class AllCampuses extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("CDM campuses");
    await this.props.loadAllCampuses();
  }

  goToCampus(campusId) {
    this.props.history.push(`/campuses/${campusId}`);
  }
  handleClick(campusId) {
    this.props.deleteCampus(campusId);
  }

  render() {
    const campuses = this.props.campuses;
    console.log(this.props, "campusprops-render AllCampuses");
    return (
      <div id="all-campuses">
        <span>
          <h1>All Campuses</h1>
          <button type="button" onClick={this.changeToAdd}>
            +
          </button>
        </span>
        {campuses ? (
          <ul>
            {campuses.map(campus => {
              return (
                <div key={campus.id}>
                  <li onClick={() => this.goToCampus(campus.id)}>
                    <div>
                      <h2>{campus.name}</h2>
                      <div>
                        <img src={campus.imageUrl} />
                      </div>
                    </div>
                  </li>
                  <button
                    type="button"
                    onClick={() => this.handleClick(campus.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </ul>
        ) : (
          "NO CAMPUS. PLEASE ADD.:)"
        )}
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
    loadAllCampuses: () => dispatch(getCampuses()),
    deleteCampus: campusId => dispatch(removeCampusThunk(campusId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
