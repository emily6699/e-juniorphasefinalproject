/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleCampus } from "../reducers/campusesReducer";

class SingleCampus extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("CDM singleCampus");
    await this.props.loadSingleCampus(this.props.match.params.campusId);
  }

  handleClick(studentId) {
    this.props.history.push(`/students/${studentId}`);
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
          "No campuses: feel free to add some!"
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleCampus: campusId => dispatch(getSingleCampus(campusId))
  };
};

const mapStateToProps = state => {
  return {
    campus: state.campuses.selectedCampus
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
