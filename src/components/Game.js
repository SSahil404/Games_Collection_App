import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animation";

const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    };

    return (
        <StyledGame
            layoutId={stringPathId}
            onClick={loadDetailHandler}
            variants={popup}
            initial="hidden"
            animate="show"
        >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={smallImage(image, 640)}
                    alt={name}
                />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }
`;

export default Game;
