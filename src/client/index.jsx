import React from "react";
import { Fragment } from "redux-little-router";
import FriendCollection from "./pages/friend-collection";
import Friend from "./pages/friend"
import OccasionCollections from "./pages/occasion-collection";
import Occasion from "./pages/occasion";
import Home from "./pages/home";
import Navigation from "./navigation";

const GifterRouting = props => (
  <Fragment forRoute="/">
    <div>
      <Navigation {...props} />
      <Fragment forRoute="/friends/:id">
        <div id="friend">
          <Friend {...props} />
        </div>
      </Fragment>
      <Fragment forRoute="/friends">
        <div id="friends">
          <FriendCollection {...props} />
        </div>
      </Fragment>
      <Fragment forRoute="/occasions/:id">
        <div id="occasion">
          <Occasion {...props} />
        </div>
      </Fragment>
      <Fragment forRoute="/occasions">
        <div id="occasions">
          <OccasionCollections {...props} />
        </div>
      </Fragment>
      <Fragment forRoute="/">
        <div id="home">
          <Home {...props} />
        </div>
      </Fragment>
    </div>
  </Fragment>
);

export default GifterRouting;
