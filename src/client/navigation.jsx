import React from "react";
import { Link } from "redux-little-router";

const Navigation = props => (
  <div>
    <Link href="/friends">Friends</Link>
    <br />
    <Link href="/friends/1">Friend 1</Link>
    <br />
    <Link href="/occasions">Occasions</Link>
    <br />
    <Link href="/occasions/1">Occasion 1</Link>
    <br />
    <Link href="/">Home</Link>
    <br />
  </div>
)

export default Navigation;
