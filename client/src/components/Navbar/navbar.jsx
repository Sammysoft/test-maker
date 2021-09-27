import React, { Component } from 'react';
import RightSideBar from './SideBars/RightSideBar';
import Leftsidebar from './SideBars/LeftSideBar';
import Mainbar from './main';

class navbar extends Component {
    render() {
        return (
            <>
                <Leftsidebar />
                <Mainbar />
                <RightSideBar />
            </>
        );
    }
}

export default navbar;