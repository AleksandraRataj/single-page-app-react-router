import React from 'react';
import {Route} from "react-router-dom";
import '../styles/Footer.css';

const Footer = () => {
    return(
        <div>
            <h2>footer</h2>
            <Route exact path="/" render={(props) => (
                    <p>You are on the <span>home page</span>.</p>
                )
            }/>

            <Route exact path="/:page" render={(props) => (
                <p>You are in the <span>{props.match.params.page}</span>.</p>
            )
            }/>

            <Route exact path="/:page/:idProduct" render={(props) => (
                <p>You are in the <span>{props.match.params.idProduct}</span>.</p>
            )
            }/>

        </div>
    );
}

export default Footer;