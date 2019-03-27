/* eslint-disable quotes */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import NewCampusForm from "./NewCampusForm";
import NewStudentForm from "./NewStudentForm";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <div className="nav-links">
            <NavLink to="/campuses" className="navlink">
              {" "}
              Campuses{" "}
            </NavLink>
            <NavLink to="/students" className="navlink">
              {" "}
              Students
            </NavLink>
          </div>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        </main>
        <Switch>
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/campuses/:id" component={SingleCampus} />
          <Route exact path="/" component={AllCampuses} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/newcampus" component={NewCampusForm} />
          <Route exact path="/newstudent" component={NewStudentForm} />
          <Route render={() => "Not Found. Try another page"} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
