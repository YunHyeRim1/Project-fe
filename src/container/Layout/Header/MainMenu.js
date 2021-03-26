import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  HALL_DETAIL_PAGE,
  ADD_EXHBN_PAGE,
  ADD_HOTEL_PAGE,
} from 'settings/constant';

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Exhibition</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${HALL_DETAIL_PAGE}`}>Hall</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${ADD_HOTEL_PAGE}`}>MyPage</NavLink>
      </Menu.Item>
     
    </Menu>
  );
};

export default MainMenu;
