import React, { Component } from 'react';
import Header from '../../../Layouts/Header';
import Sidebar from '../../../Layouts/Sidebar';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidebar/>
            </div>
        );
    }
}

export default Dashboard;