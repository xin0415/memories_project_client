import React from "react";
import { Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const App=()=>{
    return (
        <BrowserRouter>
            <Container maxidth="xl">
                <Navbar />
                    <Routes>
                        <Route path="/" exact component={()=><Navigate to="/posts"/>} />
                        <Route path="/posts" exact component={Home}/>
                        <Route path="/posts/search" exact component={Home}/>
                        <Route path="/posts/:id" component={PostDetails}/>
                        <Route path="/auth" exact component={Auth}/>
                        {/* <Route path="/" exact element={<Home/>} />
                        <Route path="/auth" exact element={<Auth/>}/> */}
                    </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;