import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "redux-little-router";
import AddFriend from "./pages/add-friend";

class Navigation extends Component {
  state = {
    addFriendModalOpen: false
  }

  handleOpenAddFriendModal = () => {
    this.setState({ addFriendModalOpen: true });
  }

  handleCloseAddFriendModal = () => {
    this.setState({ addFriendModalOpen: false });
  }

  render() {
    return (
      <div>
        <AddFriend open={this.state.addFriendModalOpen} onClose={this.handleCloseAddFriendModal} />
        <Link href="/friends">Friends</Link>
        <br />
        <Button onClick={this.handleOpenAddFriendModal}>Add Friend</Button>
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
  }
}

export default Navigation;
