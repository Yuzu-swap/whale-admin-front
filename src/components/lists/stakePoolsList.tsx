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
                <TextField label="池子名称" source="name"/>
                <TextField label="合约地址" source="lpAddress"/>
            </Datagrid>
        </List>
    );
};

export default StakePoolsList;