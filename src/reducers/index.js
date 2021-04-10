import { combineReducers } from "redux";
import gameReducer from "./gamesReducer";
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
    games: gameReducer,
    details: detailsReducer,
});

export default rootReducer;
