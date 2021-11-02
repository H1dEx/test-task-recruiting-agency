import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { PhotosPage } from "./pages";

export function App() {
  return (
    <Switch>
      <Route path="/">
        <PhotosPage/>
      </Route>
    </Switch>
  );
}
