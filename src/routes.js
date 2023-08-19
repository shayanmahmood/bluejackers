import React from 'react';
import Layout from './HOC/layout.js'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/index.js';

const Routess = (props) => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                </Routes>
            </Layout>
        </div>
    )
}
export default Routess;