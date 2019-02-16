import React from "react";
import { connect } from 'react-redux'
import { showFriends } from "/Users/flatironschool/Projects/giftrrr/giftrrr-client/src/redux/actions.js"

class FriendCollection extends React.Component {
  state = {
    friends: [{first_name: "faker"}]
  }

  componentDidMount(){
    this.props.showFriends()
    // this.setState({
    //   friends: this.props.friends
    // })
  }

  render(){
    console.log("state in friends component", this.state.friends)
    console.log("props in friends component", this.props)
    return (

      this.state.friends.map(friend => <li>{friend.first_name}</li>)
    )
  }
}

export default connect(null, {showFriends})(FriendCollection);
