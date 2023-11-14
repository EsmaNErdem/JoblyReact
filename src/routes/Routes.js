// Routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
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

      <ProtectedRoute exact path="/companies">
        <CompanyList />
      </ProtectedRoute>

      <ProtectedRoute path="/companies/:handle">
        <CompanyDetail />
      </ProtectedRoute>

      <ProtectedRoute exact path="/jobs">
        <JobList />
      </ProtectedRoute>
      
      <ProtectedRoute exact path="/profile">
        <ProfileForm />
      </ProtectedRoute>
      
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
