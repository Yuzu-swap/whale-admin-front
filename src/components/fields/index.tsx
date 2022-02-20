import * as React from "react";
import PropTypes from 'prop-types';
import { stringify } from 'query-string';
import { Paper, Typography, Link as MuiLink ,makeStyles} from '@material-ui/core';
import { linkToRecord, SelectField,useRecordContext,TextField } from 'react-admin';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    jump :{
        textDecoration : 'none'
    }
}));

export const AddressToDetailField = (props : any) => {
    const record = useRecordContext(props);
    return (
         <MuiLink
                    component={Link}
                    to={linkToRecord('/accounts', record.address, 'edit')}
                    underline="none"
         >
             <TextField source={props.source}  />
        </MuiLink>
    )
}

export const PoolIdToName = (props : any)=>{
    const record = useRecordContext(props);
    const extraData : any = props.extraData;
    return(
        <>{extraData && extraData[record.pid].name}</>
    )
}

export const HashJump = (props : any) =>{
    const record = useRecordContext(props);
    const classes = useStyles();
    return(
        <a
        className={classes.jump}
        href={'https://explorer.emerald.oasis.dev/tx/' + record[props.source] + '/token-transfers'}
        target="_blank"
        >
            <TextField source={props.source}  />
        </a>
    )
}

export const ContractJump = (props : any) =>{
    const record = useRecordContext(props);
    const classes = useStyles();
    return(
        <a
        className={classes.jump}
        href={'https://explorer.emerald.oasis.dev/address/' + record[props.source]}
        target="_blank"
        >
            <TextField source={props.source}  />
        </a>
    )
}