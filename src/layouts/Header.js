import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/Header.css';
import img1 from '../images/california-1751455_1920.jpg';
import img2 from '../images/fog-1535201_1920.jpg';
import img3 from '../images/plouzane-1758197_1920.jpg';

const Header = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => (
                    <img src={img1} alt=""/>
                )}/>
                <Route path='/products' render={() => (
                    <img src={img2} alt=""/>
                )}/>
                <Route path='/contact' render={() => (
                    <img src={img3} alt=""/>
                )}/>
                <Route path='/admin' render={() => (
                    <img src={img3} alt=""/>
                )}/>
                <Route render={() => (
                    <img src={img1} alt=""/>
                )}/>
            </Switch>
        </>
    );
}

export default Header;