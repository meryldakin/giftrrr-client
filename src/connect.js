import { connect } from "react-redux";
import {
  addFriend,
  addOccasion,
  addGift
} from "./redux/actions";
import Gifter from "./client";

const mapStateToProps = state => ({
  friends: state.friends,
  gifts: state.gifts,
  occasions: state.occasions
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFriend: friend => dispatch(addFriend(friend)),
    addOccasion: occasion => dispatch(addOccasion(occasion)),
    addGift: gift => dispatch(addGift(gift)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gifter);
