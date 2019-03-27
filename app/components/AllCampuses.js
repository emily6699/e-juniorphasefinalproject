import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampuses } from "../reducers/campusesReducer";
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

  render() {
    const campuses = this.props.campuses;
    console.log(this.props, "campusprops");
    return (
      <div id="all-campuses">
        <span>
          <h1>All Campuses</h1>
          <AddCampus />
        </span>
        {campuses ? (
          <ul>
            {campuses.map(campus => {
              return (
                <div key={campus.id}>
                  <li onClick={() => this.goToCampus(campus.id)}>
                    <li
                      key={campus.id}
                      onClick={() => this.goToCampus(campus.id)}
                    />
                    <div>
                      <h2>{campus.name}</h2>
                      <div>
                        <img src={campus.imageUrl} />
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        ) : (
          "No CAMPUS. Please Add. :)"
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
    loadAllCampuses: () => dispatch(getCampuses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
