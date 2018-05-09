import React, { Component } from 'react';
import Header from '../../../Layouts/Header';
import Sidebar from '../../../Layouts/Sidebar';
import Axios from 'axios';
import '../../../../css/styles.css';

class Dashboard extends Component {
    // componentDidMount(){
    //     $('.mainmenu > li').click(function (e) {
    //         var $el = $('ul', this);
    //         $('.mainmenu > li > ul').not($el).slideUp();
    //         $el.stop(true, true).slideToggle(400);
    //       });
    //       $('.mainmenu > li > ul > li').click(function (e) {});
    // }
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