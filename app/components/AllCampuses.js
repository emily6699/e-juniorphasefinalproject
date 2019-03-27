/* eslint-disable quotes */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCampuses, deleteCampus } from "../actions/action-creators";
import { Link, withRouter } from "react-router-dom";

class AllCampuses extends Component {
  async componentDidMount() {
    console.log("CDM campuses");
    await this.props.loadAllCampuses();
  }

  handleClick = async id => {
    this.props.deleteCampus(id);
  };

  render() {
    if (this.props.isLoading) return <h1>LOADING...</h1>;
    return (
      <div>
        <Link to={"/newcampus"}>Add a campus</Link>
        <br />
        Campuses:
        {this.props.list.map(campus => (
          <div key={campus.id}>
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

export default withRouter(
  connect(
    mapStateToProps,
    { getCampuses, deleteCampus }
  )(AllCampuses)
);
