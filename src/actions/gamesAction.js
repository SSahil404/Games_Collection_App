import axios from "axios";
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchedGamesURL,
} from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
    //fetch AXIOS
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            newGames: newGamesData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedGames = await axios.get(searchedGamesURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGames.data.results,
        },
    });
};
