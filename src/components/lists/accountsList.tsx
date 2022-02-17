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

const AccoutList = (props: ListProps): ReactElement => {
    return (
        <List
            {...props}
            perPage={5}
        >
            <Datagrid>
                <TextField label="钱包地址" source="address"/>
                <NumberField source="totalValue" options={{ style: 'currency', currency: 'USD' }} />
            </Datagrid>
        </List>
    );
};

export default AccoutList;