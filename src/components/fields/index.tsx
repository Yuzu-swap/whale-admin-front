import * as React from "react";
import PropTypes from 'prop-types';
import { stringify } from 'query-string';
import { Paper, Typography, Link as MuiLink } from '@material-ui/core';
import { linkToRecord, SelectField,useRecordContext,TextField } from 'react-admin';
import { Link } from 'react-router-dom';


const AddressToDetailField = (props : any) => {
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

export default AddressToDetailField;