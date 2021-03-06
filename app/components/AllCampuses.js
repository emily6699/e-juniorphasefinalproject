/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampuses, deleteCampus } from "../actions/action-creators";
import { Link, withRouter } from "react-router-dom";

class AllCampuses extends Component {
  componentDidMount() {
    console.log("CDM campuses");
    this.props.getCampuses();
  }

  handleClick = id => {
    console.log("clickkkkk", id);
    this.props.deleteCampus(id);
  };

  render() {
    if (this.props.isLoading) return <h1>LOADING...</h1>;
    return (
      <div>
        <Link className="text" to={"/newcampus"}>
          Add a campus
        </Link>
        <br />
        Campuses:
        {this.props.list.map(campus => (
          <div className="text" key={campus.id}>
            <button onClick={() => this.handleClick(campus.id)}>X</button>
            <Link to={`campuses/${campus.id}`}>
              <h2>{campus.name}</h2>
              <img src={campus.imageUrl} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.campuses.list,
  isLoading: state.campuses.isLoading
});

const mapDispatchToProps = dispatch => ({
  deleteCampus: id => dispatch(deleteCampus(id)),
  getCampuses: () => dispatch(getCampuses())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllCampuses)
);
