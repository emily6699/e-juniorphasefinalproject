/* eslint-disable quotes */
import React from "react";

import React from "react";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import AddStudent from "./AddStudent";
import AddCampus from "./AddCampus";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <div>
        {/* <nav>Welcome!</nav> */}
        <NavBar />
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Switch>
            <Route path="/students/add" component={AddStudent} />
            <Route path="/campuses/add" component={AddCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route path="/campuses" component={AllCampuses} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/students/:studentId" component={SingleStudent} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
