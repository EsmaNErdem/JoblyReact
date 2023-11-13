// Routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../homepage/Home";
import CompanyList from "../companies/CompanyList"
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignUpFormForm from "../auth/SignUpForm";
import ProfileForm from "../profile/ProfileForm";

const Routes = ({ login, signup }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/profile">
        <ProfileForm />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <Route exact path="/signup">
        <SignUpFormForm signup={signup} />
      </Route>
    </Switch>
  );
};

export default Routes;
