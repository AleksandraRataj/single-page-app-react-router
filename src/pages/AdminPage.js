import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import "../styles/AdminPage.css";

const permission = false;

const AdminPage = () => {
    return(
        <Route render={() => (
            permission ? (<h3>Good morning - admin panel</h3>) :
                (<Redirect to="/login"/>)
        )}/>
    );
}

export default AdminPage;