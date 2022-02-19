import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LabelIcon from '@material-ui/icons/Label';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import SubMenu from './SubMenu';
import { stringify } from 'query-string';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    ReduxState,
} from 'react-admin';


import accounts from "../accounts";
import stakeevents from "../stakeevents";


type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen);
    const classes = useStyles();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div
            className={classnames(classes.root, {
                [classes.open]: open,
                [classes.closed]: !open,
            })}
        >
            {' '}
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                name="Customer"
                icon={<accounts.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/accounts',
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Accounts"
                    leftIcon={<accounts.icon />}
                    dense={dense}
                />
                   <MenuItemLink
                    to={{
                        pathname: '/stakeevents',
                        search:stringify({
                            filter: JSON.stringify({ address: undefined }),
                        }),
                        state: { _scrollToTop: true },
                    }}
                    primaryText="Events"
                    leftIcon={<stakeevents.icon />}
                    dense={dense}
                />
            </SubMenu>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    open: {
        width: 200,
    },
    closed: {
        width: 55,
    },
}));

export default Menu;
