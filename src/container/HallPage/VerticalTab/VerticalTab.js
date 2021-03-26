import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HallPage from '../HallPage';

const menuList = {
    0: <HallPage />,
    1: <HallPage />,
  };

class VerticalTab extends React.Component {
   
    constructor(props) {
        super();
    
        this.state = {
          menu: 0,
        };
    }
    
    changeMenu = (menuIndex) => {
        this.setState({menu : menuIndex});
    }

    render() {
        return(
            <div className="wrap">
                <div className="menuBar">
                <ul className="tabs">
                    <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>Mail</li>
                    <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>Cafe</li>
                </ul>
                </div>
                <div className="contentArea">
                {menuList[this.state.menu]}
                </div>
            </div>
        );
    }
}

export default VerticalTab;