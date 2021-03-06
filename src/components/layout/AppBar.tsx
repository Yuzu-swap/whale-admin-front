import * as React from 'react';
import { forwardRef } from 'react';
import { AppBar, UserMenu, MenuItemLink, useTranslate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import Web3Status from '../Web3';


const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});



const CustomAppBar = (props: any) => {
    const classes = useStyles();
    return (
        <AppBar {...props} elevation={1}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <Web3Status/>
            <span className={classes.spacer} />
        </AppBar>
    );
};

export default CustomAppBar;
