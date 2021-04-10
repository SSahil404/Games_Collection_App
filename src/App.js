import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Route path={["/game/:id", "/"]}>
                <Home />
            </Route>
        </div>
    );
}

export default App;
