import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";

const Home = () => {
    //get the current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    //fetch games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    //get the data
    const { popular, upcoming, newGames, searched } = useSelector(
        (state) => state.games
    );

    // const detailHandler = () => {
    //     dispatch(GameDetail());
    // };
    if (!pathId) {
        document.body.style.overflow = "auto";
    }

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
                {searched.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map((game) => (
                                <Game
                                    name={game.name}
                                    released={game.released}
                                    id={game.id}
                                    image={game.background_image}
                                    key={game.id}
                                />
                            ))}
                        </Games>
                    </div>
                ) : (
                    ""
                )}
                <h2>Popular Games</h2>
                <Games>
                    {popular.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 4rem;
    h2 {
        padding: 4rem 0rem;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
`;

export default Home;
