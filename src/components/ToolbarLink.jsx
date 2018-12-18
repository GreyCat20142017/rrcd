import React from 'react';
import {NavLink} from 'react-router-dom';

export const ToolbarLink = ({children, ...rest}) => (<NavLink activeClassName='mdc-tab--active' {...rest}>{children}</NavLink>);


