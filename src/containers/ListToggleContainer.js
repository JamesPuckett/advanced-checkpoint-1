import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import {
  saveMyMovie,
  removeMyMovie
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    removeMyMovie: (_id) => {
      dispatch(removeMyMovie(_id));
    },
    saveMyMovie: (movie) => {
      dispatch(saveMyMovie(movie));
    }
  };
}

const ListToggleContainer = connect(null, mapDispatchToProps)(ListToggle);

export default ListToggleContainer;
