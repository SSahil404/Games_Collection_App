//base url
const base_url = "https://api.rawg.io/api/";

//Getting date
const getCurrentMonth = () => {
    const month = new Date().getMonth();
    if (month < 10) return `0${month}`;
    else return month;
};
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) return `0${day}`;
    else return day;
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// console.log(currentDate);

//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10 `;
//upcoming games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// new games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//URLs
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenshotURL = (game_id) =>
    `${base_url}games/${game_id}/screenshots`;
export const searchedGamesURL = (game_name) =>
    `${base_url}games?search=${game_name}&page_size=9`;
