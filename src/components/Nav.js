import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animation";
//redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();

    const [textInput, setTextInput] = useState("");
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };
    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    };

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} type="text" onChange={inputHandler} />
                <button onClick={submitHandler} type="submit">
                    Search
                </button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.3rem;
        padding: 0.5rem;
        border: none;
        /* outline: 1px solid #414141; */
        margin-top: 1rem;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    }
    button {
        font-size: 1.3rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        color: #fff;
        background: #ff7676;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 1.8rem;
        height: 1.8rem;
    }
`;

export default Nav;
