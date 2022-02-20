import * as React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    List,
    ListProps,
    NullableBooleanInput,
    NumberField,
    SearchInput,
    TextField
} from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactElement } from 'react';
import AddressToDetailField from 'components/fields';

const StakePoolsList = (props: ListProps): ReactElement => {
    return (
        <List
            {...props}
            perPage={10}
        >
            <Datagrid>
                <TextField label="id" source="id"/>
                <TextField label="pool" source="name"/>
                <TextField label="adress" source="lpAddress"/>
            </Datagrid>
        </List>
    );
};

export default StakePoolsList;