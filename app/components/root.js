import React from "react";

import React from "react";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
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
            <Route path="/campuses" component={AllCampuses} />
            <Route path="/students" component={AllStudents} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
