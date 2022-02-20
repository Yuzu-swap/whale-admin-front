import React, { useMemo } from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, withTypes } from 'react-final-form';
import { useLocation } from 'react-router-dom';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CircularProgress,
    TextField,
} from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LockIcon from '@material-ui/icons/Lock';
import { Notification, useTranslate, useLogin, useNotify , defaultTheme} from 'react-admin';
import { AbstractConnector } from '@web3-react/abstract-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {SUPPORTED_WALLETS} from '../Web3'
import II from '../../assets/images/metamask.svg'
import { AlignLeft } from 'react-feather';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw' ,
        height: '100vh' ,
    },
    center: {
        display: 'block',
        margin: '200px auto 0px'
    },
}));


const Login = () => {
    const [loading, setLoading] = useState(false);
    const notify = useNotify();
    const login = useLogin();
    const location = useLocation<{ nextPathname: string } | null>();
    const { active, account, connector, activate, error } = useWeb3React()
    console.log(active, account)
    const tryActivation = async (connector: AbstractConnector | undefined) => {
        console.log("here active")
        if(connector){
        console.log("here active1")
        activate(connector, undefined, true).catch(error => {
            console.log(error)
            if (error instanceof UnsupportedChainIdError) {
                activate(connector) // a little janky...can't use setError because the connector isn't set
            } 
        })
        }        
    }
    useMemo(
        ()=>{
            if(account && account != ''){
                login({"account" : account }, location.state ? location.state.nextPathname : '/')
            }

        },[account]
    );
    
    const classes = useStyles()
    return (
        <ThemeProvider theme={createTheme(defaultTheme)}>
            <div className={classes.root}>
                    <Button 
                        className={classes.center}
                        startIcon={<img src={II} alt="MetaMask" width="50" height="50" />}
                        onClick={()=>{tryActivation(SUPPORTED_WALLETS.METAMASK.connector)}} 
                        > 
                        connect to wallet
                    </Button>

            </div>

        </ThemeProvider>
    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

export default Login;