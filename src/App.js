import React from "react";
import { Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App=()=>{
    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />
                    <Routes>
                        <Route path="/" exact component={Home}/>
                        <Route path="/auth" exact component={Auth}/>
                    </Routes>
                <Home />
            </Container>
        </BrowserRouter>
    );
}

export default App;